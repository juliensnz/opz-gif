import React, {
  ChangeEvent,
  useContext,
  useCallback,
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  SyntheticEvent,
} from 'react';
import styled from 'styled-components';
import {GIF, getGif, getDataUrl} from '../../../../tools/gif';
import {Back} from '../../../Style/Back';
import {Source} from '../SourceSelector';
import {sendEvent, UserEvent, sendError} from '../../../../tools/analytics';
import {LoadingContext} from '../../../../context/loading';
import {useMounted} from '../../../../hooks/mounted';
import {Grid} from '@giphy/react-components';
import {GiphyFetch} from '@giphy/js-fetch-api';
import {useAutoFocus} from '../../../../hooks/focus';

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

const Container = styled.div<{selected: boolean; previous: boolean}>`
  background-color: ${(props) => props.theme.color.red};
  width: ${(props) => props.theme.addModal.windowSize}px;
  height: ${(props) =>
    props.selected
      ? props.theme.addModal.windowSize - (props.previous ? 0 : props.theme.addModal.spacing)
      : props.theme.addModal.windowSize / props.theme.addModal.sourceCount}px;
  transition: height 0.5s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Button = styled.div<{selected: boolean}>`
  width: ${(props) => props.theme.addModal.windowSize}px;
  height: ${(props) =>
    props.selected
      ? props.theme.addModal.spacing
      : props.theme.addModal.windowSize / props.theme.addModal.sourceCount}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 200;
  flex-shrink: 0;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
const ErrorDisplay = styled.span`
  color: ${(props) => props.theme.color.white};
  text-align: center;
  margin-top: 20px;
`;

const SelectionZone = styled.div<{visible: boolean}>`
  width: ${(props) => props.theme.addModal.windowSize}px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? props.theme.addModal.windowSize - 2 * props.theme.addModal.spacing : 0)}px;
  transition: opacity 0.5s ease-in-out, transform 0.2s ease-in-out;
  position: relative;
  flex: 1;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
`;
const Form = styled.div<{visible: boolean}>`
  display: flex;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? props.theme.addModal.windowSize / props.theme.addModal.sourceCount : 0)};
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 10px 0 ${(props) => props.theme.color.red};
  background: ${(props) => props.theme.color.red};
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px 5px;
  font-size: 20px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  flex: 1;
  outline-style: none;
`;
const Submit = styled.span`
  background: ${(props) => props.theme.color.white};
  color: black;
  padding: 10px 20px;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const PoweredContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 60px 0;
`;

const PoweredLogo = styled.img`
  width: 200px;
`;

const GiphySource = ({
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
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');
  const [loading, setLoading] = useContext(LoadingContext);
  const isMounted = useMounted(() => setLoading(false));
  const [error, setError] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const setFocus = useAutoFocus(searchRef);
  useEffect(() => {
    if (Source.Giphy === selected) {
      setFocus();
    }

    if (null === selected) {
      setTimeout(() => setSearch(''), 500);
    }
  }, [selected, previous, setFocus]);

  const fetchGifs = useCallback(
    (offset: number) => {
      return gf.search(search, {sort: 'relevant', lang: 'en', limit: 200, type: 'gifs'});
    },
    [search]
  );

  const submit = useCallback(
    async (url) => {
      if (true === loading) return;
      setLoading(true);
      setError(null);

      try {
        const gifData = await getDataUrl(url);
        const newGif = await getGif(gifData);

        if (!isMounted()) return;
        setLoading(false);
        sendEvent(UserEvent.GifSelected, {type: 'giphy'});
        onGifSelected(newGif);
      } catch (error) {
        sendError('cannot_generate_gif_from_giphy', error);
        setError(`Error: ${error}`);

        if (!isMounted()) return;
        setLoading(false);
      }
    },
    [onGifSelected, setLoading, loading, isMounted]
  );

  const doSearch = useCallback(() => {
    setCurrentSearch(search);
  }, [search]);

  return (
    <Container selected={Source.Giphy === selected} previous={previous}>
      <Button selected={Source.Giphy === selected} onClick={() => Source.Giphy !== selected && onSelected()}>
        Giphy
      </Button>
      {null !== selected && Source.Giphy !== selected && (
        <Back vertical={false} onClick={() => onSelected()}>
          Back
        </Back>
      )}

      <SelectionZone visible={Source.Giphy === selected}>
        <Form visible={Source.Giphy === selected}>
          <Input
            ref={searchRef}
            placeholder="Your search"
            type="text"
            onChange={async (event: ChangeEvent<HTMLInputElement>) => {
              setSearch(event.currentTarget.value);
              setCurrentSearch('');
            }}
            onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
              if ('Enter' === event.key) {
                doSearch();
              }
            }}
            value={search}
          />
          <Submit onClick={doSearch}>Search</Submit>
          {null !== error && <ErrorDisplay>{error}</ErrorDisplay>}
        </Form>
        {'' !== search && search === currentSearch ? (
          <Grid
            width={480}
            columns={3}
            fetchGifs={fetchGifs}
            hideAttribution={true}
            onGifClick={(gif: any, event: SyntheticEvent<HTMLElement, Event>) => {
              submit(gif.images.original.url);
              event.preventDefault();
              return false;
            }}
          />
        ) : (
          <PoweredContainer>
            <PoweredLogo src="./PoweredByGiphy.png" />
          </PoweredContainer>
        )}
      </SelectionZone>

      {previous && (
        <Back vertical={true} onClick={() => onGifSelected([])}>
          Back
        </Back>
      )}
    </Container>
  );
};

export {GiphySource};
