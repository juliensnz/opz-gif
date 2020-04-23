import React, {useState, useEffect, useRef, useCallback} from 'react';
import styled from 'styled-components';
import {getTimeLabel} from './Cutter';

enum HandlePosition {
  Start,
  End,
}
const Grabber = styled.span`
  width: 10px;
  height: 20px;
  border: 1px solid ${(props) => props.theme.color.grey};
  background: repeating-linear-gradient(
    120deg,
    ${(props) => props.theme.color.grey},
    ${(props) => props.theme.color.grey} 5px,
    ${(props) => props.theme.color.white} 5px,
    ${(props) => props.theme.color.white} 6px
  );
`;
const HandleGrabber = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Pin = styled.div`
  background: ${(props) => props.theme.color.grey};
  width: 1px;
  height: 5px;
`;
const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  ${Grabber} {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
const StartHandle = styled(Container)`
  ${Grabber} {
    border-top-right-radius: 5px;
  }
  ${HandleGrabber} {
    align-items: flex-start;
  }
`;
const EndHandle = styled(Container)`
  position: relative;
  ${Grabber} {
    border-top-left-radius: 5px;
  }
  ${HandleGrabber} {
    align-items: flex-end;
  }
`;
const HandleTime = styled.span`
  margin-left: 3px;
`;

const Handle = ({
  handlePosition,
  min,
  max,
  value,
  length,
  onChange,
  onEnd,
}: {
  handlePosition: HandlePosition;
  min: number;
  max: number;
  value: number;
  length: number;
  onChange: (newValue: number) => void;
  onEnd: () => void;
}) => {
  const Element = handlePosition === HandlePosition.Start ? StartHandle : EndHandle;
  const [parentWidth, setParentWidth] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<number>((value / length) * parentWidth);
  useEffect(() => {
    setCurrentPosition((value / length) * parentWidth);
  }, [value, parentWidth, length]);

  const [grabberStartX, setGrabberStartX] = useState<number>(0);
  const [startingPosition, setStartingPosition] = useState<number>(0);
  const [isDragged, setIsDragged] = useState<boolean>(false);

  const containerRef = useRef(null);
  useEffect(() => {
    setIsDragged(false);
    null !== containerRef.current &&
      (containerRef.current as any).parentNode &&
      setParentWidth((containerRef.current as any).parentNode.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    if (isDragged) window.addEventListener('mouseup', mouseUp);

    return () => window.removeEventListener('mouseup', mouseUp);
  }, [isDragged, onEnd]);

  const mouseUp = useCallback(
    (event: any) => {
      event.preventDefault();
      setIsDragged(false);
      onEnd();
    },
    [onEnd]
  );

  const mouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      setGrabberStartX(event.clientX);
      setIsDragged(true);
      setStartingPosition(Math.round(currentPosition));
    },
    [setIsDragged, setGrabberStartX, currentPosition]
  );

  const mouseMove = useCallback(
    (event) => {
      event.preventDefault();
      if (isDragged) {
        const newPosition = Math.round(startingPosition + event.clientX - grabberStartX);
        const newValue = Math.round((newPosition / parentWidth) * length);

        if (newValue > max + 1) {
          onChange(max);
          return;
        } else if (newValue < min - 1) {
          onChange(min);
          return;
        }

        setCurrentPosition(newPosition);
        onChange(newValue);
      }
    },
    [isDragged, setIsDragged, startingPosition, grabberStartX, length, max, min, onChange, parentWidth]
  );

  return (
    <Element
      ref={containerRef}
      style={{left: `${handlePosition === HandlePosition.Start ? currentPosition - 20 : currentPosition - 32}px`}}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
    >
      <HandleGrabber>
        <Pin />
        <Grabber />
      </HandleGrabber>
      <HandleTime>{getTimeLabel(value)}</HandleTime>
    </Element>
  );
};

export {Handle, HandlePosition};
