import React, {useState} from 'react';
import {GIF} from '../../../tools/gif';
import styled from 'styled-components';
import {UrlSource} from './SourceSelector/UrlSource';
import {FileSource} from './SourceSelector/FileSource';
import {GiphySource} from './SourceSelector/GiphySource';

enum Source {
  Url,
  File,
  Giphy,
}

const getTranslation = (source: Source | null, previous: boolean, theme: any) => {
  switch (source) {
    case Source.File:
      return theme.addModal.windowSize / theme.addModal.sourceCount - (!previous ? theme.addModal.spacing : 0);
    case Source.Giphy:
      return 2 * (theme.addModal.windowSize / theme.addModal.sourceCount) - (!previous ? theme.addModal.spacing : 0);
    case Source.Url:
      return 0;

    default:
      return 0;
  }
};

const Container = styled.div<{source: Source | null; previous: boolean}>`
  width: ${(props) => props.theme.addModal.windowSize}px;
  overflow: hidden;
  transform: translate3d(0, -${(props) => getTranslation(props.source, props.previous, props.theme)}px, 0);
  transition: all 0.5s ease-in-out;
`;

const SourceSelector = ({onGifSelected, previous}: {previous: boolean; onGifSelected: (gif: GIF) => void}) => {
  const [source, setSource] = useState<null | Source>(null);

  return (
    <Container source={source} previous={previous}>
      <UrlSource
        onSelected={() => {
          setSource(null === source ? Source.Url : null);
        }}
        selected={source}
        previous={previous}
        onGifSelected={onGifSelected}
      />
      <FileSource
        onSelected={() => {
          setSource(null === source ? Source.File : null);
        }}
        selected={source}
        previous={previous}
        onGifSelected={onGifSelected}
      />
      <GiphySource
        onSelected={() => {
          setSource(null === source ? Source.Giphy : null);
        }}
        selected={source}
        previous={previous}
        onGifSelected={onGifSelected}
      />
    </Container>
  );
};

export {SourceSelector, Source};
