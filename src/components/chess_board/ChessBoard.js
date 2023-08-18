import React from "react";
import { useState, useEffect } from "react";
import ChessBoardImg from "../../assets/ChessBoard.png";
import "./ChessBoard.css";
import { Tile } from "./Tile";

export const ChessBoard = () => {
  const [board, setBoard] = useState([[]]);
  const [pos, setPos] = useState([
    "rnbqkbnr",
    "pppppppp",
    "........",
    "........",
    "........",
    "........",
    "PPPPPPPP",
    "RNBQKBNR",
  ]);
  // let pos = store.boardReducer({});
  console.log();

  const initBoard = () => {
    let newBoard = [[]];
    for (let i = 0; i < 8; i++) {
      let temp = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2)
          temp.push(<Tile color="#707070" piece={pos[i][j]} pos={pos} row={i} col={j}/>);
        else temp.push(<Tile color="white" piece={pos[i][j]} pos={pos} row={i} col={j}/>);
      }
      newBoard.push(temp);
    }
    setBoard(newBoard);
  };

  useEffect(() => {
    initBoard();
  }, []);

  return <div className="chess_board">{board}</div>;
};
