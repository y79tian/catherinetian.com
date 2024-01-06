import { css, styled } from 'styled-components';

type ButtonTextProp = {
  $disabled?: Boolean;
};

export const ButtonText = styled.p<ButtonTextProp>`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => {
    if (props.$disabled) return props.theme.colors.textTertiary;
    return props.theme.colors.textPrimary;
  }};
`;

export const NavButtonText = styled.p<ButtonTextProp>`
  font-size: 1.3rem;
  line-height: 1.325rem;
  font-weight: 500;
  margin: 0;
  color: ${(props) => {
    if (props.$disabled) return props.theme.colors.textTertiary;
    return props.theme.colors.textPrimary;
  }};
`;
type Body1Props = {
  $noSpacing?: boolean;
  disabled?: boolean;
  $grey?: boolean;
  green?: boolean;
  red?: boolean;
  black?: boolean;
  white?: boolean;
  yellow?: boolean;
};

export const Body1 = styled.p<Body1Props>`
  font-size: 1.0375rem;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
  margin-bottom: ${(props) => (props.$noSpacing ? '0' : '0.5em')};

  color: ${(props) => {
    if (props.disabled) return props.theme.colors.textTertiary;
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.green) return props.theme.colors.greenDefault;
    if (props.red) return props.theme.colors.redDefault;
    if (props.black) return props.theme.colors.blackDefault;
    if (props.white) return props.theme.colors.whiteDefault;
    if (props.yellow) return props.theme.colors.yellowDark;
    return props.theme.colors.textPrimary;
  }};
`;

type KeyProps = {
  $mini?: boolean;
};

export const Key = styled(Body1)<KeyProps>`
  height: auto;
  width: min-content;
  padding: 0.15rem 0.6rem;
  margin-bottom: 0;

  border-radius: 0.25rem;
  border: 1px solid
    ${(props) => {
      if (props.disabled) return props.theme.colors.textTertiary;
      if (props.$grey) return props.theme.colors.textSecondary;
      if (props.green) return props.theme.colors.greenDefault;
      if (props.red) return props.theme.colors.redDefault;
      if (props.black) return props.theme.colors.blackDefault;
      if (props.white) return props.theme.colors.whiteDefault;
      if (props.yellow) return props.theme.colors.yellowDark;
      return props.theme.colors.grey4;
    }};

  ${(props) =>
    props.$mini &&
    css`
      font-size: 0.8rem;
      line-height: 0.8225rem;
      padding: 0.15rem 0.4rem;
    `}
`;

type Subtitle1Props = {
  $grey?: boolean;
  green?: boolean;
  red?: boolean;
};

export const Subtitle1 = styled.h6<Subtitle1Props>`
  font-size: 1.225rem;
  font-weight: 600;
  line-height: 1.375rem;
  margin: 0;

  color: ${(props) => {
    if (props.$grey) return props.theme.colors.textSecondary;
    if (props.red) return props.theme.colors.redDefault;
    if (props.green) return props.theme.colors.greenDefault;
    return props.theme.colors.textPrimary;
  }};
`;
