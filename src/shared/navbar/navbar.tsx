import {
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { To, useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import useKeyPress from '../../hooks/useKeyPress';
import { switchMusic, toggleMusic } from '../../reducers/music';
import { switchTheme } from '../../reducers/theme';
import { THEMES_MODE } from '../../theme';
import Button from '../button/button';
import { IconButton } from '../iconButton/iconButton';
import { Modal } from '../modal/modal';
import {
  StyledHotkeyRecords,
  StyledModalBody,
  StyledModalFooter,
  StyledModalHeader,
} from '../modal/modal.styles';
import { NavButton } from '../navButton/navButton';
import { ResumeButton } from '../resumeButton/resumeButton';
import { TooltipWrapper } from '../tooltipWrapper/tooltipWrapper';
import { SimpleTooltip } from '../tooltipWrapper/tooltipWrapper.styles';
import { Body1, Key } from '../typography/typography';

import { hotkeysInfoMetadata, viewsMetadata } from './navbar.metadata';
import {
  NavBarButtonGroupContainer,
  NavbarContainer,
  NavBarIconGroupContainer,
  NavBarMusicControlContainer,
  ProgressIndicator,
} from './navbar.styles';

type NavbarProps = {
  canScroll: boolean;
  yProgress: MotionValue<number>;
};
const Navbar = ({ canScroll, yProgress }: NavbarProps) => {
  const [showHotkeyModal, setShowHotkeyModal] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const mode = useAppSelector((state) => state.theme.theme);
  const { isPlaying, musicIndex, playlist } = useAppSelector(
    (state) => state.music,
  );
  const dispatch = useAppDispatch();
  const yValue = useMotionValue(0);
  const smoothYValue = useSpring(yValue, { stiffness: 80, damping: 20 });
  const yTransform = useTransform(smoothYValue, (value) => value);
  useMotionValueEvent(yProgress, 'change', () => {
    if (yProgress.getVelocity() > 0) {
      yValue.set(-60);
    } else {
      yValue.set(0);
    }
  });

  useEffect(() => {
    const onResize = () => {
      yValue.set(0);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [yValue]);

  const onKeyIDown = () => {
    setShowHotkeyModal(!showHotkeyModal);
  };
  useKeyPress('i', onKeyIDown);

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
        <IconButton icon='info' onClick={() => setShowHotkeyModal(true)} />
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
          <Body1 $noSpacing>{`${
            isPlaying ? 'Pause' : 'Play'
          } Background Music`}</Body1>
        </SimpleTooltip>
      );
    };
    const getNextMusic = () => {
      const nextInd = (musicIndex + 1) % playlist.length;
      return playlist[nextInd].name;
    };
    const nextMusicTooltip = () => {
      return (
        <SimpleTooltip>
          <Key $mini>Tab</Key>
          <Body1 $noSpacing>{`Next: ${getNextMusic()}`}</Body1>
        </SimpleTooltip>
      );
    };
    return (
      <NavBarMusicControlContainer>
        <TooltipWrapper component={playMusicTooltip()}>
          <IconButton
            icon={isPlaying ? 'musicPlaying' : 'music'}
            onClick={() => dispatch(toggleMusic())}
            spinning={isPlaying}
          />
        </TooltipWrapper>
        <TooltipWrapper hidden={!isPlaying} component={nextMusicTooltip()}>
          <IconButton
            icon='next'
            disabled={!isPlaying}
            onClick={() => dispatch(switchMusic())}
          />
        </TooltipWrapper>
      </NavBarMusicControlContainer>
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

  const closeModal = () => {
    setShowHotkeyModal(false);
  };
  const renderHotkeyModal = () => {
    if (!showHotkeyModal) return null;
    return (
      <Modal onMarginClick={closeModal} onEscapeKeyDown={closeModal}>
        <StyledModalHeader>Hotkeys</StyledModalHeader>
        <StyledModalBody>
          {hotkeysInfoMetadata.map((item, index) => (
            <StyledHotkeyRecords key={index}>
              <Key>{item.key}</Key>
              <Body1 $noSpacing>{item.action}</Body1>
            </StyledHotkeyRecords>
          ))}
        </StyledModalBody>
        <StyledModalFooter>
          <Button onClick={closeModal}>Close </Button>
        </StyledModalFooter>
      </Modal>
    );
  };
  const renderNavButtonGroup = () => {
    const onNavigate = (link: To) => {
      navigate(link);
    };
    return (
      <NavBarButtonGroupContainer>
        {viewsMetadata.map((view) => {
          return (
            <NavButton
              key={view.name}
              active={view.pathname === pathname}
              onClick={() => onNavigate(view.pathname)}
            >
              {view.name}
            </NavButton>
          );
        })}
      </NavBarButtonGroupContainer>
    );
  };

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
    <>
      <NavbarContainer style={{ y: canScroll ? yTransform : 0 }}>
        {renderHotkeyModal()}
        {renderNavButtonGroup()}
        {renderIconGroup()}
      </NavbarContainer>
      {canScroll && (
        <ProgressIndicator style={{ y: yTransform, scaleX: yProgress }} />
      )}
    </>
  );
};

export default Navbar;
