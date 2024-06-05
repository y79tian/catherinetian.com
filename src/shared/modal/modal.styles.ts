import { styled } from 'styled-components';

import { backgroundColorTransitionStyle } from '../styles/transitions';
import { Subtitle1 } from '../typography/typography';

export const OverlayContainer = styled.div`
  position: fixed;
  z-index: ${(props) => props.theme.zIndexes.modal};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
`;

type StyledContentProps = {
  $height: string;
  $width: string;
  $noPadding?: boolean;
  $noScroll?: boolean;
};

export const StyledContent = styled.div<StyledContentProps>`
  background-color: ${(props) => props.theme.colors.elevatedBackgroundPrimary};
  padding: ${(props) => (props.$noPadding ? '0' : '1rem')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  box-sizing: border-box;
  max-height: calc(100% - 10rem);
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${(props) => props.theme.colors.textPrimary};
  ${(props) => props.theme.shadows.d3};
  gap: 2rem;
  overflow-y: ${(props) => (props.$noScroll ? 'hidden' : 'auto')};
  ${backgroundColorTransitionStyle}
`;

export const StyledModalHeader = styled(Subtitle1)``;

export const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledHotkeyRecords = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row;
  gap: 2rem;
`;
