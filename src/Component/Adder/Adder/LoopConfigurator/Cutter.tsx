import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Sample, GIF, getFrameLength} from '../../../../tools/gif';
import {Handle, HandlePosition} from './Handle';

const Container = styled.div`
  width: 100%;
`;

const Timeline = styled.div`
  width: 100%;
  display: flex;
  height: 20px;
  background-color: ${(props) => props.theme.color.grey};
`;

const Timing = styled.div`
  display: flex;
  font-size: 12px;
`;
const Spacer = styled.div`
  flex: 1;
`;

const CutBoard = styled.div`
  position: relative;
  font-size: 12px;
`;

const Start = styled.div`
  position: relative;
  width: 40px;
  left: -20px;
  text-align: center;
`;
const End = styled.div`
  position: relative;
  width: 40px;
  right: -20px;
  text-align: center;
`;
const Trim = styled.div`
  height: 100%;
`;
const TrimStart = styled(Trim)`
  background: repeating-linear-gradient(
    120deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 5px,
    ${(props) => props.theme.color.grey} 5px,
    ${(props) => props.theme.color.grey} 6px
  );
`;

const TrimEnd = styled(Trim)`
  background: repeating-linear-gradient(
    120deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 5px,
    ${(props) => props.theme.color.grey} 5px,
    ${(props) => props.theme.color.grey} 6px
  );
  background-position-x: right;
`;
const TrimCenter = styled(Trim)``;

type CutterProps = {
  length: number;
  start: number;
  end: number;
  mode: Sample;
  gif: GIF;
  onChange: (start: number, end: number) => void;
};

const getTimeLabel = (time: number): string => {
  const label = (Math.round(time / 10) / 100).toString().replace('.', '"');

  return `${label}${label.includes('"') ? '' : '"'}`;
};

const Cutter = ({length, start, end, mode, gif, onChange}: CutterProps) => {
  const [state, setState] = useState({start, end});
  useEffect(() => {
    setState({start, end});
  }, [start, end]);

  const onStartChange = useCallback(
    (newStart: number) => {
      Sample.Sample === mode
        ? setState({...state, start: newStart})
        : setState({start: newStart, end: newStart + 2000});
    },
    [state, mode]
  );
  const onEndChange = useCallback(
    (newEnd: number) => {
      Sample.Sample === mode ? setState({...state, end: newEnd}) : setState({start: newEnd - 2000, end: newEnd});
    },
    [state, mode]
  );
  const onEnd = useCallback(() => {
    onChange(state.start, state.end);
  }, [state, onChange]);

  return (
    <Container>
      <Timing>
        <Start>{getTimeLabel(0)}</Start>
        <Spacer />
        <End>{getTimeLabel(length)}</End>
      </Timing>
      <Timeline>
        <TrimStart style={{width: `${(state.start / length) * 100}%`}} />
        <TrimCenter style={{width: `${((length - (state.start + length - state.end)) / length) * 100}%`}} />
        <TrimEnd style={{width: `${((length - state.end) / length) * 100}%`}} />
      </Timeline>
      <CutBoard>
        <Handle
          value={state.start}
          handlePosition={HandlePosition.Start}
          min={0}
          max={Sample.Sample === mode ? state.end - getFrameLength(gif) * 3 : length - 2000}
          length={length}
          onChange={onStartChange}
          onEnd={onEnd}
        />
        <Handle
          value={state.end}
          handlePosition={HandlePosition.End}
          min={Sample.Sample === mode ? state.start + getFrameLength(gif) * 3 : 2000}
          max={length}
          length={length}
          onChange={onEndChange}
          onEnd={onEnd}
        />
      </CutBoard>
    </Container>
  );
};

export {Cutter, getTimeLabel};
