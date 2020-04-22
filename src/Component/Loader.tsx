import React, {ChangeEvent, useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import {getGif, getBase64, GIF, getImage, getDataUrl} from '../tools/gif';
import {FRAME_WIDTH, FRAME_HEIGHT} from '../tools/canvas';
import {Url} from './Url';

const Canvas = styled.canvas`
  top: 0px;
  left: 0px;
  width: 338px;
  height: 156px;
  position: absolute;
`;

const Loading = styled.div`
  top: 0px;
  left: 0px;
  width: 338px;
  height: 156px;
  position: absolute;
  background-color: rgb(208, 44, 51);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.div`
  color: white;
  font-size: 28px;
  font-family: sans-serif;
  font-weight: 100;
  text-align: center;
  width: 100%;
`;

const DropZone = styled.input`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
`;

const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const OperationSelector = styled.div`
  top: 0px;
  left: 0px;
  width: 338px;
  height: 156px;
  position: absolute;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 20px;
  display: none;
`;

const Operation = styled.div`
  flex: 1;
  color: white;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:nth-child(n + 1) {
    background-color: rgb(233, 177, 61);
  }

  &:nth-child(n + 2) {
    background-color: rgb(39, 94, 132);
  }

  &:nth-child(n + 3) {
    background-color: rgb(37, 90, 48);
  }
`;

const Container = styled.div`
  width: 338px;
  height: 156px;
  background: black;
  position: relative;

  &:hover {
    ${OperationSelector} {
      display: flex;
    }
  }
`;

const Player = ({gif}: {gif: GIF}) => {
  const canvasRef = useRef(null);

  // useEffect(() => {
  //   if (null !== canvasRef && null !== canvasRef.current) {
  //     scaleImage(canvasRef.current as any, gif);
  //     const timer = animateTrimed(canvasRef.current as any, gif);

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }
  // }, [gif]);

  return <Canvas ref={canvasRef} width={FRAME_WIDTH} height={FRAME_HEIGHT}></Canvas>;
};

const Loader = ({onSpriteUpdate, index}: {onSpriteUpdate: (sprite: string) => void; index: number}) => {
  const [gif, setGif] = useState<GIF>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [urlOpen, setUrlOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   if (0 === gif.length) return;

  //   generateSprite(getImages(gif, getTrimedFrames(gif))).then(onSpriteUpdate);
  // }, [gif]);

  return (
    <Container>
      <Screen>
        <Title>{index}</Title>
      </Screen>
      {gif.length !== 0 && <Player gif={gif} />}
      <OperationSelector>
        {0 !== gif.length ? (
          <Operation
            onClick={() => {
              setGif([]);
              onSpriteUpdate('');
            }}
          >
            <span>Remove</span>
          </Operation>
        ) : (
          <>
            <Operation
              onClick={() => {
                setUrlOpen(true);
              }}
            >
              <span>Url</span>
            </Operation>
            <Operation>
              <span>File</span>
              <DropZone
                type="file"
                onChange={async (event: ChangeEvent<HTMLInputElement>) => {
                  if (null === event.target.files || 'image/gif' !== event.target.files[0].type) {
                    return;
                  }
                  setGif([]);
                  setLoading(true);

                  const gifData = await getBase64(event.target.files[0]);
                  const newGif = await getGif(gifData);
                  setGif(newGif);
                  setLoading(false);
                }}
              />
            </Operation>
          </>
        )}
      </OperationSelector>
      {urlOpen && (
        <Url
          onChange={async (url: string) => {
            setGif([]);
            setUrlOpen(false);
            setLoading(true);

            const gifData = await getDataUrl(url);
            const newGif = await getGif(gifData);
            setGif(newGif);
            setLoading(false);
          }}
        />
      )}
      {isLoading && (
        <Loading>
          <Title>Loading</Title>
        </Loading>
      )}
    </Container>
  );
};

export {Loader};
