import { css, keyframes, styled } from 'styled-components';

import { buttonTransformStyle } from '../styles/transitions';

type StyledIconButtonProps = {
  $animating: Boolean;
  $spinning: Boolean;
  $disabled: Boolean;
  $needPadding: Boolean;
};
const scaleAnimation = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.8); }
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  margin: 0;
  padding: ${(props) => (props.$needPadding ? '0 1rem' : '0')};
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
  ${(props) => props.$disabled && 'pointer-events: none;'};
  ${(props) => {
    if (props.$animating && props.$spinning) {
      return css`
        animation:
          ${scaleAnimation} 2s infinite,
          ${spinAnimation} 2s infinite linear;
      `;
    }
    if (props.$animating) {
      return css`
        animation: ${scaleAnimation} 2s infinite;
      `;
    }
    if (props.$spinning) {
      return css`
        animation: ${spinAnimation} 2s infinite linear;
      `;
    }
    return '';
  }}
`;
