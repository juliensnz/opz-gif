import {GIF, Sample, Configuration, Frame, getFrameLength} from './gif';

const FRAME_WIDTH = 1014;
const FRAME_HEIGHT = 468;
const ANIMATION_LENGTH = 2000;
const FRAME_RATIO = FRAME_WIDTH / FRAME_HEIGHT;

const isTooWide = (imageData: ImageData) => imageData.width / imageData.height > FRAME_RATIO;

const addImageToCanvas = (context: CanvasRenderingContext2D, imageData: ImageData) => {
  if (!isTooWide(imageData)) {
    const croppedWidth = imageData.width;
    const croppedHeight = (imageData.width / FRAME_WIDTH) * FRAME_HEIGHT;
    const left = 0;
    const top = (imageData.height - croppedHeight) / 2;

    context.putImageData(imageData, 0, -top, left, top, croppedWidth, croppedHeight);
  } else {
    const croppedWidth = (imageData.height / FRAME_HEIGHT) * FRAME_WIDTH;
    const croppedHeight = imageData.height;
    const left = (imageData.width - croppedWidth) / 2;
    const top = 0;
    context.putImageData(imageData, -left, 0, left, top, croppedWidth, croppedHeight);
  }
};

const drawImage = (canvas: HTMLCanvasElement, imageData: ImageData) => {
  const context = canvas.getContext('2d');
  if (null === context) return;

  addImageToCanvas(context, imageData);
};

const getAnimate = (configuration: Configuration) =>
  configuration.mode === Sample.Trim ? getTrimedFrames : getSampledFrames;

const getTrimedFrames = (gif: GIF) => {
  const frameCount = Math.floor(ANIMATION_LENGTH / getFrameLength(gif));

  return [...new Array(30)].map((_value: any, index: number) =>
    getFrame(frameCount >= gif.length ? gif.length : frameCount, index)
  );
};
const getSampledFrames = (gif: GIF) => {
  return [...new Array(30)].map((_value: any, index: number) => getFrame(gif.length, index));
};

const filterGif = (gif: GIF, start: number, end: number): GIF => {
  let previousPosition = 0;
  return gif.filter((frame: Frame) => {
    const position = previousPosition + frame.delay * 10;

    previousPosition = position;
    return position >= start && position <= end;
  });
};

const animate = (canvas: HTMLCanvasElement, gif: GIF, configuration: Configuration): number => {
  let cpt = 0;
  const trimedGif = filterGif(gif, configuration.start, configuration.end);
  const frames = getAnimate(configuration)(trimedGif);

  return setInterval(() => {
    const imageData = getCroppedImageData(trimedGif[frames[cpt % 30]].data);
    drawImage(canvas, imageData);
    cpt++;
  }, ANIMATION_LENGTH / 30);
};

const scaleImage = (canvas: HTMLCanvasElement, gif: GIF) => {
  const firstFrame = gif[0].data;
  const scale = !isTooWide(firstFrame) ? FRAME_WIDTH / firstFrame.width : FRAME_HEIGHT / firstFrame.height;

  (canvas.getContext('2d') as any).scale(scale, scale);
};

const clearCanvas = (canvas: HTMLCanvasElement) => {
  (canvas.getContext('2d') as any).clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
};

const getFrame = (totalFrames: number, frameNumber: number) => {
  const frameStep = totalFrames / 30;

  return Math.floor(frameNumber * frameStep);
};

const getCroppedImageData = (imageData: ImageData) => {
  const scaledCanvas = document.createElement('canvas');
  scaledCanvas.width = FRAME_WIDTH;
  scaledCanvas.height = FRAME_HEIGHT;
  const scaledContext = scaledCanvas.getContext('2d');
  if (null === scaledContext) throw Error('Cannot get scaled context');

  const canvas = document.createElement('canvas');
  canvas.width = imageData.width;
  canvas.height = imageData.width;
  const scale = FRAME_WIDTH / imageData.width;
  const context = canvas.getContext('2d');
  if (null === context) throw Error('Cannot get context');
  addImageToCanvas(context, imageData);

  scaledContext.scale(scale, scale);
  scaledContext.drawImage(canvas, 0, 0);

  return scaledContext.getImageData(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
};

const getImages = (gif: GIF, configuration: Configuration): ImageData[] => {
  const trimedGif = filterGif(gif, configuration.start, configuration.end);
  const frames = getAnimate(configuration)(trimedGif);

  return frames.map((key: number) => getCroppedImageData(trimedGif[key].data));
};

const getOffsetX = (index: number): number => 5 + (FRAME_WIDTH + 10) * (index % 4);
const getOffsetY = (index: number): number => 22 + (FRAME_HEIGHT + 44) * Math.floor(index / 4);

const generateSprite = async (images: ImageData[]): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.width = 4096;
  canvas.height = 4096;
  const context = canvas.getContext('2d');
  if (null === context) throw Error('Cannot create canvas');

  for (let key in images) {
    context.putImageData(images[key], getOffsetX(key as any), getOffsetY(key as any));
  }

  context.drawImage(canvas, 0, 0);

  return canvas.toDataURL('image/png');
};

export {
  addImageToCanvas,
  scaleImage,
  animate,
  getAnimate,
  generateSprite,
  getImages,
  clearCanvas,
  isTooWide,
  FRAME_WIDTH,
  FRAME_HEIGHT,
};
