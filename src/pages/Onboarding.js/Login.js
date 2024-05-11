import React from 'react';
import login_bottom from '../../assets/login_bottom.png'
import { Link } from 'react-router-dom';

function Login() {


      
        return (
        <div className="main">
            <div className='main_content'>
                <div className="login_title" style={{display: 'flex', marginTop: '230px', justifyContent: 'center', marginRight: '130px'}}>
                    <p style={{color: '#6147FF'}}>메모리움</p> 
                    &nbsp;
                    <p>로그인하기</p>
                </div>

                <div style={{display: 'flex', justifyContent: 'center'}}> 
                     <input  className="input_box" placeholder="아이디"></input>
                </div>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: '8px'}}> 
                     <input  className="input_box" placeholder="비밀번호"></input>
                </div>

                <div style={{display: 'flex',justifyContent: 'center'}}> 
                   <Link to="/Main">
                        <button style={{marginTop:'67px'}} className="login_button">
                            <p >로그인하기</p>
                        </button>  
                    </Link>     
                </div>

                <div style={{marginTop:'20px'}}>
                    <div 
                        style={{
                            color: "#7E7E7E",
                            fontFamily: '"Pretendard Variable"',
                            fontSize: "13px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal"
                        }}
                        >메모리움은 개인정보를 일절 수집하지 않아요
                     </div>
                </div>

                <div style={{marginTop:'180px'}}>
                    <div 
                        style={{
                            color: "var(--828282, #828282)",
                            textAlign: "center",
                            fontFamily: '"Apple SD Gothic Neo"',
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "130%"
                        }}
                        >SNS계정으로 간편 로그인
                     </div>
                </div>

                <div><img src={login_bottom}></img></div>
                
            </div> 
        </div>
        );
      };

export default Login;