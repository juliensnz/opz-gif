import React, {useState} from 'react';
import {GIF} from '../../../tools/gif';
import styled from 'styled-components';
import {UrlSource} from './SourceSelector/UrlSource';
import {FileSource} from './SourceSelector/FileSource';

enum Source {
  Url,
  File,
}

const Container = styled.div<{source: Source | null; previous: boolean}>`
  width: ${(props) => props.theme.addModal.windowSize}px;
  overflow: hidden;
  transform: translate3d(
    0,
    -${(props) => (props.source === Source.File ? props.theme.addModal.windowSize / 2 - (!props.previous ? props.theme.addModal.spacing : 0) : 0)}px,
    0
  );
  transition: all 0.5s ease-in-out;
`;

const SourceSelector = ({onGifSelected, previous}: {previous: boolean; onGifSelected: (gif: GIF) => void}) => {
  const [source, setSource] = useState<null | Source>(Source.File);

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
    </Container>
  );
};

export {SourceSelector, Source};
