import React, { Component } from 'react';
import Result from "./Result";
import Keypad from "./Keypad";

import './Calculator.css';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

    
	render() {
		return (
			<div className="container">
            <Result/>
            <Keypad/>	
			</div>
		);
	}
}

export default Calculator;
