import React, {useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {useBooleanState} from './hooks/boolean';
import {Adder} from './Component/Adder/Adder';
import {Loop} from './model/loop';
import {generateSprite, getImages, getTrimedFrames} from './tools/canvas';
import JSZip from 'jszip';
import {saveAs} from 'file-saver';
import {generateZip} from './tools/zip';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Muli', sans-serif;
  box-sizing: border-box;
`;

const Grid = styled.div`
  flex: 1;
  background: rgb(208, 208, 208);
`;
const Footer = styled.div`
  height: 100px;
  display: flex;
  color: white;
  background: rgb(19, 19, 19);
`;

const AddButton = styled.div`
  padding: 0 30px;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.yellow};

  &:hover {
    cursor: pointer;
  }
`;
const Spacer = styled.div`
  flex: 1;
`;

const DownloadButton = styled.div`
  padding: 0 30px;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.blue};

  &:hover {
    cursor: pointer;
  }
`;

const useLoopState = (): [Loop[], (loop: Loop) => void] => {
  const [loops, setLoops] = useState<Loop[]>([]);

  const setLoop = useCallback(
    (newLoop: Loop) => {
      const updatedLoops = [...loops].filter((loop) => loop.sprite !== newLoop.sprite);

      setLoops([...updatedLoops, newLoop]);
    },
    [loops, setLoops]
  );

  return [loops, setLoop];
};

const App = () => {
  const [isAddModalOpen, openAddModal, closeAddModal] = useBooleanState(true);
  const [loops, setLoop] = useLoopState();
  console.log(loops);

  return (
    <Container>
      <Grid>Content</Grid>
      <Footer>
        <AddButton
          onClick={() => {
            openAddModal();
          }}
        >
          <span>Add</span>
        </AddButton>
        <Spacer />
        <DownloadButton
          onClick={async () => {
            const zip = await generateZip(loops);
            saveAs(zip, 'GIFs.zip');
          }}
        >
          <span>Download</span>
        </DownloadButton>
      </Footer>
      {isAddModalOpen && (
        <Adder
          onLoopAdd={(loop: Loop) => {
            closeAddModal();
            setLoop(loop);
          }}
        />
      )}
    </Container>
  );
};

export default App;
