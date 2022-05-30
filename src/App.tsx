import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
