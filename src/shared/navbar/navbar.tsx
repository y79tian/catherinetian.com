import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { switchTheme } from '../../reducers/theme';
import { THEMES_MODE } from '../../theme';
import { IconButton } from '../iconButton/iconButton';
import { NavButton } from '../navButton/navButton';
import { ResumeButton } from '../resumeButton/resumeButton';
import { TooltipWrapper } from '../tooltipWrapper/tooltipWrapper';
import { SimpleTooltip } from '../tooltipWrapper/tooltipWrapper.styles';
import { Body1, Key } from '../typography/typography';

import {
  NavBarButtonGroupContainer,
  NavbarContainer,
  NavBarIconGroupContainer,
  NavBarMusicControlContainer,
} from './navbar.styles';

const Navbar = () => {
  const mode = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const fakeFunc = () => {};
  const renderInfoControl = () => {
    const renderInfoTooltip = () => {
      return (
        <SimpleTooltip>
          <Key $mini>I</Key>
          <Body1 $noSpacing>Hotkeys Info</Body1>
        </SimpleTooltip>
      );
    };
    return (
      <TooltipWrapper component={renderInfoTooltip()}>
        <IconButton icon='info' onClick={fakeFunc} />
      </TooltipWrapper>
    );
  };

  const renderPDFControl = () => {
    return <ResumeButton />;
  };
  const renderThemeControl = () => {
    const icon = mode === THEMES_MODE.light ? 'sun' : 'moon';
    const renderThemeTooltip = () => {
      return (
        <SimpleTooltip>
          <Key $mini>T</Key>
          <Body1 $noSpacing>Switch Themes</Body1>
        </SimpleTooltip>
      );
    };
    return (
      <TooltipWrapper component={renderThemeTooltip()}>
        <IconButton
          icon={icon}
          onClick={() => dispatch(switchTheme())}
        ></IconButton>
      </TooltipWrapper>
    );
  };

  const renderMusicControl = () => {
    const playMusicTooltip = () => {
      return (
        <SimpleTooltip>
          <Key $mini>Space</Key>
          <Body1 $noSpacing>Play Background Music</Body1>
        </SimpleTooltip>
      );
    };
    return (
      <TooltipWrapper component={playMusicTooltip()}>
        <NavBarMusicControlContainer>
          <IconButton icon='music' onClick={fakeFunc} />
          <IconButton icon='next' disabled onClick={fakeFunc} />
        </NavBarMusicControlContainer>
      </TooltipWrapper>
    );
  };

  const renderUserControl = () => {
    const renderUserTooltip = () => (
      <SimpleTooltip>
        <Body1>Admin Sign In</Body1>
      </SimpleTooltip>
    );
    return (
      <TooltipWrapper component={renderUserTooltip()}>
        <IconButton icon='user' onClick={fakeFunc} />
      </TooltipWrapper>
    );
  };
  const renderNavButtonGroup = () => (
    <NavBarButtonGroupContainer>
      <NavButton onClick={fakeFunc}>Home</NavButton>
      <NavButton onClick={fakeFunc}>About</NavButton>
      <NavButton onClick={fakeFunc}>Resume</NavButton>
    </NavBarButtonGroupContainer>
  );

  const renderIconGroup = () => {
    return (
      <NavBarIconGroupContainer>
        {renderInfoControl()}
        {renderPDFControl()}
        {renderThemeControl()}
        {renderMusicControl()}
        {renderUserControl()}
      </NavBarIconGroupContainer>
    );
  };
  return (
    <NavbarContainer>
      {renderNavButtonGroup()}
      {renderIconGroup()}
    </NavbarContainer>
  );
};

export default Navbar;
