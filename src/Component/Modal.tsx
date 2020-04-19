import styled from 'styled-components';

const Container = styled.div<{isVisible: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};

  transition: opacity 0.5s ease-in-out;
`;

const Modal = styled.div`
  width: ${(props) => props.theme.addModal.windowSize}px;
  height: ${(props) => props.theme.addModal.windowSize + props.theme.addModal.spacing}px;
  background: ${(props) => props.theme.color.white};
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`;

const Header = styled.div`
  height: ${(props) => props.theme.addModal.spacing}px;
  width: ${(props) => props.theme.addModal.windowSize}px;
  background: ${(props) => props.theme.color.grey};
  color: white;
  position: relative;
  z-index: 10;
`;

const Dismiss = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  line-height: ${(props) => props.theme.addModal.spacing}px;
  width: ${(props) => props.theme.addModal.spacing}px;
  text-align: center;
  font-size: 30px;
  font-weight: 100;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  line-height: ${(props) => props.theme.addModal.spacing}px;
  text-align: center;
  font-size: 25px;
  font-weight: 200;
`;

export {Container, Modal, Header, Dismiss, Title};
