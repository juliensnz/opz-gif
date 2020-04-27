import React, {ChangeEvent, useContext, useCallback, useState} from 'react';
import styled from 'styled-components';
import {GIF, getBase64, getGif} from '../../../../tools/gif';
import {Back} from '../../../Style/Back';
import {Source} from '../SourceSelector';
import {sendEvent, UserEvent, sendError} from '../../../../tools/analytics';
import {LoadingContext} from '../../../../context/loading';
import {useMounted} from '../../../../hooks/mounted';

const Container = styled.div<{selected: boolean; previous: boolean}>`
  background-color: ${(props) => props.theme.color.blue};
  width: ${(props) => props.theme.addModal.windowSize}px;
  height: ${(props) =>
    props.selected
      ? props.theme.addModal.windowSize - (props.previous ? 0 : props.theme.addModal.spacing * 2)
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
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const DropZone = styled.div<{visible: boolean}>`
  width: ${(props) => props.theme.addModal.windowSize}px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? props.theme.addModal.windowSize / props.theme.addModal.sourceCount : 0)}px;
  transition: opacity 0.5s ease-in-out, transform 0.2s ease-in-out;
  position: relative;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Explanation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - ${(props) => props.theme.addModal.spacing * 2}px);
  height: calc(100%);
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23E9B13DFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 10px;
  margin: 0 ${(props) => props.theme.addModal.spacing}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 200;
  padding: 20px;
  flex-direction: column;
  box-sizing: border-box;
`;

const ErrorDisplay = styled.span`
  color: ${(props) => props.theme.color.white};
  text-align: center;
  margin-top: 20px;
`;
const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  &:hover {
    cursor: pointer;
  }
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
  const [loading, setLoading] = useContext(LoadingContext);
  const isMounted = useMounted(() => setLoading(false));
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      if (true === loading) return;
      if (null === event.target.files) return;
      if ('image/gif' !== event.target.files[0].type) {
        const error = new Error(
          `File type "${event.target.files[0].type}" are not supported yet. Only .gif files are supported for now.`
        );
        sendError('cannot_generate_gif_from_file', error);
        setError(`Error: ${error.message}`);
        return;
      }
      setLoading(true);

      try {
        const gifData = await getBase64(event.target.files[0]);
        const newGif = await getGif(gifData);

        if (!isMounted()) return;
        setLoading(false);
        sendEvent(UserEvent.GifSelected, {type: 'file'});
        onGifSelected(newGif);
      } catch (error) {
        sendError('cannot_generate_gif_from_file', error);
        setError(`Error: ${error}`);

        if (!isMounted()) return;
        setLoading(false);
      }
    },
    [onGifSelected, setLoading, loading, isMounted]
  );

  return (
    <Container selected={Source.File === selected} previous={previous}>
      <Button onClick={() => Source.File !== selected && onSelected()}>File</Button>
      {null !== selected && Source.File !== selected && (
        <Back vertical={false} onClick={() => onSelected()}>
          Back
        </Back>
      )}
      <DropZone visible={Source.File === selected}>
        <Explanation>
          <span>Click here or directly drop your file</span>
          {null !== error && <ErrorDisplay>{error}</ErrorDisplay>}
        </Explanation>

        <Input type="file" onChange={submit} />
      </DropZone>
      {null !== selected && Source.File !== selected && (
        <Back vertical={false} leading={false} onClick={() => onSelected()}>
          Back
        </Back>
      )}

      {previous && (
        <Back vertical={true} onClick={() => onGifSelected([])}>
          Back
        </Back>
      )}
    </Container>
  );
};

export {FileSource};
