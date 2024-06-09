import { MouseEvent, PropsWithChildren } from 'react';

import { StyledScrollButton } from './scrollButton.styles';

type ScrollButtonProps = PropsWithChildren<{
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}>;
export const ScrollButton = ({ onClick, children }: ScrollButtonProps) => {
  return <StyledScrollButton onClick={onClick}>{children}</StyledScrollButton>;
};
