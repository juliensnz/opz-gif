import React from 'react';
import styled, {css} from 'styled-components';
import {Sample} from '../../../../tools/gif';

const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  /* border: 1px solid ${(props) => props.theme.color.grey}; */
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`;

const Mode = styled.div<{selected: boolean}>`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.black};
  border: 1px solid ${(props) => props.theme.color.grey};

  ${(props) =>
    props.selected
      ? css`
          background: ${(props) => props.theme.color.yellow};
        `
      : css``};

  &:nth-child(1) {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    border-right: none;
  }
  &:nth-child(2) {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SampleModeSelector = ({mode, onChange}: {mode: Sample; onChange: (newMode: Sample) => void}) => {
  return (
    <Container>
      <Mode
        data-testid="loop_configurator_sample_trim"
        selected={mode === Sample.Trim}
        onClick={() => onChange(Sample.Trim)}
      >
        Trim
      </Mode>
      <Mode
        data-testid="loop_configurator_sample_sample"
        selected={mode === Sample.Sample}
        onClick={() => onChange(Sample.Sample)}
      >
        Sample
      </Mode>
    </Container>
  );
};

export {SampleModeSelector};
