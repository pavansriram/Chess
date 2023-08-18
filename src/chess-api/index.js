function isInside(x, y) {
  if (x >= 0 && x < 8 && y >= 0 && y < 8) return true;
  return false;
}

function isValidMove(pos, newX, newY, oldX, oldY, piece, kill, white) {
  if (isInside(newX, newY)) {
    if (!kill && pos[newX][newY] === ".") {
      // pos[oldX][oldY] = ".";
      // pos[newX][newY] = piece;
      pos[oldX] = pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
      pos[newX] =
        pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
      if (!isCheck(pos, white)) {
        return true;
      }
      return false;
    } else if (kill) {
      if (piece === "p") {
        if (
          pos[newX][newY] === "P" ||
          pos[newX][newY] === "R" ||
          pos[newX][newY] === "N" ||
          pos[newX][newY] === "B" ||
          pos[newX][newY] === "Q"
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "P") {
        if (
          pos[newX][newY] === "p" ||
          pos[newX][newY] === "r" ||
          pos[newX][newY] === "n" ||
          pos[newX][newY] === "b" ||
          pos[newX][newY] === "q"
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "r") {
        if (
          pos[newX][newY] === "P" ||
          pos[newX][newY] === "R" ||
          pos[newX][newY] === "N" ||
          pos[newX][newY] === "B" ||
          pos[newX][newY] === "Q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "R") {
        if (
          pos[newX][newY] === "p" ||
          pos[newX][newY] === "r" ||
          pos[newX][newY] === "n" ||
          pos[newX][newY] === "b" ||
          pos[newX][newY] === "q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "n") {
        if (
          pos[newX][newY] === "P" ||
          pos[newX][newY] === "R" ||
          pos[newX][newY] === "N" ||
          pos[newX][newY] === "B" ||
          pos[newX][newY] === "Q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "N") {
        if (
          pos[newX][newY] === "p" ||
          pos[newX][newY] === "r" ||
          pos[newX][newY] === "n" ||
          pos[newX][newY] === "b" ||
          pos[newX][newY] === "q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "b") {
        if (
          pos[newX][newY] === "P" ||
          pos[newX][newY] === "R" ||
          pos[newX][newY] === "N" ||
          pos[newX][newY] === "B" ||
          pos[newX][newY] === "Q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "B") {
        if (
          pos[newX][newY] === "p" ||
          pos[newX][newY] === "r" ||
          pos[newX][newY] === "n" ||
          pos[newX][newY] === "b" ||
          pos[newX][newY] === "q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "q") {
        if (
          pos[newX][newY] === "P" ||
          pos[newX][newY] === "R" ||
          pos[newX][newY] === "N" ||
          pos[newX][newY] === "B" ||
          pos[newX][newY] === "Q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "Q") {
        if (
          pos[newX][newY] === "p" ||
          pos[newX][newY] === "r" ||
          pos[newX][newY] === "n" ||
          pos[newX][newY] === "b" ||
          pos[newX][newY] === "q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "k") {
        if (
          pos[newX][newY] === "P" ||
          pos[newX][newY] === "R" ||
          pos[newX][newY] === "N" ||
          pos[newX][newY] === "B" ||
          pos[newX][newY] === "Q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      } else if (piece === "K") {
        if (
          pos[newX][newY] === "p" ||
          pos[newX][newY] === "r" ||
          pos[newX][newY] === "n" ||
          pos[newX][newY] === "b" ||
          pos[newX][newY] === "q" ||
          pos[newX][newY] === "."
        ) {
          pos[oldX] =
            pos[oldX].substr(0, oldY) + "." + pos[oldX].substr(oldY + 1);
          pos[newX] =
            pos[newX].substr(0, newY) + piece + pos[newX].substr(newY + 1);
          if (!isCheck(pos, white)) {
            return true;
          }
          return false;
        }
        return false;
      }
    }
  }
  return false;
}

export function getValidMoves(currPos, pieceX, pieceY, white) {
  let holdCurrPos = JSON.parse(JSON.stringify(currPos));
  let validMoves = [];
  if (white === 0) {
    console.log("Iam black")
    switch (currPos[pieceX][pieceY]) {
      case "p": {
        if (!isCheck(currPos, white)) {
          if (
            isValidMove(
              currPos,
              pieceX + 1,
              pieceY,
              pieceX,
              pieceY,
              "p",
              false,
              white
            )
          ) {
            validMoves.push([pieceX + 1, pieceY]);
          }
          // 2 steps forward
          if (
            isValidMove(
              currPos,
              pieceX + 2,
              pieceY,
              pieceX,
              pieceY,
              "p",
              false,
              white
            )
          ) {
            validMoves.push([pieceX + 2, pieceY]);
          }

          // kill
          if (
            isValidMove(
              currPos,
              pieceX + 1,
              pieceY + 1,
              pieceX,
              pieceY,
              "p",
              true,
              white
            )
          ) {
            validMoves.push([pieceX + 1, pieceY + 1]);
          }
          if (
            isValidMove(
              currPos,
              pieceX + 1,
              pieceY - 1,
              pieceX,
              pieceY,
              "p",
              true,
              white
            )
          ) {
            validMoves.push([pieceX + 1, pieceY - 1]);
          }
        }
        // 1 step forward

        // en passant - to be completed later
        break;
      }
      case "r": {
        if (!isCheck(currPos, white)) {
          let x = pieceX - 1,
            y = pieceY;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "r", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
          }
          x = pieceX + 1;
          y = pieceY;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "r", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
          }
          x = pieceX;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "r", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            y--;
          }
          x = pieceX;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "r", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            y++;
          }
        }
        break;
      }
      case "n": {
        if (!isCheck(currPos, white)) {
          let x = pieceX,
            y = pieceY;
          let knightRowMoves = [-2, -2, -1, -1, 1, 1, 2, 2];
          let knightColMoves = [-1, 1, -2, 2, -2, 2, -1, 1];
          for (let i = 0; i < 8; i++) {
            if (
              isInside(x + knightRowMoves[i], y + knightColMoves[i]) &&
              isValidMove(
                currPos,
                x + knightRowMoves[i],
                y + knightColMoves[i],
                pieceX,
                pieceY,
                "n",
                true,
                white
              )
            ) {
              validMoves.push([x + knightRowMoves[i], y + knightColMoves[i]]);
            }
          }
        }
        break;
      }
      case "b": {
        if (!isCheck(currPos, white)) {
          let x = pieceX - 1,
            y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "b", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
            y--;
          }
          x = pieceX + 1;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "b", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
            y++;
          }
          x = pieceX - 1;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "b", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
            y++;
          }
          x = pieceX + 1;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "b", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
            y--;
          }
        }
        break;
      }
      case "q": {
        if (!isCheck(currPos, white)) {
          let x = pieceX - 1,
            y = pieceY;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
          }
          x = pieceX + 1;
          y = pieceY;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
          }
          x = pieceX;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            y--;
          }
          x = pieceX;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            y++;
          }
          x = pieceX - 1;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
            y--;
          }
          x = pieceX + 1;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
            y++;
          }
          x = pieceX - 1;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
            y++;
          }
          x = pieceX + 1;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
            y--;
          }
        }
        break;
      }
      case "k": {
        if (!isCheck(currPos, white)) {
          let x = pieceX,
            y = pieceY;
          let kingRowMoves = [-1, -1, -1, 0, 0, 1, 1, 1];
          let kingColMoves = [-1, 0, 1, -1, 1, -1, 0, 1];
          for (let i = 0; i < 8; i++) {
            if (
              isInside(x + kingRowMoves[i], y + kingColMoves[i]) &&
              isValidMove(
                currPos,
                x + kingRowMoves[i],
                y + kingColMoves[i],
                pieceX,
                pieceY,
                "k",
                true,
                white
              )
            ) {
              validMoves.push([x + kingRowMoves[i], y + kingColMoves[i]]);
            }
          }
        }
        break;
      }
      default:
        break;
    }
  } else {
    switch (currPos[pieceX][pieceY]) {
      case "P": {
        if (!isCheck(currPos, white)) {
          if (
            isValidMove(
              currPos,
              pieceX - 1,
              pieceY,
              pieceX,
              pieceY,
              "P",
              false,
              white
            )
          ) {
            validMoves.push([pieceX - 1, pieceY]);
          }
          // 2 steps forward
          if (
            isValidMove(
              currPos,
              pieceX - 2,
              pieceY,
              pieceX,
              pieceY,
              "P",
              false,
              white
            )
          ) {
            validMoves.push([pieceX - 2, pieceY]);
          }

          // kill
          if (
            isValidMove(
              currPos,
              pieceX - 1,
              pieceY + 1,
              pieceX,
              pieceY,
              "P",
              true,
              white
            )
          ) {
            validMoves.push([pieceX - 1, pieceY + 1]);
          }
          if (
            isValidMove(
              currPos,
              pieceX - 1,
              pieceY - 1,
              pieceX,
              pieceY,
              "P",
              true,
              white
            )
          ) {
            validMoves.push([pieceX - 1, pieceY - 1]);
          }
        }
        // 1 step forward

        // en passant - to be completed later
        break;
      }
      case "R": {
        if (!isCheck(currPos, white)) {
          let x = pieceX - 1,
            y = pieceY;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "R", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
          }
          x = pieceX + 1;
          y = pieceY;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "R", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
          }
          x = pieceX;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "R", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            y--;
          }
          x = pieceX;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "R", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            y++;
          }
        }
        break;
      }
      case "N": {
        if (!isCheck(currPos, white)) {
          let x = pieceX,
            y = pieceY;
          let knightRowMoves = [-2, -2, -1, -1, 1, 1, 2, 2];
          let knightColMoves = [-1, 1, -2, 2, -2, 2, -1, 1];
          for (let i = 0; i < 8; i++) {
            if (
              isInside(x + knightRowMoves[i], y + knightColMoves[i]) &&
              isValidMove(
                currPos,
                x + knightRowMoves[i],
                y + knightColMoves[i],
                pieceX,
                pieceY,
                "N",
                true,
                white
              )
            ) {
              validMoves.push([x + knightRowMoves[i], y + knightColMoves[i]]);
            }
          }
        }
        break;
      }
      case "B": {
        if (!isCheck(currPos, white)) {
          let x = pieceX - 1,
            y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "B", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
            y--;
          }
          x = pieceX + 1;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "B", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
            y++;
          }
          x = pieceX - 1;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "B", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
            y++;
          }
          x = pieceX + 1;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "B", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
            y--;
          }
        }
        break;
      }
      case "Q": {
        if (!isCheck(currPos, white)) {
          let x = pieceX - 1,
            y = pieceY;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "Q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
          }
          x = pieceX + 1;
          y = pieceY;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "Q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
          }
          x = pieceX;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "Q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            y--;
          }
          x = pieceX;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "Q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            y++;
          }
          x = pieceX - 1;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "Q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
            y--;
          }
          x = pieceX + 1;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "Q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
            y++;
          }
          x = pieceX - 1;
          y = pieceY + 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "Q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x--;
            y++;
          }
          x = pieceX + 1;
          y = pieceY - 1;
          while (isInside(x, y)) {
            if (isValidMove(currPos, x, y, pieceX, pieceY, "Q", true, white)) {
              validMoves.push([x, y]);
            } else if (currPos[x][y] !== ".") break;
            x++;
            y--;
          }
        }
        break;
      }
      case "K": {
        if (!isCheck(currPos, white)) {
          let x = pieceX,
            y = pieceY;
          let kingRowMoves = [-1, -1, -1, 0, 0, 1, 1, 1];
          let kingColMoves = [-1, 0, 1, -1, 1, -1, 0, 1];
          for (let i = 0; i < 8; i++) {
            if (
              isInside(x + kingRowMoves[i], y + kingColMoves[i]) &&
              isValidMove(
                currPos,
                x + kingRowMoves[i],
                y + kingColMoves[i],
                pieceX,
                pieceY,
                "K",
                true,
                white
              )
            ) {
              validMoves.push([x + kingRowMoves[i], y + kingColMoves[i]]);
            }
          }
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  for(let i=0; i<8; i++){
    currPos[i] = holdCurrPos[i];
  }

  return validMoves;
}

function isCheck(currPos, white) {
  if (white) {
    let [kingX, kingY] = getWhiteKingPos(currPos);
    // check with rook and queen
    let x = kingX - 1,
      y = kingY;
    while (isInside(x, y)) {
      if (currPos[x][y] === "r" || currPos[x][y] === "q") return true;
      else if (currPos[x][y] !== ".") break;
      x--;
    }
    x = kingX + 1;
    y = kingY;
    while (isInside(x, y)) {
      if (currPos[x][y] === "r" || currPos[x][y] === "q") return true;
      else if (currPos[x][y] !== ".") break;
      x++;
    }
    x = kingX;
    y = kingY - 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "r" || currPos[x][y] === "q") return true;
      else if (currPos[x][y] !== ".") break;
      y--;
    }
    x = kingX;
    y = kingY + 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "r" || currPos[x][y] === "q") return true;
      else if (currPos[x][y] !== ".") break;
      y++;
    }

    // check with bishop and queen
    x = kingX - 1;
    y = kingY - 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "b" || currPos[x][y] === "q") return true;
      else if (currPos[x][y] !== ".") break;
      x--;
      y--;
    }
    x = kingX + 1;
    y = kingY + 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "b" || currPos[x][y] === "q") return true;
      else if (currPos[x][y] !== ".") break;
      x++;
      y++;
    }
    x = kingX - 1;
    y = kingY + 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "b" || currPos[x][y] === "q") return true;
      else if (currPos[x][y] !== ".") break;
      x--;
      y++;
    }
    x = kingX + 1;
    y = kingY - 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "b" || currPos[x][y] === "q") return true;
      else if (currPos[x][y] !== ".") break;
      x++;
      y--;
    }

    // check with knight
    x = kingX;
    y = kingY;
    let knightRowMoves = [-2, -2, -1, -1, 1, 1, 2, 2];
    let knightColMoves = [-1, 1, -2, 2, -2, 2, -1, 1];
    for (let i = 0; i < 8; i++) {
      if (
        isInside(x + knightRowMoves[i], y + knightColMoves[i]) &&
        currPos[x + knightRowMoves[i]][y + knightColMoves[i]] === "n"
      )
        return true;
    }

    // check with pawn
    if (
      isInside(kingX - 1, kingY - 1) &&
      currPos[kingX - 1][kingY - 1] === "p"
    ) {
      return true;
    }
    if (
      isInside(kingX - 1, kingY + 1) &&
      currPos[kingX - 1][kingY + 1] === "p"
    ) {
      return true;
    }

    // check with king
    let kingRowMoves = [-1, -1, -1, 0, 0, 1, 1, 1];
    let kingColMoves = [-1, 0, 1, -1, 1, -1, 0, 1];
    for (let i = 0; i < 8; i++) {
      if (
        isInside(kingX + kingRowMoves[i], kingY + kingColMoves[i]) &&
        currPos[kingX + kingRowMoves[i]][kingY + kingColMoves[i]] === "k"
      )
        return true;
    }
    return false;
  } else {
    let [kingX, kingY] = getBlackKingPos(currPos);
    let x = kingX - 1,
      y = kingY;
    while (isInside(x, y)) {
      if (currPos[x][y] === "R" || currPos[x][y] === "Q") return true;
      else if (currPos[x][y] !== ".") break;
      x--;
    }
    x = kingX + 1;
    y = kingY;
    while (isInside(x, y)) {
      if (currPos[x][y] === "R" || currPos[x][y] === "Q") return true;
      else if (currPos[x][y] !== ".") break;
      x++;
    }
    x = kingX;
    y = kingY - 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "R" || currPos[x][y] === "Q") return true;
      else if (currPos[x][y] !== ".") break;
      y--;
    }
    x = kingX;
    y = kingY + 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "R" || currPos[x][y] === "Q") return true;
      else if (currPos[x][y] !== ".") break;
      y++;
    }

    // check with bishop and queen
    x = kingX - 1;
    y = kingY - 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "B" || currPos[x][y] === "Q") return true;
      else if (currPos[x][y] !== ".") break;
      x--;
      y--;
    }
    x = kingX + 1;
    y = kingY + 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "B" || currPos[x][y] === "Q") return true;
      else if (currPos[x][y] !== ".") break;
      x++;
      y++;
    }
    x = kingX - 1;
    y = kingY + 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "B" || currPos[x][y] === "Q") return true;
      else if (currPos[x][y] !== ".") break;
      x--;
      y++;
    }
    x = kingX + 1;
    y = kingY - 1;
    while (isInside(x, y)) {
      if (currPos[x][y] === "B" || currPos[x][y] === "Q") return true;
      else if (currPos[x][y] !== ".") break;
      x++;
      y--;
    }

    // check with knight
    x = kingX;
    y = kingY;
    let knightRowMoves = [-2, -2, -1, -1, 1, 1, 2, 2];
    let knightColMoves = [-1, 1, -2, 2, -2, 2, -1, 1];
    for (let i = 0; i < 8; i++) {
      if (
        isInside(x + knightRowMoves[i], y + knightColMoves[i]) &&
        currPos[x + knightRowMoves[i]][y + knightColMoves[i]] === "N"
      )
        return true;
    }

    // check with pawn
    if (
      isInside(kingX - 1, kingY - 1) &&
      currPos[kingX - 1][kingY - 1] === "P"
    ) {
      return true;
    }
    if (
      isInside(kingX - 1, kingY + 1) &&
      currPos[kingX - 1][kingY + 1] === "P"
    ) {
      return true;
    }

    // check with king
    let kingRowMoves = [-1, -1, -1, 0, 0, 1, 1, 1];
    let kingColMoves = [-1, 0, 1, -1, 1, -1, 0, 1];
    for (let i = 0; i < 8; i++) {
      if (
        isInside(kingX + kingRowMoves[i], kingY + kingColMoves[i]) &&
        currPos[kingX + kingRowMoves[i]][kingY + kingColMoves[i]] === "K"
      )
        return true;
    }
    return false;
  }
}

function getWhiteKingPos(currPos) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (currPos[i][j] === "K") {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

function getBlackKingPos(currPos) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (currPos[i][j] === "k") {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

function isCheckmate(currPos, white) {
  let [kingX, kingY] = white
    ? getWhiteKingPos(currPos)
    : getBlackKingPos(currPos);
  let kingRowMoves = [-1, -1, -1, 0, 0, 1, 1, 1];
  let kingColMoves = [-1, 0, 1, -1, 1, -1, 0, 1];
  for (let i = 0; i < 8; i++) {
    if (
      isInside(kingX + kingRowMoves[i], kingY + kingColMoves[i]) &&
      !isCheck(currPos, white)
    )
      return false;
  }
  return true;
}
