import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {useBooleanState} from './hooks/boolean';
import {Adder} from './Component/Adder/Adder';
import {Loop} from './model/loop';
import {saveAs} from 'file-saver';
import {generateZip} from './tools/zip';
import {Loops} from './Component/Loops';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Muli', sans-serif;
  box-sizing: border-box;
`;

const Header = styled.div`
  height: 60px;
  display: flex;
  color: white;
  background: rgb(19, 19, 19);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 100;
  width: 100%;
`;
const Footer = styled.div`
  height: 60px;
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
  const [isAddModalOpen, openAddModal, closeAddModal] = useBooleanState(false);
  const [loops, setLoop] = useLoopState();
  const [currentSprite, setSprite] = useState<number | null>(null);

  return (
    <Container>
      <Header>
        <span>Gif looper generator</span>
      </Header>
      <Loops
        loops={loops}
        onOpenAddLoop={(sprite: number) => {
          setSprite(sprite);
          openAddModal();
        }}
      />
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
          dismissModal={() => closeAddModal()}
          onLoopAdd={(loop: Loop) => {
            closeAddModal();
            setLoop(loop);
            setSprite(null);
          }}
          initialSprite={currentSprite}
        />
      )}
    </Container>
  );
};

export default App;
