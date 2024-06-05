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
import { switchTheme } from './reducers/theme';
import Navbar from './shared/navbar/navbar';
import { getTheme, GlobalStyles } from './theme';
import Home from './views/home/home';

const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const renderRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
  const onKeyTDown = () => {
    dispatch(switchTheme());
  };
  useKeyPress('t', onKeyTDown);

  // TODO
  const onArrowRightDown = () => {
    console.log('next view');
  };
  useKeyPress('ArrowRight', onArrowRightDown);

  // TODO
  const onArrowLeftDown = () => {
    console.log('prev view');
  };
  useKeyPress('ArrowLeft', onArrowLeftDown);

  // TODO
  const onArrowUpDown = () => {
    console.log('upup');
  };
  useKeyPress('ArrowUp', onArrowUpDown);

  // TODO
  const onArrowDownDown = () => {
    console.log('down');
  };
  useKeyPress('ArrowDown', onArrowDownDown);

  // TODO
  const onTabDown = () => {
    console.log('Tab down');
  };
  useKeyPress('Tab', onTabDown);
  // TODO
  const onSpaceDown = () => {
    console.log('space');
  };
  useKeyPress(' ', onSpaceDown);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={() => getTheme(theme)}>
        <Navbar />
        {renderRoutes()}
      </ThemeProvider>
    </>
  );
};

export default App;
