import Button from "./Button.jsx";

const Header = ({ isLoggedIn = false, onLoginClick }) => {
  return (
    <header className="header">
      <div className="logo">POST PROJECT</div>
      {!isLoggedIn && onLoginClick && (
        <Button onClick={onLoginClick}>로그인</Button>
      )}
    </header>
  );
};

export default Header;
