import { styled } from 'styled-components';
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.textBackground};
  color: ${(props) => props.theme.colors.textPrimary};
`;
