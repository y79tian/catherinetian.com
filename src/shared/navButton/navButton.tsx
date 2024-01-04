import { MouseEvent, PropsWithChildren } from 'react';

import { NavButtonText } from '../typography/typography';

import { StyledButton } from './navButton.styles';

type NavButtonProps = PropsWithChildren<{
  active?: boolean;
  disabled?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}>;

export const NavButton = ({
  active = false,
  disabled = false,
  onClick,
  children,
}: NavButtonProps) => {
  return (
    <StyledButton $active={active} $disabled={disabled} onClick={onClick}>
      <NavButtonText $disabled={disabled}>{children}</NavButtonText>
    </StyledButton>
  );
};
