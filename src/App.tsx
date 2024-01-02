import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './views/home/home';

const App = () => {
  const renderRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
  return <>{renderRoutes()}</>;
};

export default App;
