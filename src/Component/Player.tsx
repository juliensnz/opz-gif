import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {GIF, Configuration} from '../tools/gif';
import {FRAME_WIDTH, FRAME_HEIGHT, animate} from '../tools/canvas';

const Canvas = styled.canvas<{cssWidth: number}>`
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => (props.cssWidth / FRAME_WIDTH) * FRAME_HEIGHT}px;
`;

const Player = ({gif, width, configuration}: {gif: GIF; width: number; configuration: Configuration}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (null !== canvasRef && null !== canvasRef.current) {
      const timer = animate(canvasRef.current as any, gif, configuration);

      return () => {
        clearInterval(timer);
      };
    }
  }, [gif, configuration]);

  return <Canvas ref={canvasRef} width={FRAME_WIDTH} height={FRAME_HEIGHT} cssWidth={width}></Canvas>;
};

export {Player};
