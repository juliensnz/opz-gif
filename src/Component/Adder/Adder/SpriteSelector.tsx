import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.addModal.windowSize - props.theme.addModal.spacing}px;
  height: ${(props) => props.theme.addModal.windowSize}px;
  padding: ${(props) => props.theme.addModal.spacing}px;
  background: ${(props) => props.theme.color.black};
  box-sizing: border-box;
  justify-content: center;
  display: flex;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
`;

const Sprite = styled.div`
  width: 95px;
  margin-right: 10px;
  height: 44px;
  background: ${(props) => props.theme.color.white};
  line-height: 44px;
  text-align: center;
  font-weight: 100;

  &:hover {
    cursor: pointer;
  }
`;

const SpriteSelector = ({onSpriteConfirmation}: {onSpriteConfirmation: (sprite: number) => void}) => {
  return (
    <Container>
      <Grid>
        {[...new Array(14)].map((_content, index: number) => (
          <Sprite
            key={index}
            onClick={() => {
              onSpriteConfirmation(index);
            }}
          >
            {index + 1}
          </Sprite>
        ))}
      </Grid>
    </Container>
  );
};

export {SpriteSelector};
