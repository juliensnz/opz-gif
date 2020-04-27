import styled, {css} from 'styled-components';

const Back = styled.div<{vertical: boolean; leading?: boolean}>`
  position: absolute;
  ${({leading = true}) =>
    leading
      ? css`
          top: 0;
        `
      : css`
          bottom: 0;
        `}

  ${(props) =>
    props.vertical
      ? css`
          right: ${(props) => props.theme.addModal.spacing}px;
          transform: rotate(-90deg);
          transform-origin: ${(props) => props.theme.addModal.windowSize}px 0;
        `
      : css`
          left: 0;
        `}

  height: ${(props) => props.theme.addModal.spacing}px;
  width: ${(props) => props.theme.addModal.windowSize}px;
  text-align: center;
  line-height: ${(props) => props.theme.addModal.spacing}px;
  font-size: 20px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export {Back};
