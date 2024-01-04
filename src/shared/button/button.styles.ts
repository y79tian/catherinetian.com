import { css, styled } from 'styled-components';

import { ButtonText } from '../typography/typography';

type StyledButtonProps = {
  $primary?: boolean;
  $height?: string;
  $active?: boolean;
  $disabled?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
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
  height: ${(props) => props.$height};

  &:hover {
    ${ButtonText} {
      color: ${(props) => props.theme.colors.indigoDark};
    }
  }

  ${(props) =>
    props.$primary &&
    css`
      background-color: ${props.theme.colors.indigoDefault};
      ${ButtonText} {
        color: ${props.theme.colors.whiteDefault};
      }
      &:hover {
        background-color: ${props.theme.colors.indigoDark};
        ${ButtonText} {
          color: ${props.theme.colors.whiteDefault};
        }
      }
    `}
  ${(props) => props.$disabled && 'pointer-events: none'};
`;
