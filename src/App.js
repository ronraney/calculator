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
      justForFun: ['booger','gilbert','lamar']
    }
    this.revenge = this.revenge.bind(this);
    this.numberClick = this.numberClick.bind(this);
  }

  numberClick(e) {
    let input = e.target.value;
    let digit;
    switch(input) {
      case "+/-":
        // attaches or removes the minus sign and updates our numIsNeg state
        if(this.state.numIsNeg) {
          digit = this.state.calcDisplay.slice(1);
          this.setState({numIsNeg : false});
        } else {
          digit = `-${this.state.calcDisplay}`
          this.setState({numIsNeg: true});
        }
        break;
        //adds a period ideally once and only once
      case "." :
        this.state.calcDisplay.indexOf(".")===-1?
        digit = `${this.state.calcDisplay}${input}`:
        digit = `${this.state.calcDisplay}`;
        break;
      default:
    (this.state.calcDisplay!=="THE HALCULATOR"||undefined||null)?
      digit = `${this.state.calcDisplay}${input}`:
      digit = `${input}`;
    }
    //prevents an unnecessary state change
    if(digit!==this.state.calcDisplay) {
      this.setState({
        numInMem: this.state.calcDisplay,
        calcDisplay: digit})
      }
  }
//can be removed note the warnings in the console when it adds items with the same key
revenge(e) {
  let nextStateArray = this.state.justForFun;
  switch(e.target.value) {
    case "booger":
      nextStateArray.push("burp");
      break;
    case "lamar":
      nextStateArray.push("Jane Fonda");
      break
    default:
      nextStateArray.push(e.target.value);
  }
  this.setState({justForFun: nextStateArray});
}

  render() {
    const numbersArray = [1,2,3,4,5,6,7,8,9,".",0,"+/-"]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="display-box" id="title">{this.state.calcDisplay}</h1>
          <ButtonPad
          buttonFunction={this.numberClick}
          typeArray={numbersArray}
          />
          <ButtonPad
          buttonFunction={this.revenge}
          typeArray={this.state.justForFun}
          />

        </header>
      </div>
    );
  }
}

export default App;
