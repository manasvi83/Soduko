import './App.css';
import { useState } from 'react';

const initial = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
]

function App() {
  const [sodukoArr, setSudokuArr] = useState(getDeepCopy(initial));

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function onInputChange(e, row, col) {
    var val = parseInt(e.target.value) || 0, grid = getDeepCopy(sodukoArr);
    // input value should range from 1-9 and for empty cell it should be 0
    if ((val === 0 || val >= 1) && (val <= 9)) {
      grid[row][col] = val;
    }

    setSudokuArr(grid);
  }


  return (
    <div className="App">
      <div className="App-header">
        <h3>Sudoku Solver</h3>
        <table>
          <tbody>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                return <tr key={rIndex}  className={(row + 1) %3 === 0 ? 'bBorder' : ''}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                    return <td key={rIndex + cIndex} className={(col + 1) %3 === 0 ? 'rBorder' : ''}>
                      <input value={sodukoArr[row][col] === 0 ? '' : sodukoArr[row][col]}
                        onChange={(e) => onInputChange(e, row, col)}
                        className="cellInput" 
                        disabled={initial[row][col]!==0}
                        />
                    </td>
                  })}
                </tr>
              })
            }

          </tbody>
        </table>
        <div className="buttonContainer">
          <button className="resetButton">Reset</button>
          <button className="solveButton">Solve</button>
          <button className="checkButton">Check</button>
        </div>
      </div>
    </div>
  );
}

export default App;
