import React from "react";
import Items from "./items";
export default function RowItems(props) {
  const { index, boardState, updateBoard, result } = props;
  return (
    <div className="grid-row">
      {[0, 1, 2].map((e) => {
        return (
          <Items
            key={e}
            colIndex={e}
            rowIndex={index}
            boardState={boardState}
            updateBoard={updateBoard}
            result={result}
          ></Items>
        );
      })}
    </div>
  );
}
