import {GIF, Sample, Configuration, Frame} from './gif';

const FRAME_WIDTH = 1014;
const FRAME_HEIGHT = 468;
const ANIMATION_LENGTH = 2000;

const addImageToCanvas = (context: CanvasRenderingContext2D, imageData: ImageData) => {
  const croppedWidth = imageData.width;
  const croppedHeight = (imageData.width / FRAME_WIDTH) * FRAME_HEIGHT;
  const left = 0;
  const top = (imageData.height - croppedHeight) / 2;

  context.putImageData(imageData, 0, -top, left, top, croppedWidth, croppedHeight);
};

const drawImage = (canvas: HTMLCanvasElement, imageData: ImageData) => {
  const context = canvas.getContext('2d');
  if (null === context) return;

  addImageToCanvas(context, imageData);
  context.drawImage(canvas, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
};

const getAnimate = (configuration: Configuration) =>
  configuration.mode === Sample.Trim ? getTrimedFrames : getSampledFrames;

const getTrimedFrames = (gif: GIF) => {
  const frameCount = Math.floor(ANIMATION_LENGTH / (gif[0].delay * 10));

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
    const imageData = trimedGif[frames[cpt % 30]].data;
    drawImage(canvas, imageData);
    cpt++;
  }, ANIMATION_LENGTH / 30);
};

const scaleImage = (canvas: HTMLCanvasElement, gif: GIF) => {
  const scale = FRAME_WIDTH / gif[0].data.width;

  (canvas.getContext('2d') as any).scale(scale, scale);
};

const clearCanvas = (canvas: HTMLCanvasElement) => {
  (canvas.getContext('2d') as any).clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
};

const getFrame = (totalFrames: number, frameNumber: number) => {
  const frameStep = totalFrames / 30;

  return Math.floor(frameNumber * frameStep);
};

const getImages = (gif: GIF, frames: number[]): ImageData[] => {
  return frames.map((key: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = FRAME_WIDTH;
    canvas.height = FRAME_HEIGHT;
    const imageData = gif[key].data;
    const scale = FRAME_WIDTH / imageData.width;

    const context = canvas.getContext('2d');
    if (null === context) throw Error('Cannot get context');
    addImageToCanvas(context, imageData);
    context.scale(scale, scale);
    context.drawImage(canvas, 0, 0);

    return context.getImageData(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
  });
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
  FRAME_WIDTH,
  FRAME_HEIGHT,
};
