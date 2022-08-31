import React, { useState } from "react";
export default function Items(props) {
  const [clicked, setClicked] = useState(false);
  const clickSound = new Audio("ting.mp3");
  const { result, rowIndex, colIndex, updateBoard, boardState } = props;

  return (
    <div
      className="grid-item"
      onClick={(e) => {
        if (result === "") {
          clickSound.play();
          if (!clicked) {
            updateBoard(rowIndex, colIndex);
          }
        }
        setClicked(true);
      }}
    >
      {boardState[rowIndex][colIndex]}
    </div>
  );
}
