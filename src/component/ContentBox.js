import React from 'react';

function ContentBox({img,name,content,time}) {


      
        return (
          <div className='content_box'>
             <div><img src={img}></img></div>
             <div style={{marginLeft:'13px'}}>
                 <div style={{display:'flex', alignItems:'center'}}>
                    <div className='box_name'>{name}</div>
                    <div style={{marginLeft:'3px'}}></div>
                    <div className='box_time'>{time}</div>
                 </div>
                 <div className='box_content' style={{marginTop:'1px'}}>{content}</div>
             </div>
          </div>
        );
      };

export default ContentBox;