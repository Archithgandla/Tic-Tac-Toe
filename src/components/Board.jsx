import React from 'react'
import { Box } from './Box'
import "./Board.css"

function Board({board,onClick}) {
  return (
    <div className='board'>
    {board.map(function(value,index){
        //console.log(index);
        return <Box key = {index} onClick={function(){
            onClick(index)
        }} value = {value}/>})}
    </div>
  )
}

export default Board

