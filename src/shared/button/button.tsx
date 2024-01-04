import { MouseEvent, PropsWithChildren } from 'react';

import { ButtonText } from '../typography/typography';

import { StyledButton } from './button.styles';

type ButtonProps = PropsWithChildren<{
  primary?: boolean;
  height?: string;
  active?: boolean;
  disabled?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}>;

const Button = ({
  primary = true,
  height = '2.5rem',
  active = false,
  disabled = false,
  onClick = () => {},

  children,
}: ButtonProps) => {
  return (
    <StyledButton
      $active={active}
      $disabled={disabled}
      $height={height}
      $primary={primary}
      onClick={onClick}
    >
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
