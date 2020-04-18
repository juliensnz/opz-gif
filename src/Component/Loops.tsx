import React from 'react';
import {Loop} from '../model/loop';
import styled from 'styled-components';
import {Player} from './Player';

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

const Loops = ({loops}: {loops: Loop[]}) => {
  const nonEmptyLoops = [...new Array(16)].map((_content, index: number) => {
    return loops.find((loop) => loop.sprite === index);
  });

  return (
    <Container>
      <Grid>
        {nonEmptyLoops.map((loop: Loop | undefined, index: number) => (
          <Item key={index}>{undefined === loop ? index + 1 : <Player gif={loop.gif} width={300} />}</Item>
        ))}
      </Grid>
    </Container>
  );
};

export {Loops};
