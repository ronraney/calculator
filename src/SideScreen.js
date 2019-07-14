import React, { Component } from 'react';
import ButtonPad from './ButtonPad';

import './App.css';

class SideScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.basicExponents = ["x^2", "x^3", "x^y"];
  }

    render() {
      return(
        <div>
        <ButtonPad
        type="basicExponents"
        buttonFunction={this.basicExponentFunc}
        typeArray={this.basicExponents}
        />
        </div>
      );
    }
  }
  export default SideScreen;
