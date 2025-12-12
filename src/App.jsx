import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import PostsPage from './pages/PostsPage/PostsPage.jsx';
import BackPage from './pages/BackPage/BackPage.jsx';
import { getItem, removeItem } from './utils/storage.js';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
