import SuperGif from 'libgif';

export enum Sample {
  Trim,
  Sample,
}

export type GIF = {data: ImageData; delay: number}[];
export type Configuration = {
  sample: Sample;
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
      } else {
        reject(
          `Cannot fetch url "${url}". It's likely to be related a right limitation coming from
          the image provider. Try to download it yourself and import it using the file section below 😉`
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

  return (await getSuperGif(image)).get_frames();
};

export {getGif, getImage, getBase64, getDataUrl};
