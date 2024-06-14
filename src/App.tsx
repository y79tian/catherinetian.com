// react-tooltip
import 'react-tooltip/dist/react-tooltip.css';
// react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useAppDispatch, useAppSelector } from './hooks';
import useKeyPress from './hooks/useKeyPress';
import { switchMusic, toggleMusic } from './reducers/music';
import { switchTheme } from './reducers/theme';
import { MusicPlayer } from './shared/musicPlayer/musicPlayer';
import { viewsMetadata } from './shared/navbar/navbar.metadata';
import { getTheme, GlobalStyles } from './theme';
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const handlePageView = (url: string) => {
      if (window.gtag) {
        window.gtag('config', 'G-DQE6PWWG6C', {
          page_path: url,
        });
      }
    };

    handlePageView(location.pathname + location.search);
  }, [location]);
}
const PageTracking = () => {
  usePageTracking();
  return null;
};
const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { isPlaying } = useAppSelector((state) => state.music);
  const dispatch = useAppDispatch();

  const renderRoutes = () => (
    <BrowserRouter>
      <PageTracking />
      <Routes>
        {viewsMetadata.map(({ name, pathname: path, src }) => (
          <Route key={name} path={path} element={React.createElement(src)} />
        ))}
      </Routes>
    </BrowserRouter>
  );
  const onKeyTDown = () => {
    dispatch(switchTheme());
  };
  useKeyPress('t', onKeyTDown);

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
