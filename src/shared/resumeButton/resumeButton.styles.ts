import { styled } from 'styled-components';

import { buttonTransformStyle } from '../styles/transitions';

export const Container = styled.div`
  display: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0.5rem 0;
  background-color: transparent;
`;

export const PaginationButtonContainer = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 1.0375rem;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
  color: ${(props) => props.theme.colors.textPrimary};
  ${buttonTransformStyle};
`;
