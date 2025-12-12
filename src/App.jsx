import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import PostsPage from "./pages/PostsPage/PostsPage.jsx";
import BackPage from "./pages/BackPage/BackPage.jsx";
import { getItem, removeItem } from "./utils/storage.js";

import { Outlet } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!getItem("loginUser"));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    removeItem("loginUser");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <div className="main-wrapper">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} onLoginClick={handleLogin} onLogout={handleLogout} />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/back" element={<BackPage />} />
          </Routes>

          <Outlet />
        </div>
      </div>
    </BrowserRouter>
}

export default App;
