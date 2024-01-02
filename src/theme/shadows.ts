import { css } from 'styled-components';

// d0: a thin 1px shadow that serves as a visual divider, use when taking no extra pixel space is required
const d0 = css`
  box-shadow: 0 1px 0 ${(props) => props.theme.colors.grey3};
`;

// d1: a subtle shadow, use on card components
const d1 = css`
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.08);
`;

// d2: a heavier shadow for elevated components, use when attention is required
const d2 = css`
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.08),
    0 4px 8px rgba(0, 0, 0, 0.12);
`;

// d3: a heavy shadow that visually elevates a component, use in modals and other floating elements
const d3 = css`
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.16);
`;

const Shadows = {
  d0,
  d1,
  d2,
  d3,
} as const;

export type ThemeShadows = typeof Shadows;

export default Shadows;
