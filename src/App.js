import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Box } from './components/Box';
import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import Reset from './components/Reset';

function App() {

  const [board,setBoard] = useState(Array(9).fill(null));
  const [xplaying,setXplaying] = useState(true);
  const [scores,setScores] = useState({xScore:0,oScore:0});
  const [gameOver,setGameOver] = useState(false);

  const win_indices = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]

  function setWinner(board){
    for(let i=0;i<win_indices.length;i++){
      const [x,y,z] = win_indices[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
          setGameOver(true);
          return board[x];
      }
    }
  }

  function resetBoard(){
      setGameOver(false);
      setBoard(Array(9).fill(null));
  }


  //console.log(board)
  function handleClick(clickedindex){
      const updatedBoard = board.map(function(value,index){
          if(index === clickedindex)
            return xplaying?"X":"O";
          else
            return value;
      })
      setBoard(updatedBoard);
      const winner = setWinner(updatedBoard);

      if(winner){
        if(winner === "X"){
          let {xScore} = scores;
          xScore+=1;
          setScores({...scores,xScore})
        }
        else if(winner === "O"){
          let {oScore} = scores;
          oScore+=1;
          setScores({...scores,oScore})
        }
      }
      
      console.log("Winner : "+winner);
      console.log(scores);
      setXplaying(!xplaying);
  }

  return (
    <>
      <Scoreboard xplaying={xplaying} scores={scores}/>
      <Board board = {board} onClick = {gameOver?resetBoard:handleClick} className = "board"/>
      <Reset resetFunc = {resetBoard}/>
      <h1>Created by Archith &#128516;</h1>
    </>
  );
}

export default App;
