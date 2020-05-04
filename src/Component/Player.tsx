import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {FRAME_WIDTH, FRAME_HEIGHT, animate} from '../tools/canvas';
import {Preview} from '../model/loop';

const Canvas = styled.canvas<{cssWidth: number}>`
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => (props.cssWidth / FRAME_WIDTH) * FRAME_HEIGHT}px;
`;

const Player = ({width, preview}: {preview: Preview; width: number}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (null !== canvasRef && null !== canvasRef.current && 0 !== preview.length) {
      const timer = animate(canvasRef.current as any, preview);

      return () => {
        clearInterval(timer);
      };
    }
  }, [preview]);

  return <Canvas ref={canvasRef} width={FRAME_WIDTH} height={FRAME_HEIGHT} cssWidth={width}></Canvas>;
};

export {Player};
