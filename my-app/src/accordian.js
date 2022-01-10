import React from 'react';
import './accordian.css';

function Accordian(props){
    const {databook} = props;
    return(
        <>
            <div className='container'>
            <div className='head'>
            <div className='title'>{databook.title}</div>
            </div>
            <p className='data'>{databook.text }</p>
            </div>
        
        </>
    )
}

export default Accordian;