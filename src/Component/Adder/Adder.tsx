import React, {useState, useEffect, useCallback, useContext} from 'react';
import {GIF, Configuration} from '../../tools/gif';
import styled from 'styled-components';
import {SourceSelector} from './Adder/SourceSelector';
import {LoopConfigurator} from './Adder/LoopConfigurator';
import {SpriteSelector} from './Adder/SpriteSelector';
import {Loop, EmptyLoop, isLoop} from '../../model/loop';
import {useBooleanState} from '../../hooks/boolean';
import {sendEvent, UserEvent} from '../../tools/analytics';
import {Container, Modal, Header, Dismiss, Title, Mask} from '../Modal';
import {useShortcut} from '../../hooks/shortcut';
import {Key} from '../../tools/key';
import {Loading} from '../Loading';
import {LoadingContext} from '../../context/loading';

const Scroller = styled.div<{level: number}>`
  width: ${(props) => props.theme.addModal.windowSize * 3}px;
  display: flex;
  transform: translate3d(
    -${(props) => props.level * (props.theme.addModal.windowSize - props.theme.addModal.spacing)}px,
    0,
    0
  );
  transition: transform 0.5s ease-in-out;
`;

const getLevel = (loop: Loop | EmptyLoop, isEdit: boolean): number => {
  if (isEdit) return 0;
  if (null !== loop.configuration) return 2;
  if (0 !== loop.gif.length) return 1;

  return 0;
};

const Adder = ({
  initialLoop,
  onLoopAdd,
  dismissModal,
}: {
  initialLoop: Loop | EmptyLoop;
  onLoopAdd: (loop: Loop) => void;
  dismissModal: () => void;
}) => {
  const isEdit = isLoop(initialLoop);
  const [isConfirmed, setComfirmed] = useState(!isEdit);
  const [loop, setLoop] = useState<Loop | EmptyLoop>(initialLoop);
  const [isVisible, show] = useBooleanState(false);
  const [loading] = useContext(LoadingContext);

  useEffect(() => {
    setImmediate(() => show());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isLoop(loop) && isConfirmed) {
      onLoopAdd(loop);
    }
  }, [loop, onLoopAdd, isConfirmed]);

  const dismiss = useCallback(() => {
    if (null !== loop.configuration) {
      sendEvent(UserEvent.CancelAdd, {from: 'sprite'});
    } else if (0 !== loop.gif.length) {
      sendEvent(UserEvent.CancelAdd, {from: 'configure'});
    } else {
      sendEvent(UserEvent.CancelAdd, {from: 'start'});
    }

    dismissModal();
  }, [dismissModal, loop]);

  useShortcut(Key.Escape, dismiss);

  return (
    <Container isVisible={isVisible}>
      <Mask onClick={dismiss} />
      <Modal>
        <Header>
          <Dismiss onClick={dismiss}>X</Dismiss>
          <Title>{`${isEdit ? 'Edit' : 'Add'} a loop`}</Title>
          <Loading isLoading={loading} />
        </Header>
        <Scroller level={getLevel(loop, isEdit)}>
          {!isEdit && (
            <SourceSelector
              previous={0 !== loop.gif.length}
              onGifSelected={(gif: GIF) => {
                setLoop({...loop, gif});
              }}
            />
          )}
          <LoopConfigurator
            isEdit={isEdit}
            gif={loop.gif}
            initialConfiguration={loop.configuration}
            onLoopConfirmation={(configuration: Configuration | null) => {
              setLoop({...loop, configuration});
              setComfirmed(true);
            }}
          />
          <SpriteSelector
            onSpriteConfirmation={(sprite: number) => {
              setLoop({...loop, sprite});
            }}
          />
        </Scroller>
      </Modal>
    </Container>
  );
};

export {Adder};
