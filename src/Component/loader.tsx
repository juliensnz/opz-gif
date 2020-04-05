import React, {ChangeEvent, useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {getGif, getBase64} from './gif';
import {
  scaleImage,
  animateTrimed,
  generateSprite,
  getImages,
  getTrimedFrames,
  FRAME_WIDTH,
  FRAME_HEIGHT,
} from './canvas';

const Canvas = styled.canvas`
  top: 0px;
  left: 0px;
  width: 338px;
  height: 156px;
  position: absolute;
`;

const Container = styled.div`
  width: 338px;
  height: 156px;
  background: black;
  position: relative;
  margin-right: 20px;
`;
const DropZone = styled.input`
  top: 0px;
  left: 0px;
  width: 338px;
  height: 156px;
  position: absolute;
  opacity: 0;
`;

const Loader = ({onSpriteUpdate}: {onSpriteUpdate: (sprite: string) => void}) => {
  const [gifData, setGifData] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    if (null !== canvasRef && null !== canvasRef.current) {
      console.log('restart');
      getGif(gifData).then((gif) => {
        scaleImage(canvasRef.current as any, gif);
        animateTrimed(canvasRef.current as any, gif);
        generateSprite(getImages(gif, getTrimedFrames(gif))).then(onSpriteUpdate);
      });
    }
  }, [gifData]);

  return (
    <Container>
      <Canvas ref={canvasRef} width={FRAME_WIDTH} height={FRAME_HEIGHT}></Canvas>
      <DropZone
        type="file"
        onChange={async (event: ChangeEvent<HTMLInputElement>) => {
          if (null === event.target.files || 'image/gif' !== event.target.files[0].type) {
            return;
          }

          setGifData(await getBase64(event.target.files[0]));
        }}
      />
    </Container>
  );
};

export {Loader};
