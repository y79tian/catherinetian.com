import { useTheme } from 'styled-components';

import { StyledIconButton } from './iconButton.styles';

type IconButtonProps = {
  icon: string;
  iconSize?: string;
  iconColor?: string;
  disabled?: boolean;
  animating?: boolean;
  spinning?: boolean;
  needPadding?: boolean;
  onClick: () => void;
};

export const IconButton = ({
  icon,
  iconSize = '1.5rem',
  iconColor = '',
  disabled = false,
  animating = false,
  spinning = false,
  needPadding = false,
  onClick,
}: IconButtonProps) => {
  const theme = useTheme();

  const renderIcon = () => {
    const Icon = theme.icons[icon] ?? theme.icons.reactJs;
    const getIconColor = () => {
      if (disabled) return theme.colors.grey4;
      if (!iconColor) return theme.colors.grey6;
      return iconColor;
    };
    return <Icon size={iconSize} color={getIconColor()} />;
  };
  return (
    <StyledIconButton
      $animating={animating}
      $spinning={spinning}
      $disabled={disabled}
      $needPadding={needPadding}
      onClick={onClick}
    >
      {renderIcon()}
    </StyledIconButton>
  );
};
