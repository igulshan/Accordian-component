import React from 'react';
import './accordian.css';
import {useState} from 'react';

function Accordian(props){
    const [isOpen,setOpen]=useState(false);
    const {databook} = props;
    return(
        <>
            <div className='container'>
            <div className='head'>
            <div className='title'>{databook.title}</div>
            <div className='show' onClick={()=>setOpen(!isOpen)}>{isOpen ? 'Hide':'Show'}</div>
            </div>
            {isOpen && <p className='data'>{databook.text }</p>}
            
            </div>
        
        </>
    )
}

export default Accordian;