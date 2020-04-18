import React, {useState, useCallback, useEffect} from 'react';
import {Loader} from './Component/Loader';
import styled from 'styled-components';
import JSZip from 'jszip';
import {saveAs} from 'file-saver';
import {requestStorage, saveJSONFile, getJSONFile} from './tools/storage';

const Download = styled.span``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(338px, 1fr));
  width: 95vw;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
`;

const areSpriteEmpty = (sprites: string[]) => {
  return !sprites.some((sprite) => 0 !== sprite.length);
};

const useSpriteState = (): [string[], (index: number, sprite: string) => void] => {
  const [sprites, setSprites] = useState([...new Array(14)].map(() => ''));

  const setSprite = useCallback(
    (index: number, sprite: string) => {
      const clonedSprites = [...sprites];
      clonedSprites[index] = sprite;

      setSprites(clonedSprites);
    },
    [sprites]
  );

  useEffect(() => {
    requestStorage().then(async (fs: any) => {
      const storedSprites = await getJSONFile(fs, 'images.json');
      setSprites(storedSprites);
    });
  }, []);

  useEffect(() => {
    if (!areSpriteEmpty(sprites)) {
      requestStorage().then(async (fs: any) => {
        await saveJSONFile(fs, 'images.json', sprites);
      });
    }
  }, [sprites]);

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
    <Container>
      <Download
        onClick={() => {
          const zip = new JSZip();
          const folder = zip.folder('GIFs');
          sprites.forEach((sprite, index) => {
            if ('' === sprite) return;

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
      <Grid>
        {sprites.map((_value, index: number) => (
          <Item key={index}>
            <Loader onSpriteUpdate={onSpriteUpdate(index)} index={index + 1} />
          </Item>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
