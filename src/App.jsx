import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-layout">
      <Header />
      <div className="main-wrapper">
        <Sidebar />
        <MainPage onLoginClick={handleLogin} isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}

export default App;
