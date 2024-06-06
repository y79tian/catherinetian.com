import { styled } from 'styled-components';
type PageContainerProp = {
  canScroll: Boolean;
};

export const PageContainer = styled.div<PageContainerProp>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${(props) => props.theme.zIndexes.view};
  overflow-y: ${(props) => (props.canScroll ? 'auto' : 'hidden')};
  display: flex;
  flex-direction: column;
`;
