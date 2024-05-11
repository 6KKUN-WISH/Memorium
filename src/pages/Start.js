import React, { useState, useEffect } from 'react';
import start from '../assets/start.png';

function Start() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true); // 3초 후에 hide를 true로 변경하여 사라지도록 설정
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`start ${hide ? 'hidden' : ''}`}>
      <div className='main_content'>
        <div><img src={start} alt="Start"></img></div>
      </div> 
    </div>
  );
}

export default Start;
