/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const App = () => (
  <div>
    <CssBaseline />
    <main>
      <Routes>
        <Route path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
      </Routes>
    </main>
  </div>
);

export default App;
