import {GIF, Configuration} from '../tools/gif';
import {getImages} from '../tools/canvas';

export type Loop = {
  gif: GIF;
  configuration: Configuration;
  sprite: number;
  preview: ImageData[];
};
export type EmptyLoop = {
  gif: GIF;
  configuration: Configuration | null;
  sprite: number | null;
  preview: ImageData[];
};

export const createEmptyLoop = (): EmptyLoop => ({
  gif: [],
  configuration: null,
  sprite: null,
  preview: [],
});
export const createLoopFromSprite = (sprite: number): EmptyLoop => ({
  gif: [],
  configuration: null,
  sprite: sprite,
  preview: [],
});
export const updatePreview = (loop: Loop): Loop => {
  return {...loop, preview: getImages(loop.gif, loop.configuration)};
};

export const isLoop = (loop: Loop | EmptyLoop): loop is Loop =>
  0 !== loop.gif.length && null !== loop.configuration && null !== loop.sprite;

export const getLoop = (loops: Loop[], index: number) => loops.find((loop) => loop.sprite === index);
