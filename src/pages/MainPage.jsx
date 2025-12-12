import React from "react";
import Button from "../components/Button.jsx";

const MainPage = ({ onLoginClick, isLoggedIn }) => {
  const handleLogin = () => {
    alert("테스트 계정\n아이디: test123\n비밀번호: test123password");
    if(onLoginClick) onLoginClick();
  };

  return (
    <main className="main-content center-content">
      <h1 className="main-title">Welcome To Main Page</h1>
      {!isLoggedIn && (
        <Button onClick={handleLogin} className="main-login-btn">로그인</Button>
      )}
    </main>
  );
};

export default MainPage;
