import React, {useEffect} from 'react';
import {useBooleanState} from '../hooks/boolean';
import {Container, Modal, Header, Dismiss, Title, Mask} from './Modal';
import styled from 'styled-components';
import {useShortcut} from '../hooks/shortcut';
import {Key} from '../tools/key';

const Content = styled.div`
  padding: 15px 50px 30px 50px;
  line-height: 23px;
`;

const Version = styled.div`
  text-align: center;
  font-size: 11px;
`;

const Wtf = ({dismissModal}: {dismissModal: () => void}) => {
  const [isVisible, show] = useBooleanState(false);

  useEffect(() => {
    setImmediate(() => show());
  }, [show]);

  useShortcut(Key.Escape, dismissModal);

  return (
    <Container isVisible={isVisible} data-testid="wtf_modal">
      <Mask onClick={dismissModal} />
      <Modal>
        <Header>
          <Dismiss onClick={dismissModal}>X</Dismiss>
          <Title>What the **** is this?</Title>
        </Header>
        <Content>
          <h2>Hey! Nice to meet you, glad you asked!</h2>
          <p>
            This web application is here to ease the generation of sprites for the{' '}
            <a href="https://www.synthpaks.com/products/gif-looper-template-project-beta">awesome gif looper</a>. <br />
          </p>
          <h2>How it works?</h2>
          <div>
            <ul>
              <li>Select one of the 14 slots or click on the "Add" button</li>
              <li>Select a GIF (from an URL or a file)</li>
              <li>
                Once you have filled all of the 14 slots (or before if you don't wan't to use them all), click on the
                download button.
              </li>
            </ul>
            This will generate your sprites in the expected format.
          </div>
          <p>
            For the rest of the process, you can refer to the official documentation of{' '}
            <a href="https://www.synthpaks.com/products/gif-looper-template-project-beta">gif looper</a>.
          </p>
          <h2>Well, that's nice, but it doesn't seems to work</h2>
          <p>
            Wow, I'm really sorry to hear that, I hope that you didn't loose any work. Don't hesistate to open an issue{' '}
            <a href="https://github.com/juliensnz/opz-gif/issues">here</a> or send me a{' '}
            <a href="https://twitter.com/juliensnz">tweet</a> to see if I can fix it. Or even better: as this is an{' '}
            <a href="https://github.com/juliensnz/opz-gif">open source project</a>, you maybe can fix it yourself!
          </p>
          <Version>v{process.env.REACT_APP_VERSION}</Version>
        </Content>
      </Modal>
    </Container>
  );
};

export {Wtf};
