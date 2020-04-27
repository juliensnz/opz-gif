import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {useBooleanState} from './hooks/boolean';
import {Adder} from './Component/Adder/Adder';
import {Loop, getLoop, EmptyLoop, createEmptyLoop, createLoopFromSprite, isLoop} from './model/loop';
import {saveAs} from 'file-saver';
import {generateZip} from './tools/zip';
import {Loops} from './Component/Loops';
import {sendEvent, UserEvent, sendError} from './tools/analytics';
import {Wtf} from './Component/Wtf';
import {Like} from './Component/Like';
import {useBeforeLeave} from './hooks/leave';
import {LoadingContext} from './context/loading';
import {getGifLength} from './tools/gif';
import {useLoopState} from './hooks/loop';

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
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;
const Footer = styled.div`
  height: 60px;
  display: flex;
  color: white;
  background: rgb(19, 19, 19);
  flex-shrink: 0;
  position: sticky;
  bottom: 0;
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

const App = () => {
  const [isAddModalOpen, openAddModal, closeAddModal] = useBooleanState(false);
  const [isInfoModalOpen, openInfoModal, closeInfoModal] = useBooleanState(false);
  const [isLikeModalOpen, openLikeModal, closeLikeModal] = useBooleanState(false);
  const [loops, setLoop, removeLoop] = useLoopState();
  const [currentLoop, setCurrentLoop] = useState<Loop | EmptyLoop>(createEmptyLoop());
  useBeforeLeave(useCallback(() => loops.length === 0 || isLikeModalOpen, [loops, isLikeModalOpen]));

  return (
    <LoadingContext.Provider value={useState<boolean>(false)}>
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
          onEditLoop={(sprite: number) => {
            const loop = getLoop(loops, sprite) as Loop;
            if (undefined === loop) {
              sendError('cannot_find_loop', new Error(`Loop ${sprite} not found`));
            }

            sendEvent(UserEvent.StartEditing, {
              sprite,
              frameCount: loop.gif.length,
              gifLength: getGifLength(loop.gif),
              configuration: loop.configuration,
            });
            setCurrentLoop(loop);
            openAddModal();
          }}
          onOpenLikeLoop={() => {
            sendEvent(UserEvent.OpenLike);
            openLikeModal();
          }}
          onOpenAddLoop={(sprite: number) => {
            sendEvent(UserEvent.StartAdding, {loop_number: sprite, from: 'loop'});
            setCurrentLoop(createLoopFromSprite(sprite));
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
              if (currentLoop.sprite === null) {
                sendEvent(UserEvent.LoopAdded, {
                  loop_count: loops.length,
                  from: 'button',
                  configuration: loop.configuration,
                });
              } else if (isLoop(currentLoop)) {
                sendEvent(UserEvent.LoopEdited, {
                  loop_count: loops.length,
                  from: 'sprite',
                  loop: currentLoop.sprite,
                  configuration: loop.configuration,
                });
              } else {
                sendEvent(UserEvent.LoopAdded, {
                  loop_count: loops.length,
                  from: 'sprite',
                  loop: currentLoop.sprite,
                  configuration: loop.configuration,
                });
              }
              closeAddModal();
              setLoop(loop);
              setCurrentLoop(createEmptyLoop());
            }}
            initialLoop={currentLoop}
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
    </LoadingContext.Provider>
  );
};

export default App;
