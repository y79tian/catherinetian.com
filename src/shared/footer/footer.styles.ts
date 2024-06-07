import { styled } from 'styled-components';

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
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
