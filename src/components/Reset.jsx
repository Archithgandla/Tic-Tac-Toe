import React from 'react';
import "./reset.css";

function Reset({resetFunc}) {
  return (
    <button className='reset-btn' onClick={function(){
        resetFunc()
    }}> RESET</button>
  )
}

export default Reset