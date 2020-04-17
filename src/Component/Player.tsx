import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {GIF} from '../tools/gif';
import {scaleImage, animateTrimed, FRAME_WIDTH, FRAME_HEIGHT} from '../tools/canvas';

const Canvas = styled.canvas<{cssWidth: number}>`
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => (props.cssWidth / FRAME_WIDTH) * FRAME_HEIGHT}px;
`;

const Player = ({gif, width}: {gif: GIF; width: number}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (null !== canvasRef && null !== canvasRef.current) {
      scaleImage(canvasRef.current as any, gif);
      const timer = animateTrimed(canvasRef.current as any, gif);

      return () => {
        clearInterval(timer);
      };
    }
  }, [gif]);

  return <Canvas ref={canvasRef} width={FRAME_WIDTH} height={FRAME_HEIGHT} cssWidth={width}></Canvas>;
};

export {Player};
