import React from "react";
import "./CSS/header.css";

const Header = ({ isLoggedIn = false, onLoginClick }) => {
  return (
    <header className="header">
      <div className="logo">POST PROJECT</div>
      {/* 로그인 버튼 위치: 현재 사용 안 함 */}
      {/* {!isLoggedIn && onLoginClick && (
        <Button onClick={onLoginClick}>로그인</Button>
      )} */}
    </header>
  );
};

export default Header;
