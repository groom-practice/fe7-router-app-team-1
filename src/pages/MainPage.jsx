import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/Button.jsx';
import '../styles/pages/MainPage.css';
import { setItem, getItem, removeItem } from '../utils/storage.js';

//아이디 비밀번호 정의
const TEST_ID = 'test123';
const TEST_PW = 'test123password';


const MainPage = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(() => !!getItem('loginUser'));

  // 로그인 클릭
  const onLoginClick = () => {
    setIsLoggedIn(true);
  };

  // 로그아웃
  const onLogout = () => {
    removeItem('loginUser');
    setIsLoggedIn(false);
  };

  const [showModal, setShowModal] = useState(false);
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const modalBgRef = useRef(null);

  const handleLoginBtn = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setInputId('');
    setInputPw('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputId === TEST_ID && inputPw === TEST_PW) {
      setItem('loginUser', { id: inputId });
      if (onLoginClick) onLoginClick();
      closeModal();
      alert('로그인 되었습니다');
    } else {
      alert('로그인 실패했습니다');
    }
  };

  // ESC 눌러도 닫힘
  useEffect(() => {
    if (!showModal) return;
    const listener = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [showModal]);


  // 배경 클릭 시 닫힘
  const handleBgClick = (e) => {
    if (e.target === modalBgRef.current) closeModal();
  };

  return (
    <main className="main-content center-content">
      <h1 className="main-title">Welcome To Main Page</h1>

      {!isLoggedIn && (
        <Button onClick={handleLoginBtn} className="main-login-btn">
          로그인
        </Button>
      )}

      {isLoggedIn && (
        <Button onClick={onLogout} className="main-login-btn" type="button">
          로그아웃
        </Button>
      )}

      {showModal && (
        <div
          className="login-modal-bg"
          ref={modalBgRef}
          onMouseDown={handleBgClick}
        >
          <div className="login-modal">
            <h2>로그인</h2>
            <form onSubmit={handleLogin} autoComplete="off">
              <input
                autoComplete="username"
                type="text"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                placeholder="아이디"
                autoFocus
              />

              <input
                autoComplete="current-password"
                type="password"
                value={inputPw}
                onChange={(e) => setInputPw(e.target.value)}
                placeholder="비밀번호"
              />

              <Button className="main-login-btn" type="submit">
                로그인
              </Button>
              <Button
                className="main-login-btn"
                type="button"
                onClick={closeModal}
              >
                취소
              </Button>

            </form>

            <div className="login-tip">
              테스트 계정
              <br />
              id : <b>{TEST_ID}</b> / pw : <b>{TEST_PW}</b>
            </div>

          </div>
        </div>
      )}
    </main>
  );
};

export default MainPage;
