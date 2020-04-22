import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Sample, GIF, getGifStepLength} from '../../../../tools/gif';
import {Handle, Position} from './Handle';

const Container = styled.div`
  width: ${(props) => props.theme.addModal.windowSize - props.theme.addModal.spacing * 3}px;
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

const getTimeLabel = (time: number): string => `${(time / 1000).toString().replace('.', '"')}`;

const Cutter = ({length, start, end, mode, gif, onChange}: CutterProps) => {
  const [state, setState] = useState({start, end});
  useEffect(() => {
    setState({start, end});
  }, [start, end]);

  const onStartChange = useCallback(
    (newStart: number) => {
      setState({...state, start: newStart});
    },
    [state]
  );
  const onEndChange = useCallback(
    (newEnd: number) => {
      setState({...state, end: newEnd});
    },
    [state]
  );
  const onEnd = useCallback(() => {
    onChange(state.start, state.end);
  }, [state]);

  const split = Sample.Sample === mode ? getGifStepLength(gif) * 3 : 2000;

  return (
    <Container>
      <Timing>
        <Start>0</Start>
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
          position={Position.Start}
          min={0}
          max={state.end - split}
          length={length}
          onChange={onStartChange}
          onEnd={onEnd}
        />
        <Handle
          value={state.end}
          position={Position.End}
          min={state.start + split}
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
