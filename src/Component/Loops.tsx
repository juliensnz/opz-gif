import React from 'react';
import {Loop} from '../model/loop';
import styled from 'styled-components';
import {Player} from './Player';
import {getAnimate} from '../tools/canvas';

const Container = styled.div`
  flex: 1;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 300px);
`;

const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 3px;
  font-size: 40px;
  color: ${(props) => props.theme.color.lightGrey};
  background: repeating-linear-gradient(
    120deg,
    ${(props) => props.theme.color.white},
    ${(props) => props.theme.color.white} 5px,
    ${(props) => props.theme.color.lightGrey} 5px,
    ${(props) => props.theme.color.lightGrey} 6px
  );
`;

const Wtf = styled(Item)`
  &:hover {
    cursor: pointer;
  }
`;
const Like = styled(Item)`
  &:hover {
    cursor: pointer;
  }
`;

const Actions = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.color.red};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 100;
  font-size: 25px;
  color: ${(props) => props.theme.color.black};
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  display: flex;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const Action = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Loops = ({
  loops,
  onOpenAddLoop,
  onRemoveLoop,
  onOpenInfoLoop,
  onOpenLikeLoop,
}: {
  loops: Loop[];
  onOpenAddLoop: (sprite: number) => void;
  onRemoveLoop: (sprite: number) => void;
  onOpenInfoLoop: () => void;
  onOpenLikeLoop: () => void;
}) => {
  const nonEmptyLoops = [...new Array(14)].map((_content, index: number) => {
    return loops.find((loop) => loop.sprite === index);
  });

  return (
    <Container>
      <Grid>
        {nonEmptyLoops.map((loop: Loop | undefined, index: number) => (
          <Item key={index}>
            {undefined === loop ? (
              index < 14 ? (
                index + 1
              ) : (
                ''
              )
            ) : (
              <Player gif={loop.gif} width={300} configuration={loop.configuration} />
            )}
            {index < 14 && (
              <Actions>
                {undefined === loop ? (
                  <>
                    <Action onClick={() => onOpenAddLoop(index)}>Add</Action>
                  </>
                ) : (
                  <>
                    <Action onClick={() => onRemoveLoop(index)}>Delete</Action>
                  </>
                )}
              </Actions>
            )}
          </Item>
        ))}
        <Wtf onClick={() => onOpenInfoLoop()}>Wtf?</Wtf>
        <Like onClick={() => onOpenLikeLoop()}>Like?</Like>
      </Grid>
    </Container>
  );
};

export {Loops};
