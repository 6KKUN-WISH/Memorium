import React,{ useState } from 'react';
import vr_background from "../assets/vr_background.png";
import vr_img from '../assets/vr_img.png'
import vr_middle from '../assets/vr_middle.png'
import delet from '../assets/delet.png'
import cat from '../assets/cat.png';

import heart from '../assets/heart.png';
import red_heart from '../assets/red_heart.png';

function Vr() {

    const [isLiked, setIsLiked] = useState(false);
    const [isLiked2, setIsLiked2] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };


    const toggleLike2 = () => {
        setIsLiked2(!isLiked2);
    };

    return (
        <div className="main">
            <div className='main_content' style={{ backgroundImage: `url(${vr_background})` }}>
                {/* 내용 */}
                <div style={{display:'flex',justifyContent:'center', marginTop:'0px'}}><img style={{marginTop:'0px'}} src={vr_img}></img></div>
                <div className='vr_middle'>
                    <div><img src={vr_middle}></img></div>
                    <div style={{marginLeft:'55px'}}></div>
                    <div><img src={delet}></img></div>
                </div>


                <div style={{marginTop:'36px'}}>
                    <div className='sub_title' style={{display:'flex', justifyContent:'flex-start'}}>댓글</div>
                    
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
            </div>
        </div>
    );
};

export default Vr;
