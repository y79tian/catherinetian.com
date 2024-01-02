import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { getTheme, GlobalStyles } from './theme';
import Home from './views/home/home';

const App = () => {
  const renderRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={() => getTheme('light')}>
        {renderRoutes()}
      </ThemeProvider>
    </>
  );
};

export default App;
