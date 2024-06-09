// react-tooltip
import 'react-tooltip/dist/react-tooltip.css';
// react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useAppDispatch, useAppSelector } from './hooks';
import useKeyPress from './hooks/useKeyPress';
import { switchMusic, toggleMusic } from './reducers/music';
import { switchTheme } from './reducers/theme';
import { MusicPlayer } from './shared/musicPlayer/musicPlayer';
import { getTheme, GlobalStyles } from './theme';
import About from './views/about/about';
import Home from './views/home/home';
import Project from './views/project/project';

const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { isPlaying } = useAppSelector((state) => state.music);
  const dispatch = useAppDispatch();
  const renderRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
  const onKeyTDown = () => {
    dispatch(switchTheme());
  };
  useKeyPress('t', onKeyTDown);

  // TODO
  const onArrowRightDown = () => {};
  useKeyPress('ArrowRight', onArrowRightDown);

  // TODO
  const onArrowLeftDown = () => {};
  useKeyPress('ArrowLeft', onArrowLeftDown);

  // TODO
  const onArrowUpDown = () => {};
  useKeyPress('ArrowUp', onArrowUpDown);

  // TODO
  const onArrowDownDown = () => {};
  useKeyPress('ArrowDown', onArrowDownDown);

  const onTabDown = () => {
    if (isPlaying) dispatch(switchMusic());
  };
  useKeyPress('Tab', onTabDown);

  const onSpaceDown = () => {
    dispatch(toggleMusic());
  };
  useKeyPress(' ', onSpaceDown);
  return (
    <>
      <MusicPlayer />
      <GlobalStyles />
      <ThemeProvider theme={() => getTheme(theme)}>
        {renderRoutes()}
      </ThemeProvider>
    </>
  );
};

export default App;
