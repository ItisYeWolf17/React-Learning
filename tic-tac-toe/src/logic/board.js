import { win_combo } from "../constants";

export const checkWinner = (boardCheck) => {
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
  };

  export const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square !== null);
  };
