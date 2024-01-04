/* eslint-disable import/no-unused-modules */
import { css } from 'styled-components';

export const buttonTransformStyle = css`
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
