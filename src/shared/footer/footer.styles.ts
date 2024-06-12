import { styled } from 'styled-components';

import Breakpoints from '../../theme/breakpoints';

export const FooterContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  gap: 1rem;
  z-index: ${(props) => props.theme.zIndexes.view};
  @media (max-width: ${Breakpoints.smallWidth}) {
    margin: 0 0 3.5rem;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
