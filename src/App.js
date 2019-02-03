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
    this.addArithmeticOperator = this.addArithmeticOperator.bind(this);
    this.numberClick = this.numberClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }


  numberClick(e) {

    let input = e.target.value;
    let digit;
    switch(input) {

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
    if (digit!==0) {
      if(digit.indexOf("0")===0 && digit.indexOf(".")!==1){
      digit=digit.slice(1);
    }
    }
    //prevents an unnecessary state change
    if(digit!==this.state.calcDisplay) {
      this.setState({
        operator : "",
        calcDisplay: digit,
        numIsNeg : false})
      }
  }



  addArithmeticOperator(e) {
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

 clearDisplay (e) {
   let digit;
   if(e.target.value==="+/-"){
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
     }
    if(e.target.value==="%"){
      digit=Number(this.state.calcDisplay)*.01;
      this.setState({calcDisplay: digit})
 } else {
   this.setState({
     calcDisplay: "0",
   })
 }
 }

  render() {
    const arithmeticOperatorArray = ["+","-","*","/","="]
    const numbersArray = [1,2,3,4,5,6,7,8,9,0,"."]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="display-box" id="title">{this.state.calcDisplay}</h1>
        </header>
          <div id="mainbox">
            <div id="numbers-clear-box">
            <ButtonPad
            type="clear"
            buttonFunction={this.clearDisplay}
            typeArray={["C","+/-","%"]}
            />
            <ButtonPad
            type="numbers"
            buttonFunction={this.numberClick}
            typeArray={numbersArray}
            />
            </div>
          <ButtonPad
          type="basic-arithmetic"
          buttonFunction={this.addArithmeticOperator}
          typeArray={arithmeticOperatorArray}
          />
          </div>

      </div>
    );
  }
}

export default App;
