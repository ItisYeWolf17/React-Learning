import { useState } from 'react';
import './App.css'

const turns = {
  X: 'X',
  O: 'O'
};


const Square = ({ children, updateBoard, index, isSelected}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const win_combo = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(turns.X);
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardCheck) => {
    for(const combo of win_combo){
      const [a,b,c] = combo;

      if(
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ){
        return boardCheck[a]
      }
      
    }

    return null;
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return 

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);

    if(newWinner){
      setWinner(newWinner)
    }
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <section className='game'>
          {
            board.map((_,index) =>{
              return(
                <Square key={index} index= {index} updateBoard={updateBoard}>
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected = {turn === turns.X}>{turns.X}</Square>
          <Square isSelected = {turn === turns.O}>{turns.O}</Square>
        </section>

      </main>
    </>
  )
}


export default App
