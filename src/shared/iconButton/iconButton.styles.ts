import { css, keyframes, styled } from 'styled-components';

import { buttonTransformStyle } from '../styles/transitions';

type StyledIconButtonProps = {
  $animating: Boolean;
  $disabled: Boolean;
};
const scaleAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.8); }
`;
export const StyledIconButton = styled.button<StyledIconButtonProps>`
  margin: 0;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  user-select: none;
  white-space: nowrap;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  background-color: transparent;
  pointer-events: auto;
  ${buttonTransformStyle};
  ${(props) => props.$disabled && 'pointer-events: none;'}
  ${(props) =>
    props.$animating &&
    css`
      animation: ${scaleAnimation} 2s infinite;
    `}
`;
