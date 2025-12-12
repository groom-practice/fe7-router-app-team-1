import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

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
