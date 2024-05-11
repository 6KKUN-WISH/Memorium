import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Navigate 추가
import Main from "./pages/Main";
import Start from './pages/Start';

function App() {
  const [showStart, setShowStart] = useState(true);

  useEffect(() => {
    // 3초 후에 시작 화면을 숨김
    const timer = setTimeout(() => {
      setShowStart(false);
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []); // useEffect를 한 번만 실행하도록 빈 배열 전달

  return (
    <Router>
      <div className='App'>
        {/* Routes 컴포넌트 안에 Route 컴포넌트를 사용해야 함 */}
        <Routes basename={process.env.PUBLIC_URL}>
          {/* 기본 경로를 "/"로 설정 */}
          <Route path="/" element={showStart ? <Start /> : <Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
