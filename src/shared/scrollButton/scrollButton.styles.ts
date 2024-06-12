import { styled } from 'styled-components';

import Breakpoints from '../../theme/breakpoints';

export const StyledScrollButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: fixed;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  bottom: 2dvh;
  right: 5vw;
  ${(props) => props.theme.shadows.d3};
  z-index: 200;
  @media (max-width: ${Breakpoints.smallWidth}) {
    bottom: 5rem;
    padding: 0.5rem 1rem;
  }
`;
