import { styled } from 'styled-components';
export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${(props) => props.theme.zIndexes.view};
  background-color: ${(props) => props.theme.colors.textBackground};
  color: ${(props) => props.theme.colors.textPrimary};
`;
