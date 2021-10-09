import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Calculator
        </p>
      </header>
       <div className="calculator">
         <Board/>
        </div>
    </div>
  );
}

class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="display-panel"></div>
        <div className="button-panel">
          <div className="button-row">
            <div className="button">
              <p>1</p>
            </div>
            <div className="button">
              <p>2</p>
            </div>
            <div className="button">
              <p>3</p>
            </div>
            <div className="button">
              <p>+</p>
            </div>
          </div>
          <div className="button-row">
            <div className="button">
              <p>4</p>
            </div>
            <div className="button">
              <p>5</p>
            </div>
            <div className="button">
              <p>6</p>
            </div>
            <div className="button">
              <p>-</p>
            </div>
          </div>
          <div className="button-row">
            <div className="button">
              <p>7</p>
            </div>
            <div className="button">
              <p>8</p>
            </div>
            <div className="button">
              <p>9</p>
            </div>
            <div className="button">
              <p>*</p>
            </div>
          </div>
          <div className="button-row">
            <div className="button">
              <p>0</p>
            </div>
            <div className="button">
              <p>←</p>
            </div>
            <div className="button">
              <p>=</p>
            </div>
            <div className="button">
              <p>/</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
