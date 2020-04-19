import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Bar = styled.div`
  width: 50px;
  height: 20px;
  border-radius: 10px;
  margin-right: 20px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.color.white};
`;

const Progress = styled.div`
  @keyframes moveIt {
    from {
      background-position: bottom left;
    }
    to {
      background-position: top right;
    }
  }

  height: 100%;
  width: 70%;

  background: repeating-linear-gradient(
    120deg,
    ${(props) => props.theme.color.lightGrey},
    ${(props) => props.theme.color.lightGrey} 5px,
    ${(props) => props.theme.color.white} 5px,
    ${(props) => props.theme.color.white} 6px
  );
  background-size: 250px;
  animation: moveIt 10s linear infinite;
`;

const Loading = ({isLoading}: {isLoading: boolean}) => {
  return (
    <Container>
      {isLoading && (
        <Bar>
          <Progress />
        </Bar>
      )}
    </Container>
  );
};

export {Loading};
