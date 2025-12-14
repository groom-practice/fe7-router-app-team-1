import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainPage from './pages/MainPage.jsx';
import PostsPage from './pages/PostsPage.jsx';

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