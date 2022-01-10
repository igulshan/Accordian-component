import React from 'react'
import { useState } from 'react';
import './accordian.css'


function Accordian (props) {
    const {data} = props;
    const [isLive,setisLive] = useState(false);
  return(
      <>
      <div className='container'>
          <div className='head'>
              <div className='title'>{data.title}</div>
              <div className='btn' onClick={()=>setisLive(!isLive)}>{isLive ? 'Hide':'Show'}</div>
          </div>
          {
            isLive && <p>{data.content}</p>
          }
          
      </div>
      </>
  )
    
}

export default Accordian;