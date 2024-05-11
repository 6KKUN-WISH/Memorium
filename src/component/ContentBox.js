import React, { useState } from 'react';
import heart from '../assets/heart.png';
import red_heart from '../assets/red_heart.png';

function ContentBox({ img, name, content, time }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
   <div className='content_box' style={{ display: 'flex', justifyContent: 'space-between' }}>
   <div style={{ display: 'flex', alignItems: 'center' }}>
       <div>
           <img src={img} alt="User Avatar" />
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

   <div style={{ display: 'flex', alignItems: 'center', marginRight: '42px' }} onClick={toggleLike}>
       <img src={isLiked ? red_heart : heart} alt="Like Button" />
   </div>
</div>




  );
}

export default ContentBox;
