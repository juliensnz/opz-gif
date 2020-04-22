import React from 'react';
import styled from 'styled-components';
import {Sample, GIF} from '../../../../tools/gif';

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
`;
const Pin = styled.div`
  background: ${(props) => props.theme.color.grey};
  width: 1px;
  height: 5px;
`;
const Handle = styled.div<{position: number}>`
  display: flex;
  position: absolute;
  top: 0;
  left: ${(props) => props.position * 100}%;
  display: flex;
  align-items: center;
  ${Grabber} {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
const StartHandle = styled(Handle)<{position: number}>`
  ${Grabber} {
    border-top-right-radius: 5px;
  }
  ${HandleGrabber} {
    align-items: flex-start;
  }
`;
const EndHandle = styled(Handle)<{position: number}>`
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
const Trim = styled.div<{size: number}>`
  width: ${(props) => props.size * 100}%;
  height: 100%;
`;
const TrimStart = styled(Trim)`
  background: red;
`;
const TrimCenter = styled(Trim)`
  background: blue;
`;
const TrimEnd = styled(Trim)`
  background: green;
`;

type CutterProps = {
  length: number;
  start: number;
  end: number;
  mode: Sample;
  gif: GIF;
  onChange: (start: number, end: number) => void;
};

const getLengthLabel = (length: number): string => `${(length / 1000).toString().replace('.', '"')}`;

const Cutter = ({length, start, end, mode, gif, onChange}: CutterProps) => {
  return (
    <Container>
      <Timing>
        <Start>0</Start>
        <Spacer />
        <End>{getLengthLabel(length)}</End>
      </Timing>
      <Timeline>
        <TrimStart size={start / length} />
        <TrimCenter size={(length - (start + length - end)) / length} />
        <TrimEnd size={(length - end) / length} />
      </Timeline>
      <CutBoard>
        <StartHandle position={start / length}>
          <HandleGrabber>
            <Pin />
            <Grabber />
          </HandleGrabber>
          <HandleTime>{getLengthLabel(start)}</HandleTime>
        </StartHandle>
        <EndHandle position={end / length}>
          <HandleGrabber>
            <Pin />
            <Grabber />
          </HandleGrabber>
          <HandleTime>{getLengthLabel(end)}</HandleTime>
        </EndHandle>
      </CutBoard>
    </Container>
  );
};

export {Cutter};
