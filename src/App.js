import React, { Component } from 'react';
import ButtonPad from './ButtonPad';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      calcDisplay: 'THE HALCULATOR',
      numInMem: "",
      operator: "",
      numIsNeg: false,

    }
    this.addOperator = this.addOperator.bind(this);
    this.numberClick = this.numberClick.bind(this);
    this.allClear = this.allClear.bind(this);
  }


  numberClick(e) {
    if(this.state.calcDisplay.indexOf("0")===1&&this.state.calcDisplay.indexOf(".")!==2){
      this.setState({calcDisplay: this.state.calcDisplay.slice(1)})
    }
    let input = e.target.value;
    let digit;
    switch(input) {
      case "+/-":
        // attaches or removes the minus sign and updates our numIsNeg state
        if(this.state.numIsNeg) {
          digit = this.state.calcDisplay.slice(1);
        return this.setState({
          numIsNeg : false,
          calcDisplay : digit
        });
        } else {
          digit = `-${this.state.calcDisplay}`
        return this.setState({
          numIsNeg: true,
          calcDisplay : digit
        });
        }

        //adds a decimal point ideally once and only once
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
    if (this.state.operator!=='') {
      digit = `${input}`
    }
    //prevents an unnecessary state change
    if(digit!==this.state.calcDisplay) {
      this.setState({
        operator : "",
        calcDisplay: digit,
        numIsNeg : false})
      }
  }



  addOperator(e) {
    let input =  (e.target.value);
    if (this.state.operator!==''||input==="=") {
      let output = this.state.numInMem+this.state.calcDisplay;
      // this.setState({operator : input})
      this.evaluateString(output);
    } else {
      // need to write an exeption for this.state.operator==="="
    this.setState({
      operator : input,
      numInMem : `${this.state.numInMem}${this.state.calcDisplay} ${input} `,
      calcDisplay : this.state.calcDisplay
      })
    }
  }


  //this switch function stands to get enormous...
  evaluateString(string) {
    const evalArray = string.split(" ");
    console.log(evalArray);
    let answer = Number(evalArray[0]);
    for(let i = 0; i<evalArray.length; i++){
      if(isNaN(Number(evalArray[i]))) {
        switch(evalArray[i]) {
          case "+":
            answer+=Number(evalArray[i+1]);
            break;
          case "-":
            answer-=Number(evalArray[i+1]);
            break;
          case "*":
            answer = answer*Number(evalArray[i+1]);
            break;
          case "/":
            answer = answer/Number(evalArray[i+1]);
            break;
          default:
            console.log("What did you do?!?!?!");
        }
      }
    }
    answer = answer.toString();
    this.setState({
      calcDisplay : answer,
      numInMem : ""
    });
 }

 allClear () {
   this.setState({
     calcDisplay: "0",
     numInMem: "",
     operator: "",
     numIsNeg: false,
   })
 }

  render() {
    const operatorArray = ["+","-","*","/","="]
    const numbersArray = [1,2,3,4,5,6,7,8,9,".",0,"+/-"]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="display-box" id="title">{this.state.calcDisplay}</h1>
          <ButtonPad
          buttonFunction={this.allClear}
          typeArray={["AC"]}
          />
          <ButtonPad
          buttonFunction={this.numberClick}
          typeArray={numbersArray}
          />
          <ButtonPad
          buttonFunction={this.addOperator}
          typeArray={operatorArray}
          />

        </header>
      </div>
    );
  }
}

export default App;
