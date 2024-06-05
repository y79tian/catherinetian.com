import { styled } from 'styled-components';

import { StyledIconButton } from '../iconButton/iconButton.styles';
import { StyledButton } from '../navButton/navButton.styles';

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
  transition: background-color 0.5s ease;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: ${(props) => props.theme.zIndexes.navBar};
  left: 0;
  top: 0;
  position: fixed;
  ${StyledButton} {
    margin: 0 1vw;
  }
`;

export const NavBarButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarIconGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
`;

export const NavBarMusicControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0;
  margin: 0;
  border-radius: 1rem;
  border: 0.15rem solid ${(props) => props.theme.colors.grey6};
  ${StyledIconButton} {
    padding: 0 0.8rem;
  }
`;
