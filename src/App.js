import { useState } from "react";
import "./App.css";
import RowItems from "./components/rowItems";

function App() {
  const [boardState, setBoardState] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState("X");
  const [clicks, setClicks] = useState(1);
  const [result, setResult] = useState("");

  const updateBoard = (row, col) => {
    const arr = boardState;
    arr[row][col] = turn;
    setTurn(turn === "X" ? "O" : "X");
    setBoardState(arr);
    setClicks(clicks + 1);
    console.log(clicks);
    if (clicks > 4) {
      checkWinner(row, col);
    }
  };
  const checkWinner = (row, col) => {
    if (
      boardState[row][0] === boardState[row][1] &&
      boardState[row][1] === boardState[row][2]
    ) {
      setResult(turn + " Won the Game");
    } else if (
      boardState[0][col] === boardState[1][col] &&
      boardState[1][col] === boardState[2][col]
    ) {
      setResult(turn + " Won the Game");
    } else if (
      row === col ||
      (row === 2 && col === 0) ||
      (row === 0 && col === 2)
    ) {
      if (
        boardState[0][0] === boardState[1][1] &&
        boardState[1][1] === boardState[2][2]
      ) {
        setResult(turn + " Won the Game");
      } else if (
        boardState[2][0] === boardState[1][1] &&
        boardState[1][1] === boardState[0][2]
      ) {
        setResult(turn + " Won the Game");
      } else if (clicks > 8) {
        setResult("Draw");
      }
    }
  };

  return (
    <div className="Container">
      <header>
        <h2>Tic Tac Toe</h2>
      </header>
      <div id="playGround">
        <div id="board">
          {[0, 1, 2].map((e) => {
            return (
              <RowItems
                index={e}
                boardState={boardState}
                updateBoard={updateBoard}
                result={result}
              ></RowItems>
            );
          })}
        </div>
        {result === "Draw" ? (
          <img src="cute-sad.gif" alt="" />
        ) : result !== "" ? (
          <img src="excited.gif" alt="" />
        ) : (
          ""
        )}
      </div>
      <div id="text">
        <div>{result} </div>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    </div>
  );
}

export default App;
