import React, {useState, useCallback} from 'react';
import {Loader} from './Component/loader';
import styled from 'styled-components';
import JSZip from 'jszip';
import {saveAs} from 'file-saver';

const Download = styled.span``;

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(338px, 1fr));
`;

const useSpriteState = (): [string[], (index: number, sprite: string) => void] => {
  const [sprites, setSprites] = useState([...new Array(16)].map(() => ''));

  const setSprite = useCallback(
    (index: number, sprite: string) => {
      const clonedSprites = [...sprites];
      clonedSprites[index] = sprite;

      setSprites(clonedSprites);
    },
    [sprites]
  );

  return [sprites, setSprite];
};

function App() {
  const [sprites, setSprites] = useSpriteState();

  const onSpriteUpdate = useCallback(
    (index: number) => (updatedSprite: string) => {
      setSprites(index, updatedSprite);
    },
    [setSprites]
  );

  return (
    <>
      <Download
        onClick={() => {
          const zip = new JSZip();
          const folder = zip.folder('GIFs');
          sprites.forEach((sprite, index) => {
            if ('' === sprite) return;
            console.log(sprite);
            folder.file(
              `GIF-Looper-Template-Spritesheet${index + 1 < 10 ? '0' : ''}${index + 1}.png`,
              sprite.replace('data:image/png;base64,', ''),
              {
                base64: true,
              }
            );
          });

          zip.generateAsync({type: 'blob'}).then(function (content) {
            saveAs(content, 'GIFs.zip');
          });
        }}
      >
        Download
      </Download>
      <Container>
        {sprites.map((_value, index: number) => (
          <Loader key={index} onSpriteUpdate={onSpriteUpdate(index)} />
        ))}
      </Container>
    </>
  );
}

export default App;
