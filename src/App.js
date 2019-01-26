import React, { Component } from 'react';
import NumberPad from './NumberPad';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      calcDisplay: 'THE HALCULATOR',
      numInMem: 0,
      operator: "",

    }
    this.numberClick = this.numberClick.bind(this);
  }

  numberClick(e) {
    const digit = e.target.value;
    this.setState({calcDisplay: digit})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="display-box" id="title">{this.state.calcDisplay}</h1>
          <NumberPad
          numberClick={this.numberClick}
          />

        </header>
      </div>
    );
  }
}

export default App;
