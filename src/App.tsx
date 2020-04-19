import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {useBooleanState} from './hooks/boolean';
import {Adder} from './Component/Adder/Adder';
import {Loop} from './model/loop';
import {saveAs} from 'file-saver';
import {generateZip} from './tools/zip';
import {Loops} from './Component/Loops';
import {sendEvent, UserEvent, sendError} from './tools/analytics';
import {Wtf} from './Component/Wtf';
import {Like} from './Component/Like';

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

const useLoopState = (): [Loop[], (loop: Loop) => void, (loopToRemove: number) => void] => {
  const [loops, setLoops] = useState<Loop[]>([]);

  const setLoop = useCallback(
    (newLoop: Loop) => {
      const updatedLoops = [...loops].filter((loop) => loop.sprite !== newLoop.sprite);

      setLoops([...updatedLoops, newLoop]);
    },
    [loops, setLoops]
  );
  const removeLoop = useCallback(
    (loopToRemove: number) => {
      const updatedLoops = [...loops].filter((loop) => loop.sprite !== loopToRemove);

      setLoops(updatedLoops);
    },
    [loops, setLoops]
  );

  return [loops, setLoop, removeLoop];
};

const App = () => {
  const [isAddModalOpen, openAddModal, closeAddModal] = useBooleanState(false);
  const [isInfoModalOpen, openInfoModal, closeInfoModal] = useBooleanState(false);
  const [isLikeModalOpen, openLikeModal, closeLikeModal] = useBooleanState(false);
  const [loops, setLoop, removeLoop] = useLoopState();
  const [currentSprite, setSprite] = useState<number | null>(null);

  return (
    <Container>
      <Header>
        <span>Gif looper generator</span>
      </Header>
      <Loops
        loops={loops}
        onOpenInfoLoop={() => {
          sendEvent(UserEvent.OpenWtf);
          openInfoModal();
        }}
        onRemoveLoop={(sprite: number) => {
          sendEvent(UserEvent.LoopRemoved);
          removeLoop(sprite);
        }}
        onOpenLikeLoop={() => {
          sendEvent(UserEvent.OpenLike);
          openLikeModal();
        }}
        onOpenAddLoop={(sprite: number) => {
          sendEvent(UserEvent.StartAdding, {loop_number: sprite, from: 'loop'});
          setSprite(sprite);
          openAddModal();
        }}
      />
      <Footer>
        <AddButton
          onClick={() => {
            sendEvent(UserEvent.StartAdding, {from: 'button'});
            openAddModal();
          }}
        >
          <span>Add</span>
        </AddButton>
        <Spacer />
        {0 !== loops.length && (
          <DownloadButton
            onClick={async () => {
              sendEvent(UserEvent.Download, {loop_count: loops.length});
              try {
                const zip = await generateZip(loops);
                saveAs(zip, 'GIFs.zip');
              } catch (error) {
                sendError('cannot_generate_zip', error);
              }
            }}
          >
            <span>Download</span>
          </DownloadButton>
        )}
      </Footer>
      {isAddModalOpen && (
        <Adder
          dismissModal={() => closeAddModal()}
          onLoopAdd={(loop: Loop) => {
            if (currentSprite === null) {
              sendEvent(UserEvent.LoopAdded, {
                loop_count: loops.length,
                from: 'button',
              });
            } else {
              sendEvent(UserEvent.LoopAdded, {
                loop_count: loops.length,
                from: 'sprite',
                loop: currentSprite,
              });
            }
            closeAddModal();
            setLoop(loop);
            setSprite(null);
          }}
          initialSprite={currentSprite}
        />
      )}
      {isInfoModalOpen && (
        <Wtf
          dismissModal={() => {
            sendEvent(UserEvent.CloseWtf);
            closeInfoModal();
          }}
        />
      )}
      {isLikeModalOpen && (
        <Like
          dismissModal={() => {
            sendEvent(UserEvent.CloseLike);
            closeLikeModal();
          }}
        />
      )}
    </Container>
  );
};

export default App;
