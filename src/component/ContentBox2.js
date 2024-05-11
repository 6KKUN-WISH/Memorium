import React, { useState } from 'react';
import heart from '../assets/heart.png';
import red_heart from '../assets/red_heart.png';

function ContentBox2({ img, name, content, time }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div style={{display:'flex', justifyContent:'space-between'}} className='content_box'>
      
      <div  style={{display:'flex', alignItems:'center'}}>
         <div>
             <img src={img} alt="User Avatar"></img>
         </div>
         <div style={{ marginLeft: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <div className='box_name'>{name}</div>
               <div style={{ marginLeft: '3px' }}></div>
               <div className='box_time'>{time}</div>
            </div>
            <div className='box_content' style={{ marginTop: '1px' }}>{content}</div>
         </div>
      </div>

      <div>
         <div style={{marginRight:'42px'}} onClick={toggleLike}>
             <img src={isLiked ? red_heart : heart} alt="Like Button"></img>
         </div>
      </div>

    

     
    </div>
  );
}

export default ContentBox2;
