import { css, styled } from 'styled-components';

import { buttonTransformStyle } from '../styles/transitions';
import { NavButtonText } from '../typography/typography';

type styledButtonProp = {
  $disabled: Boolean;
  $active: Boolean;
};

export const StyledButton = styled.button<styledButtonProp>`
  margin: 0;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  user-select: none;
  white-space: nowrap;
  box-sizing: border-box;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  pointer-events: auto;
  ${(props) => props.$disabled && 'pointer-events: none;'};
  ${buttonTransformStyle};
  ${(props) =>
    props.$active &&
    css`
      ${NavButtonText} {
        color: ${props.theme.colors.indigoDark};
      }
    `}
`;
