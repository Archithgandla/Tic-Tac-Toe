import React from 'react';
import "./scoreboard.css";

function Scoreboard({scores,xplaying}) {
    const {xScore,oScore} = scores;
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xplaying&&"inactive"}`}>X-{xScore}</span>
        <span className={`score o-score ${xplaying && "inactive"}`}>O-{oScore}</span>
    </div>
  )
}

export default Scoreboard