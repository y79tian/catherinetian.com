import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import Breakpoints from '../../theme/breakpoints';
import { StyledIconButton } from '../iconButton/iconButton.styles';
import { StyledButton } from '../navButton/navButton.styles';

export const NavbarContainer = styled(motion.nav)`
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
  @media (max-width: ${Breakpoints.smallWidth}) {
    justify-content: center;
  }
`;

export const NavBarButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${Breakpoints.smallWidth}) {
    width: 100%;
  }
`;

export const NavBarIconGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2vw;
  @media (max-width: ${Breakpoints.smallWidth}) {
    display: none;
  }
`;
export const NavBarIconGroupContainerOnPhone = styled(motion.div)`
  display: none;
  @media (max-width: ${Breakpoints.smallWidth}) {
    width: 90vw;
    height: 50px;
    z-index: ${(props) => props.theme.zIndexes.navBar};
    /* transform: translateX(-50%); */
    left: 50%;
    bottom: 10px;
    position: fixed;
    background-color: ${(props) => props.theme.colors.systemBackgroundPrimary};
    transition: background-color 0.5s ease;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 3rem;
  }
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

export const ProgressIndicator = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.indigoLight};
  transform-origin: center;
  z-index: ${(props) => props.theme.zIndexes.navBar};
  height: 0.15rem;
  position: fixed;
  top: 60px;
`;
