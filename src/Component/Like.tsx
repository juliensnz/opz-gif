import React, {useEffect} from 'react';
import {useBooleanState} from '../hooks/boolean';
import {Container, Modal, Header, Dismiss, Title} from './Modal';
import styled from 'styled-components';

const Content = styled.div`
  padding: 20px 50px;
  line-height: 23px;
`;
const Donate = styled.input`
  width: 110px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Like = ({dismissModal}: {dismissModal: () => void}) => {
  const [isVisible, show] = useBooleanState(false);

  useEffect(() => {
    setImmediate(() => show());
  }, [show]);
  return (
    <Container isVisible={isVisible}>
      <Modal>
        <Header>
          <Dismiss
            onClick={() => {
              dismissModal();
            }}
          >
            X
          </Dismiss>
          <Title>I like it!</Title>
        </Header>
        <Content>
          <p>Really nice of you, I'm glad you enjoy it :)</p>
          <h2>But why dude?</h2>
          <p>
            I'm a big fan of my OP-Z and wanted to play with the Motion track a bit. I found the{' '}
            <a href="https://www.synthpaks.com/products/gif-looper-template-project-beta">gif looper</a> project but
            didn't want to generate sprites by hand. So here is why.
          </p>
          <h2>Is it free?</h2>
          <p>
            Yes! This project is <a href="https://github.com/juliensnz/opz-gif">open source</a>, you can use this
            project for free, enjoy it as much as you want and even{' '}
            <a href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=en">
              install it locally
            </a>{' '}
            to use it offline.
          </p>
          <h2>How can I help?</h2>
          <p>
            As this project is <a href="https://github.com/juliensnz/opz-gif">open source</a>, you can make suggestions
            for improvement <a href="https://github.com/juliensnz/opz-gif/issues">here</a> or even{' '}
            <a href="https://github.com/juliensnz/opz-gif">contribute to the project</a>.
            <br />
            <br />
            If you still want to support me and my work, you can make a donation using the button down bellow.
          </p>
          <Form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="KWM3S8MMH8BNU" />
            <input type="hidden" name="currency_code" value="EUR" />
            <Donate
              type="image"
              src="https://juliensnz.github.io/opz-gif/donate.png"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img alt="" src="https://www.paypal.com/en_FR/i/scr/pixel.gif" width="1" height="1" />
          </Form>
        </Content>
      </Modal>
    </Container>
  );
};

export {Like};
