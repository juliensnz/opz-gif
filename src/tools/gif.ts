import SuperGif from 'libgif';

export enum Sample {
  Trim = 'trim',
  Sample = 'sample',
}

export type Frame = {data: ImageData; delay: number};
export type GIF = Frame[];
export type Configuration = {
  mode: Sample;
  start: number;
  end: number;
};

const blockedProviders = ['media.gifs.nl'];

const getBase64 = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    var reader = new FileReader();

    reader.onload = function (event: any) {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  });
};
const getImage = async (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    var image = new Image();

    image.onload = function (event: any) {
      resolve(image);
    };

    image.src = url;
  });
};

const getGifLength = (gif: GIF): number => {
  if (0 === gif.length) return 0;

  return gif.reduce((result, frame) => result + frame.delay, 0) * 10;
};

const getFrameLength = (gif: GIF): number => {
  if (0 === gif.length) return 0;

  return getGifLength(gif) / gif.length;
};

const getDataUrl = async (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if ('image/gif' !== xhr.response.type) {
        reject(`Url "${url}" does not lead to a gif file`);
      }

      var reader = new FileReader();
      reader.onloadend = function () {
        if (null === reader.result) {
          reject(`Cannot read file for url "${url}"`);
        }

        resolve(reader.result as string);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = (error) => {
      if (blockedProviders.some((provider) => -1 !== url.indexOf(provider))) {
        reject(
          `The provider "${blockedProviders.find(
            (provider) => -1 !== url.indexOf(provider)
          )}" does not allow to download gifs from external tools.
          It's not ideal but you can download the gif yourself and import it using the file section below 😉`
        );
      } else if (0 === url.indexOf('file://')) {
        reject(
          `It's not possible to import files from local filesystem as an URL, please import it using the file section below 😉`
        );
      }
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
};

const getSuperGif = async (image: HTMLImageElement): Promise<any> => {
  return new Promise((resolve) => {
    var superGif = new SuperGif({gif: image, auto_play: false});
    superGif.load(() => {
      resolve(superGif);
    });
  });
};

const getGif = async (urlData: string): Promise<GIF> => {
  const image = await getImage(urlData);
  const parent = document.createElement('div');
  parent.appendChild(image);

  const gif = (await getSuperGif(image)).get_frames();

  return gif.map((frame: Frame) => (frame.delay === null || frame.delay === 0 ? {...frame, delay: 1} : frame));
};

export {getGif, getImage, getBase64, getDataUrl, getGifLength, getFrameLength};
