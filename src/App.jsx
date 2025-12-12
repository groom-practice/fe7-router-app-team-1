import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainPage from "./pages/MainPage.jsx";

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
