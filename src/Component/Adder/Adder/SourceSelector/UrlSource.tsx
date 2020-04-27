import React, {ChangeEvent, useState, useRef, useEffect, KeyboardEvent, useCallback, useContext} from 'react';
import styled from 'styled-components';
import {getDataUrl, getGif, GIF} from '../../../../tools/gif';
import {Back} from '../../../Style/Back';
import {Source} from '../SourceSelector';
import {useAutoFocus} from '../../../../hooks/focus';
import {sendEvent, UserEvent, sendError} from '../../../../tools/analytics';
import {LoadingContext} from '../../../../context/loading';
import {useMounted} from '../../../../hooks/mounted';

const Container = styled.div<{selected: boolean; previous: boolean}>`
  background-color: ${(props) => props.theme.color.yellow};
  width: ${(props) => props.theme.addModal.windowSize}px;
  height: ${(props) =>
    props.selected
      ? props.theme.addModal.windowSize - (props.previous ? 0 : props.theme.addModal.spacing)
      : props.theme.addModal.windowSize / props.theme.addModal.sourceCount}px;
  transition: height 0.5s ease-in-out;
  flex-direction: column;
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

const Form = styled.div<{visible: boolean}>`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? props.theme.addModal.windowSize / props.theme.addModal.sourceCount : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const Input = styled.input`
  margin: 0 10px;
  padding: 10px 5px;
  font-size: 20px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
const Submit = styled.span`
  background: ${(props) => props.theme.color.white};
  color: black;
  margin: 10px 10px;
  padding: 10px 5px;
  font-size: 20px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
const ErrorDisplay = styled.span`
  color: ${(props) => props.theme.color.red};
  margin: 0 10px 10px 10px;
  padding: 0 5px 10px 5px;
  font-size: 15px;
  text-align: left;

  &:hover {
    cursor: pointer;
  }
`;

const UrlSource = ({
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
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useContext(LoadingContext);
  const isMounted = useMounted(() => setLoading(false));
  const [error, setError] = useState<string | null>(null);

  const urlRef = useRef<HTMLInputElement>(null);
  const setFocus = useAutoFocus(urlRef);
  useEffect(() => {
    if (Source.Url === selected) {
      setFocus();
    }

    if (null === selected) {
      setTimeout(() => setUrl(''), 500);
    }
  }, [selected, previous, setFocus]);

  const submit = useCallback(async () => {
    if (true === loading) return;
    setLoading(true);
    setError(null);

    try {
      const gifData = await getDataUrl(url);
      const newGif = await getGif(gifData);

      if (!isMounted()) return;
      setLoading(false);
      sendEvent(UserEvent.GifSelected, {type: 'url'});
      onGifSelected(newGif);
    } catch (error) {
      sendError('cannot_generate_gif_from_url', error);
      setError(`Error: ${error}`);

      if (!isMounted()) return;
      setLoading(false);
    }
  }, [url, onGifSelected, setLoading, loading, isMounted]);

  return (
    <Container selected={Source.Url === selected} previous={previous}>
      <Button onClick={() => Source.Url !== selected && onSelected()}>Url</Button>
      <Form visible={Source.Url === selected}>
        <Input
          ref={urlRef}
          placeholder="Your GIF url"
          type="text"
          onChange={async (event: ChangeEvent<HTMLInputElement>) => {
            setUrl(event.currentTarget.value);
          }}
          onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
            if ('Enter' === event.key) {
              submit();
            }
          }}
          value={url}
        />
        <Submit onClick={submit}>Confirm</Submit>
        {null !== error && <ErrorDisplay>{error}</ErrorDisplay>}
      </Form>
      {previous && (
        <Back vertical={true} onClick={() => onGifSelected([])}>
          Back
        </Back>
      )}
      {null !== selected && Source.Url !== selected && (
        <Back vertical={false} leading={false} onClick={() => onSelected()}>
          Back
        </Back>
      )}
    </Container>
  );
};

export {UrlSource};
