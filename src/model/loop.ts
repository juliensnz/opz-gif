import {GIF, Configuration} from '../tools/gif';

export type Loop = {
  gif: GIF;
  configuration: Configuration;
  sprite: number;
};
export type EmptyLoop = {
  gif: GIF;
  configuration: Configuration | null;
  sprite: number | null;
};

export const createEmptyLoop = (): EmptyLoop => ({
  gif: [],
  configuration: null,
  sprite: null,
});
export const createLoopFromSprite = (sprite: number): EmptyLoop => ({
  gif: [],
  configuration: null,
  sprite: sprite,
});

export const isLoop = (loop: Loop | EmptyLoop): loop is Loop =>
  0 !== loop.gif.length && null !== loop.configuration && null !== loop.sprite;

export const getLoop = (loops: Loop[], index: number) => loops.find((loop) => loop.sprite === index);
