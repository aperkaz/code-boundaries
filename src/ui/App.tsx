import React from "react";

import { actions, useAppDispatch, useAppSelector } from "../store";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const result = useAppSelector((s) => s.calculator.result);

  const [nth, setNth] = React.useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎉 This is the code-boundaries demo 🎉</h1>
        Nth number:
        <input
          value={nth}
          type="number"
          onChange={(e) => setNth(parseInt(e.target.value))}
        ></input>
        <div className="App-row">
          <button
            className="App-button"
            onClick={() => dispatch(actions.calculateFibonacciNumber(nth))}
          >
            fibonnacy
          </button>
          <button
            className="App-button"
            onClick={() => dispatch(actions.calculatePellNumber(nth))}
          >
            pell
          </button>
        </div>
        <h4>Result: {result}</h4>
      </header>
    </div>
  );
}

export default App;
