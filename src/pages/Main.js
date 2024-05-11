import React, { useState } from 'react';
import plus_icon from "../assets/plus_icon.png";
import ContentBox from '../component/ContentBox';
import dog from '../assets/dog.png';
import cat from '../assets/cat.png';
import back1 from "../assets/back1.png";
import back2 from "../assets/back2.png";
import { Link } from 'react-router-dom';

import heart from '../assets/heart.png';
import red_heart from '../assets/red_heart.png';


function Main() {
    // 이미지 목록을 상태로 관리
    const [images, setImages] = useState([]);
    // 현재 이미지의 인덱스를 상태로 관리
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // 터치 시작 지점의 X 좌표를 상태로 관리
    const [touchStartX, setTouchStartX] = useState(null);

    const [isLiked, setIsLiked] = useState(false);
    const [isLiked2, setIsLiked2] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };


    const toggleLike2 = () => {
        setIsLiked2(!isLiked2);
    };

    // 파일 입력 변경 시 호출되는 함수
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImages([...images, event.target.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    // 터치 시작 이벤트 핸들러
    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    };

    // 터치 종료 이벤트 핸들러
    const handleTouchEnd = (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        const threshold = 50; // 스와이프 감지를 위한 최소 이동 거리

        if (deltaX > threshold && currentImageIndex > 0) {
            // 오른쪽에서 왼쪽으로 스와이프하여 이전 이미지로 이동
            setCurrentImageIndex(currentImageIndex - 1);
        } else if (deltaX < -threshold && currentImageIndex < images.length - 1) {
            // 왼쪽에서 오른쪽으로 스와이프하여 다음 이미지로 이동
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className="main">
            <div className='main_content'>
                <div style={{display:'flex', marginLeft:'38px', marginTop:'30px'}}>
                    <div
                        style={{
                            color: "#000",
                            fontFamily: '"Pretendard Variable"',
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 700,
                        }}
                    >
                        안녕하세요 선우님,
                    </div>
                </div>
               
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2px' }}>
                    <div className='main_title'>나의 장소 보관소</div>
                    <div style={{ marginRight: '38px' }}>
                        {/* 이미지 추가 버튼 */}
                        <label htmlFor="fileInput">
                            <img src={plus_icon} alt="Plus Icon" />
                        </label>
                        <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                    </div>
                </div>
                <div style={{ marginTop: '5px' }}>
                     <Link to="/vr">
                         <div className='img_num_count'>총 {images.length}개</div>
                    </Link>
                    <div
                        style={{ marginTop: '20px', marginRight: '30px', position: 'relative', touchAction: 'pan-y' }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >

                        {/* 이미지 슬라이더 */}
                        {images.length > 0 && (
                            <div className='img_box'>
                                <img 
                                    style={{ 
                                        width: '279px', 
                                        height: '255px', 
                                        borderRadius: '15px' 
                                    }} 
                                    src={images[currentImageIndex]} 
                                    alt={`Slide ${currentImageIndex}`} 
                                />
                            </div>
                        )}
                        {/* back1 이미지 */}
                        <div style={{ position: 'absolute', top: 0, right: '-10px', zIndex: -1 }}>
                            <img src={back1} alt="Background 1" style={{ width: '100%', height: '100%', borderRadius: '15px' }} />
                        </div>
                        {/* back2 이미지 */}
                        <div style={{ position: 'absolute', top: 0, right: '-20px', zIndex: -2 }}>
                            <img src={back2} alt="Background 2" style={{ width: '100%', height: '100%', borderRadius: '15px' }} />
                        </div>
                    </div>
                </div>

                <div style={{marginTop:'36px'}}>
                    <div className='sub_title' style={{display:'flex', justifyContent:'flex-start'}}>내 아카이브 반응</div>
                    
                    <div style={{marginRight:'220px'}}>
                        <div style={{display:'flex', marginLeft:'46px',marginTop:'11px'}}>

                            <div className='content_box' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <img src={cat} alt="User Avatar" />
                                    </div>
                                    <div style={{ marginLeft: '13px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className='box_name'>울랄라</div>
                                            <div style={{ marginLeft: '3px' }}></div>
                                            <div className='box_time'>14m</div>
                                        </div>
                                        <div className='box_content' style={{ marginTop: '1px' }}>이거 조명 이쁘다</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '212px' }} onClick={toggleLike}>
                                    <img src={isLiked ? red_heart : heart} alt="Like Button" />
                                </div>
                           </div>

                        </div>

                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>
                            <div className='content_box' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <img src={cat} alt="User Avatar" />
                                    </div>
                                    <div style={{ marginLeft: '13px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className='box_name'>닉네임 추천받아요</div>
                                            <div style={{ marginLeft: '3px' }}></div>
                                            <div className='box_time'>25m</div>
                                        </div>
                                        <div className='box_content' style={{ marginTop: '1px' }}>오 여기 기억난다.. 추억이네</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '175px' }} onClick={toggleLike2}>
                                    <img src={isLiked2 ? red_heart : heart} alt="Like Button" />
                                </div>
                           </div>

                        </div>

                    </div>
                   
                </div>

                <div>
                    <div className='sub_title' style={{marginTop:'36px',display:'flex', justifyContent:'flex-start'}}>커뮤니티</div>

                    <div style={{marginRight:'220px'}}>
                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>

                            <div className='content_box' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <img src={dog} alt="User Avatar" />
                                    </div>
                                    <div style={{ marginLeft: '13px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className='box_name'>데스크 셋업 아이템 공유합니다.</div>
                                            <div style={{ marginLeft: '3px' }}></div>
                                            <div className='box_time'>25m</div>
                                        </div>
                                        <div className='box_content' style={{ marginTop: '1px' }}>제 스토리에 올라온 데스크 아이템이에요. 링크 공유합니다</div>
                                    </div>
                                </div>


                           </div>

                        </div>
                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>

                             <div className='content_box' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <img src={dog} alt="User Avatar" />
                                    </div>
                                    <div style={{ marginLeft: '13px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className='box_name'>데스크 셋업 아이템 공유합니다.</div>
                                            <div style={{ marginLeft: '3px' }}></div>
                                            <div className='box_time'>25m</div>
                                        </div>
                                        <div className='box_content' style={{ marginTop: '1px' }}>제 스토리에 올라온 데스크 아이템이에요. 링크 공유합니다</div>
                                    </div>
                                </div>

                              
                           </div>
                        </div>
                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>

                            <div className='content_box' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <img src={dog} alt="User Avatar" />
                                    </div>
                                    <div style={{ marginLeft: '13px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className='box_name'>데스크 셋업 아이템 공유합니다.</div>
                                            <div style={{ marginLeft: '3px' }}></div>
                                            <div className='box_time'>25m</div>
                                        </div>
                                        <div className='box_content' style={{ marginTop: '1px' }}>제 스토리에 올라온 데스크 아이템이에요. 링크 공유합니다</div>
                                    </div>
                                </div>

                               
                           </div>

                        </div>
                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>

                            <div className='content_box' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <img src={dog} alt="User Avatar" />
                                    </div>
                                    <div style={{ marginLeft: '13px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className='box_name'>데스크 셋업 아이템 공유합니다.</div>
                                            <div style={{ marginLeft: '3px' }}></div>
                                            <div className='box_time'>25m</div>
                                        </div>
                                        <div className='box_content' style={{ marginTop: '1px' }}>제 스토리에 올라온 데스크 아이템이에요. 링크 공유합니다</div>
                                    </div>
                                </div>

                               
                           </div>
                        </div>
                    </div>
                   
                </div>
            </div> 
        </div>
        );
      };

export default Main;