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

const initialState = {
  num1: null,
  num2: null,
  notation: null,
  result: null,
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    console.log(this.state);

    if(isNaN(Number(i))) {
      //When i is not a number
      var result = 0
      if(this.state.result != null) {
        //If the last result exists, reset state
        this.setState({num1: this.state.result});
      }

      if(i === "=") {
        if(this.state.notation === "+") {
          result = Number(this.state.num1) + Number(this.state.num2)
        } else if(this.state.notation === "-") {
          result = Number(this.state.num1) - Number(this.state.num2)
        } else if(this.state.notation === "*") {
          result = Number(this.state.num1) * Number(this.state.num2)
        } else if(this.state.notation === "/") {
          result = Number(this.state.num1) / Number(this.state.num2)
        }
        this.setState({result: result, num1: null, num2: null, notation: null})
      } else {
        if(this.state.notation == null) {
          this.setState({notation: i})
        } else {
          this.setState({result: result})
        }
      }

    } else {
      //When i is a number
      if(this.state.result != null) {
        //If the last result exists, reset state
        this.setState({result: null});
      }
      if(this.state.notation == null) {
        var num = this.state.num1 == null ? "" : this.state.num1
        num += String(i)
        this.setState({num1: num})
      } else {
        var num = this.state.num2 == null ? "" : this.state.num2
        num += String(i)
        this.setState({num2: num})
      }
    }
  }

  renderButton(i) {
    return (
      <Button value={i} onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    return (
      <div>
        <div className="display-panel">
          <Formula num1={this.state.num1} notation={this.state.notation} num2={this.state.num2}/>
          <Result result={this.state.result} />
        </div>
        <div className="button-panel">
          <div className="button-row">
            {this.renderButton(1)}
            {this.renderButton(2)}
            {this.renderButton(3)}
            {this.renderButton('+')}
          </div>
          <div className="button-row">
            {this.renderButton(4)}
            {this.renderButton(5)}
            {this.renderButton(6)}
            {this.renderButton('-')}
          </div>
          <div className="button-row">
            {this.renderButton(7)}
            {this.renderButton(8)}
            {this.renderButton(9)}
            {this.renderButton('*')}
          </div>
          <div className="button-row">
            {this.renderButton(0)}
            {this.renderButton('←')}
            {this.renderButton('=')}
            {this.renderButton('/')}
          </div>
        </div>
      </div>
    );
  }
}

function Formula(props) {
  var str = "";
  if(props.num1 != null) {
    str += props.num1
  }
  if(props.notation != null) {
    str += props.notation
  }
  if(props.num2 != null) {
    str += props.num2
  }
  return (
    <div>
      <p>{str}</p>
    </div>
  );
}

function Result(props) {
  return (
    <div>
      <h5>{props.result}</h5>
    </div>
  );
}

function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default App;
