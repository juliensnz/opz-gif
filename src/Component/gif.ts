import SuperGif from 'libgif';

export type GIF = {data: ImageData, delay: number}[]

const getBase64 = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    var reader = new FileReader();

    reader.onload = function(event: any) {
      resolve(event.target.result)
    }

    reader.readAsDataURL(file);
  });
}
const getImage = async (url: string): Promise<HTMLImageElement>=> {
  return new Promise((resolve) => {
    var image = new Image();

    image.onload = function(event: any) {
      resolve(image)
    }

    image.src = url;
  });
}

const getSuperGif = async (image: HTMLImageElement): Promise<any> => {
  return new Promise((resolve) => {
    var superGif = new SuperGif({ gif: image, auto_play: false } );
    superGif.load(() => {
      resolve(superGif);
    });
  });
}

const getGif = async (urlData: string): Promise<GIF> => {
  const image = await getImage(urlData);
  const parent = document.createElement('div');
  parent.appendChild(image);

  return (await getSuperGif(image)).get_frames();
}

export {getGif, getImage, getBase64};
