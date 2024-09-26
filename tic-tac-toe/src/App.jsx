import { useState } from 'react';
import './App.css'
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import {turns} from './constants'
import {checkWinner, checkEndGame} from './logic/board';
import { WinnerModal } from './components/WinnerModal';


function App() {
  const [board, setBoard] = useState(() =>{
    const boardFromStorage = window.localStorage.getItem('board');
    if(boardFromStorage) return JSON.parse(boardFromStorage);

    return Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? turns.X;
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if(board[index] || winner) return 

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
    const newWinner = checkWinner(newBoard);

    if(newWinner){
      confetti()
      setWinner(newWinner);
    } else if(checkEndGame(newBoard)){
      setWinner(false);
    }

  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(turns.X)
    setWinner(null)

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Restart Game</button>
        <section className='game'>
          {
            board.map((square,index) =>{
              return(
                <Square key={index} index= {index} updateBoard={updateBoard}>
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected = {turn === turns.X}>{turns.X}</Square>
          <Square isSelected = {turn === turns.O}>{turns.O}</Square>
        </section>


        <WinnerModal resetGame= {resetGame} winner= {winner}></WinnerModal>

      </main>
    </>
  )
}


export default App
