import React, {useState, ChangeEvent} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.color.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 80%;
  border: none;
  height: 30px;
  padding-left: 5px;
`;

const Button = styled.span`
  width: 80%;
  border: none;
  height: 35px;
  padding-left: 5px;
  background-color: black;
  color: white;
  margin-top: 5px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

const Url = ({onChange}: {onChange: (value: string) => void}) => {
  const [url, setUrl] = useState('');

  return (
    <Container>
      <Input
        type="text"
        onChange={async (event: ChangeEvent<HTMLInputElement>) => {
          setUrl(event.currentTarget.value);
        }}
        value={url}
      />
      <Button
        onClick={() => {
          onChange(url);
          setUrl('');
        }}
      >
        Go
      </Button>
    </Container>
  );
};

export {Url};
