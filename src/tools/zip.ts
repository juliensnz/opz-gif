import JSZip from 'jszip';
import {generateSprite, getImages} from './canvas';
import {Loop} from '../model/loop';

const generateZip = (loops: Loop[]): Promise<Blob> => {
  return new Promise(async (resolve) => {
    const zip = new JSZip();
    const folder = zip.folder('GIFs');
    for (const loop of loops) {
      const sprite = await generateSprite(getImages(loop.gif, loop.configuration));
      if ('' === sprite) return;

      folder.file(
        `GIF-Looper-Template-Spritesheet${loop.sprite + 1 < 10 ? '0' : ''}${loop.sprite + 1}.png`,
        sprite.replace('data:image/png;base64,', ''),
        {
          base64: true,
        }
      );
    }

    zip.generateAsync({type: 'blob'}).then(function (content) {
      resolve(content);
    });
  });
};

export {generateZip};
