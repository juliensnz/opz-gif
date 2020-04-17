import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import {GIF, getBase64, getGif} from '../../../../tools/gif';
import {Back} from '../../../Style/Back';
import {Source} from '../SourceSelector';

const WINDOW_SIZE = 600;
const SOURCE_COUNT = 2;
const SPACING = 60;
const Container = styled.div<{selected: boolean; previous: boolean}>`
  background-color: ${(props) => props.theme.color.blue};
  width: ${WINDOW_SIZE}px;
  height: ${(props) =>
    props.selected
      ? props.theme.addModal.windowSize - (props.previous ? 0 : props.theme.addModal.spacing)
      : props.theme.addModal.windowSize / props.theme.addModal.sourceCount}px;
  transition: height 0.5s ease-in-out;
  position: relative;
`;
const Button = styled.div`
  width: ${(props) => props.theme.addModal.windowSize}px;
  height: ${(props) => props.theme.addModal.windowSize / props.theme.addModal.sourceCount}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 200;

  &:hover {
    cursor: pointer;
  }
`;

const DropZone = styled.div<{visible: boolean}>`
  width: ${(props) => props.theme.addModal.windowSize}px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? props.theme.addModal.windowSize / props.theme.addModal.sourceCount : 0)}px;
  transition: opacity 0.5s ease-in-out;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const Explanation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - ${(props) => props.theme.addModal.spacing}px);
  height: calc(100% - ${(props) => props.theme.addModal.spacing}px);
  border: 1px solid red;
  margin: ${(props) => props.theme.addModal.spacing}px;
`;
const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - ${(props) => props.theme.addModal.spacing}px);
  height: calc(100% - ${(props) => props.theme.addModal.spacing}px);
  opacity: 0;
  margin: ${(props) => props.theme.addModal.spacing}px;
`;

const FileSource = ({
  selected,
  previous,
  onSelected,
  onGifSelected,
}: {
  selected: Source | null;
  previous: boolean;
  onSelected: () => void;
  onGifSelected: (gif: GIF) => void;
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <Container selected={Source.File === selected} previous={previous}>
      <Button onClick={() => Source.File !== selected && onSelected()}>File</Button>
      {null !== selected && Source.File !== selected && (
        <Back vertical={false} onClick={() => onSelected()}>
          Back
        </Back>
      )}
      <DropZone visible={Source.File === selected}>
        <Input
          type="file"
          onChange={async (event: ChangeEvent<HTMLInputElement>) => {
            if (null === event.target.files || 'image/gif' !== event.target.files[0].type) {
              return;
            }
            setLoading(true);

            const gifData = await getBase64(event.target.files[0]);
            const newGif = await getGif(gifData);
            onGifSelected(newGif);
            setLoading(false);
          }}
        />
        <Explanation>Click here or directly drop your file</Explanation>
      </DropZone>

      {previous && (
        <Back vertical={true} onClick={() => onGifSelected([])}>
          Back
        </Back>
      )}
    </Container>
  );
};

export {FileSource};
