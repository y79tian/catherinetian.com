import { Tooltip } from 'react-tooltip';
import { styled } from 'styled-components';

export const StyledTooltipWrapper = styled(Tooltip)`
  padding: 0.5rem 0.75rem !important;
  font-family: ${(props) => props.theme.fonts.BalooThambi2} !important;
  font-size: 0.975rem !important;
  font-weight: 500 !important;
  color: ${(props) => props.theme.colors.textPrimary} !important;
  background-color: ${(props) =>
    props.theme.colors.elevatedBackgroundPrimary} !important;
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.04),
    0 2px 4px rgba(0, 0, 0, 0.02) !important;
`;
export const Container = styled.div``;

export const SimpleTooltip = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
