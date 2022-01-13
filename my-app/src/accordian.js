import React from 'react'
import { useState } from 'react';
import './accordian.css'


function Accordian (props) {
    const {data} = props;
    const [isLive,setisLive] = useState([false,false,false,false]);
    const [mainclass,setclass] = useState('container');
    function toggle(index){
      var newlist=[]
      if (index===3 || index===0){
        setclass('Container1');
      }
      if (index===1 || index===2){
        setclass('container');
      }
      for (var i=0;i<4;i++){
        if (i===index){
          newlist.push(true)
        }
        else{
          newlist.push(false)
        }
      }
      setisLive(newlist)
      isLive.splice(index,1,true);
    }
  return(
      <>
      <div className={mainclass}>
          {
            isLive[3] && <p className='above'>{data.content}</p>
          }
          {
            isLive[1] && <p className='above'>{data.content}</p>
          }
          <div className='head'>
              <div className='btn2' onClick={()=>toggle(1)}>{isLive[1] ? 'Hide':'Show'}</div>
              <div className='btn4' onClick={()=>toggle(3)}>{isLive[3] ? 'Hide':'Show'}</div>
              <div className='title'>{data.title}</div>
              <div className='btn' onClick={()=>toggle(0)}>{isLive[0] ? 'Hide':'Show'}</div>
              <div className='btn3' onClick={()=>toggle(2)}>{isLive[2] ? 'Hide':'Show'}</div>
          </div>
          {
            isLive[0] && <p className='above'>{data.content}</p>
          }
          {
            isLive[2] && <p className='above'>{data.content}</p>
          }
          
      </div>
      </>
  )
    
}

export default Accordian;