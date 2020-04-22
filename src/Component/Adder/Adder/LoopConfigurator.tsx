import React, {useContext} from 'react';
import styled, {useTheme, ThemeContext} from 'styled-components';
import {GIF, Sample, Configuration, getGifLength} from '../../../tools/gif';
import {Player} from '../../Player';
import {Back} from '../../Style/Back';
import {Cutter} from './LoopConfigurator/Cutter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.addModal.windowSize - props.theme.addModal.spacing}px;
  height: ${(props) => props.theme.addModal.windowSize}px;
  padding: ${(props) => props.theme.addModal.spacing}px;
  background: rgb(208, 208, 208);
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
`;

const Submit = styled.span`
  background-color: ${(props) => props.theme.color.yellow};
  color: black;
  margin: 20px 0;
  padding: 10px 5px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

const LoopConfigurator = ({
  gif,
  onLoopConfirmation,
  previous,
}: {
  gif: GIF;
  previous: boolean;
  onLoopConfirmation: (loop: Configuration | null) => void;
}) => {
  console.log(getGifLength(gif));
  const theme = useContext(ThemeContext);

  return (
    <Container>
      {gif.length !== 0 && (
        <>
          <Player gif={gif} width={theme.addModal.windowSize - theme.addModal.spacing * 3} />
          <Cutter length={getGifLength(gif)} start={345} end={1350} mode={Sample.Trim} gif={gif} onChange={() => {}} />
          <Submit
            onClick={() => {
              onLoopConfirmation({sample: Sample.Trim});
            }}
          >
            Confirm
          </Submit>
        </>
      )}
      {previous && (
        <Back vertical={true} onClick={() => onLoopConfirmation(null)}>
          Back
        </Back>
      )}
    </Container>
  );
};

export {LoopConfigurator};
