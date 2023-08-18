import React from "react";
import { useEffect, useState } from "react";
import "./Tile.css";
import {
  br,
  bn,
  bb,
  bq,
  bk,
  bp,
  wr,
  wn,
  wb,
  wq,
  wk,
  wp,
} from "../../assets/index.js";
import { getValidMoves } from "../../chess-api/index.js";

export const Tile = ({ color, piece, pos, row, col }) => {
  const [pieceIcon, setPieceIcon] = useState('');

  const handleClick = (e) => {
    let white = piece === piece.toUpperCase()? 1  : 0;
    console.log(getValidMoves(pos, row, col, white));
  };

  useEffect(() => {
    switch (piece) {
      case "r":
        setPieceIcon(br);
        break;
      case "n":
        setPieceIcon(bn);
        break;
      case "b":
        setPieceIcon(bb);
        break;
      case "q":
        setPieceIcon(bq);
        break;
      case "k":
        setPieceIcon(bk);
        break;
      case "p":
        setPieceIcon(bp);
        break;
      case "R":
        setPieceIcon(wr);
        break;
      case "N":
        setPieceIcon(wn);
        break;
      case "B":
        setPieceIcon(wb);
        break;
      case "Q":
        setPieceIcon(wq);
        break;
      case "K":
        setPieceIcon(wk);
        break;
      case "P":
        setPieceIcon(wp);
        break;
      default:
        setPieceIcon("");
        break;
    }
  }, [piece]);

  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <img className="piece" src={pieceIcon} alt="" />
    </div>
  );
};
