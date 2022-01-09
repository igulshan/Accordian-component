import React from 'react';
import './accordian.css';
import {useState} from 'react';

function Accordian(props){
    const {databook} = props;
    const [isActive, setIsActive] = useState(false);
    return(
        <>
            <div className='container'>
            <div className='head'>
            <div className='title'>{databook.title}</div>
            <div className='btn' onClick={() => setIsActive(!isActive)}>{isActive ? 'Hide' : 'Show'}</div>
            </div>
            {isActive && <p className='data'>{databook.text }</p>}
            </div>
        
        </>
    )
}

export default Accordian;