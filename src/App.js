import React, { Component } from 'react';
import ButtonPad from './ButtonPad';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      calcDisplay: 'THE HALCULATOR',
      numInMem: 0,
      operator: "",
      numIsNeg: false,

    }
    this.numberClick = this.numberClick.bind(this);
  }

  numberClick(e) {
    let digit;
    (this.state.calcDisplay!=="THE HALCULATOR"||undefined||null)?
      digit = `${this.state.calcDisplay}${e.target.value}`:
      digit = `${e.target.value}`;
    this.setState({
      numInMem: this.state.calcDisplay,
      calcDisplay: digit})
  }

  render() {
    const numbersArray = [1,2,3,4,5,6,7,8,9,".",0,"+/-"]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="display-box" id="title">{this.state.calcDisplay}</h1>
          <ButtonPad
          numberClick={this.numberClick}
          typeArray={numbersArray}
          />

        </header>
      </div>
    );
  }
}

export default App;
