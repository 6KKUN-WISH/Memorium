import React from 'react';
import plus_icon from "../assets/plus_icon.png"
import ContentBox from '../component/ContentBox';
import dog from '../assets/dog.png'
import ImgBox from '../component/ImgBox';

function Main() {


      
        return (
        <div className="main">
            <div className='main_content'>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '21px' }}>
                    <div className='main_title'>나의 장소 보관소</div>
                        <div style={{ marginRight: '38px' }}><img src={plus_icon} alt="Plus Icon" onClick={() => ImgBox.addImage()} /></div> {/* 이미지 추가 버튼 */}
                    </div>
                    <div style={{ marginTop: '5px' }}>
                        <div className='img_num_count'>총 42개</div>
                    <div style={{ marginTop: '20px', marginRight: '30px' }}><ImgBox /></div>
                </div>


                <div style={{marginTop:'36px'}}>
                    <div className='sub_title' style={{display:'flex', justifyContent:'flex-start'}}>내 아카이브 반응</div>
                    
                    <div style={{marginRight:'220px'}}>
                        <div style={{display:'flex', marginLeft:'46px',marginTop:'11px'}}>
                            <ContentBox img={dog} content='이거 조명 이쁘다' name='울랄라' time='14m' />
                        </div>

                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>
                            <ContentBox img={dog} content='오 여기 기억난다.. 추억이네' name='닉네임 추천받아요' time='25m' />
                        </div>
                    </div>
                   
                </div>

                <div>
                    <div className='sub_title' style={{marginTop:'36px',display:'flex', justifyContent:'flex-start'}}>커뮤니티</div>

                    <div style={{marginRight:'220px'}}>
                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>
                            <ContentBox img={dog} content='제 스토리에 올라온 데스크 아이템이에요. 링크 공유합니다!' name='데스크 셋업 아이템 공유합니다.' time='25m' />
                        </div>
                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>
                            <ContentBox img={dog} content='즐거웠던 해커톤의 기억 블라 블라' name='육군 화이팅' time='25m' />
                        </div>
                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>
                            <ContentBox img={dog} content='즐거웠던 해커톤의 기억 블라 블라' name='육군 화이팅' time='25m' />
                        </div>
                        <div style={{display:'flex', marginLeft:'46px', marginTop:'11px'}}>
                            <ContentBox img={dog} content='이거 조명 이쁘다' name='울랄라' time='14m' />
                        </div>
                    </div>
                   
                </div>
            </div> 
        </div>
        );
      };

export default Main;