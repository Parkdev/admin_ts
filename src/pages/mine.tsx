import React, { useState, useEffect } from "react";

type Cell = {
  row: number;
  col: number;
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
};

const Minesweeper: React.FC = () => {
  const [initialState, setInitialState] = useState({
    row: 8,
    col: 8,
    mines: 10,
  });
  const [board, setBoard] = useState<Cell[][]>([]);

  useEffect(() => {
    const newBoard: Cell[][] = [];

    for (let row = 0; row < initialState.row; row++) {
      const newRow: Cell[] = [];
      for (let col = 0; col < initialState.col; col++) {
        newRow.push({
          row: row,
          col: col,
          isMine: false,
          isRevealed: false,
          isFlagged: false,
        });
      }
      newBoard.push(newRow);
    }
    setBoard(newBoard);
  });
  return (
    <div className="w-full p-10 flex flex-col items-center justfy-content-center">
      <h1>Mine Sweeper</h1>
      <div className="p-5 rounded-md border border-gray-500">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} id="row" className="flex">
            {row.map((col, colIndex) => (
              <button
                key={colIndex}
                className="w-10 h-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br ` focus:outline-none shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm text-center me-2 mb-2"
                // className={`minesweeper-cell ${cell.isRevealed ? "revealed" : ""} ${cell.isFlagged ? "flagged" : ""}`}
                //   onClick={() => handleCellClick(cell.row, cell.col)}
                //   onContextMenu={(event) =>
                //     handleCellRightClick(event, cell.row, cell.col)
                //   }
              >
                1
                {/* {cell.isRevealed &&
                !cell.isMine &&
                calculateAdjacentMines(cell.row, cell.col) > 0 && (
                  <span
                    className={`minesweeper-mine-count-${calculateAdjacentMines(cell.row, cell.col)}`}
                  >
                    {calculateAdjacentMines(cell.row, cell.col)}
                  </span>
                )}
              {cell.isRevealed && cell.isMine && (
                <span className="minesweeper-mine">💣</span>
              )}
              {cell.isFlagged && !cell.isRevealed && (
                <span className="minesweeper-flag">🚩</span>
              )} */}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Minesweeper;

// const handleCellClick = (row: number, col: number) => {
//         if (gameOver) return;

//         const clickedCell = board[row][col];

//         if (clickedCell.isRevealed || clickedCell.isFlagged) return;

//         if (clickedCell.isMine) {
//             // 게임 오버 로직
//             setGameOver(true);
//         } else {
//             // 주변 지뢰 개수 계산 로직
//             const adjacentMines = calculateAdjacentMines(row, col);
//             const newBoard = [...board];
//             newBoard[row][col].isRevealed = true;
//             setBoard(newBoard);

//             if (adjacentMines === 0) {
//                 // 주변이 0개의 지뢰인 경우 주변 셀들도 자동으로 열기
//                 revealAdjacentCells(row, col);
//             }
//         }
//     };

//     const calculateAdjacentMines = (row: number, col: number) => {
//         let count = 0;

//         for (let i = -1; i <= 1; i++) {
//             for (let j = -1; j <= 1; j++) {
//                 const newRow = row + i;
//                 const newCol = col + j;

//                 if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
//                     if (board[newRow][newCol].isMine) {
//                         count++;

//         return count;
//     };

//     const revealAdjacentCells = (row: number, col: number) => {
//         for (let i = -1; i <= 1; i++) {
//             for (let j = -1; j <= 1; j++) {
//                 const newRow = row + i;
//                 const newCol = col + j;

//                 if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
//                     const cell = board[newRow][newCol];

//                     if (!cell.isRevealed && !cell.isFlagged) {
//                         cell.isRevealed = true;

//                         if (calculateAdjacentMines(newRow, newCol) === 0) {
//                             revealAdjacentCells(newRow, newCol);
//                         }
//                     }
//                 }
//             }
//         }
//     };

//     const handleCellRightClick = (event: React.MouseEvent, row: number, col: number) => {
//         event.preventDefault();

//         if (gameOver) return;

//         const newBoard = [...board];
//         newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
//         setBoard(newBoard);
//     };

//     return (
//         <div className="minesweeper-board">
//             {board.map((row, rowIndex) => (
//                 <div key={rowIndex} className="minesweeper-row">
//                     {row.map((cell, colIndex) => (
//                         <div
//                             key={colIndex}
//                             className={`minesweeper-cell ${cell.isRevealed ? 'revealed' : ''} ${cell.isFlagged ? 'flagged' : ''}`}
//                             onClick={() => handleCellClick(cell.row, cell.col)}
//                             onContextMenu={(event) => handleCellRightClick(event, cell.row, cell.col)}
//                         >
//                             {cell.isRevealed && !cell.isMine && calculateAdjacentMines(cell.row, cell.col) > 0 && (
//                                 <span className={`minesweeper-mine-count-${calculateAdjacentMines(cell.row, cell.col)}`}>
//                                     {calculateAdjacentMines(cell.row, cell.col)}
//                                 </span>
//                             )}
//                             {cell.isRevealed && cell.isMine && <span className="minesweeper-mine">💣</span>}
//                             {cell.isFlagged && !cell.isRevealed && <span className="minesweeper-flag">🚩</span>}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MinesweeperPage;
//       }
//                 }
//             }
//         }

//         return count;
//     };

//     const revealAdjacentCells = (row: number, col: number) => {
//         for (let i = -1; i <= 1; i++) {
//             for (let j = -1; j <= 1; j++) {
//                 const newRow = row + i;
//                 const newCol = col + j;

//                 if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS) {
//                     const cell = board[newRow][newCol];

//                     if (!cell.isRevealed && !cell.isFlagged) {
//                         cell.isRevealed = true;

//                         if (calculateAdjacentMines(newRow, newCol) === 0) {
//                             revealAdjacentCells(newRow, newCol);
//                         }
//                     }
//                 }
//             }
//         }
//     };

//     const handleCellRightClick = (event: React.MouseEvent, row: number, col: number) => {
//         event.preventDefault();

//         if (gameOver) return;

//         const newBoard = [...board];
//         newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
//         setBoard(newBoard);
//     };

//     return (
//         <div className="minesweeper-board">
//             {board.map((row, rowIndex) => (
//                 <div key={rowIndex} className="minesweeper-row">
//                     {row.map((cell, colIndex) => (
//                         <div
//                             key={colIndex}
//                             className={`minesweeper-cell ${cell.isRevealed ? 'revealed' : ''} ${cell.isFlagged ? 'flagged' : ''}`}
//                             onClick={() => handleCellClick(cell.row, cell.col)}
//                             onContextMenu={(event) => handleCellRightClick(event, cell.row, cell.col)}
//                         >
//                             {cell.isRevealed && !cell.isMine && calculateAdjacentMines(cell.row, cell.col) > 0 && (
//                                 <span className={`minesweeper-mine-count-${calculateAdjacentMines(cell.row, cell.col)}`}>
//                                     {calculateAdjacentMines(cell.row, cell.col)}
//                                 </span>
//                             )}
//                             {cell.isRevealed && cell.isMine && <span className="minesweeper-mine">💣</span>}
//                             {cell.isFlagged && !cell.isRevealed && <span className="minesweeper-flag">🚩</span>}
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MinesweeperPage;
