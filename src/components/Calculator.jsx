import React, { Component } from 'react';
import Numbers from "./Keypad";
import Operators from "./Result"

import './Calculator.css';

const symbols = ['+', '-', '*', '/'];
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: '0',
			prevNum: '0'
		};
	}

	clearCalc = () => {
		this.setState({
			display: '0',
			prevNum: ''
		});
	}

	updateCalc = (newDisplay) => {
		this.setState({
			display: newDisplay
		});
	}

	handleClick = (e) => {
		let val = e.target.getAttribute('value');

		if (nums.includes(val)) {
			this.handleNumber(val);
		} else {
			this.handleOperator(val);
		}
	}

	handleCalculation = () => {
		let evaluated = eval(this.state.display);
		if (!Number.isInteger(evaluated)) {
			let arr = evaluated.toString().split('.');
			if (arr[1].length > 4) {
				evaluated.toFixed(4);
			}
		}
		this.setState({
			display: evaluated,
			prevNum: evaluated
		});
	}

	handleNumber = (val) => {
		let currDisplay = this.state.display;
		let lastChar = currDisplay[currDisplay.length - 1];
		let numArr = currDisplay.match(/[\.\d]+/g);
		// remove first zero
		while (currDisplay[0] === '0') {
			currDisplay = currDisplay.slice(1);
		}
		// prevent extra zeros
		if (currDisplay.length > 1 && lastChar === '0' && val === '0') {
			val = '';
			// prevent multiple '.' in a row
		} else if (lastChar === '.' && val === '.') {
			val = '';
			// adds a zero if starting with a '.'
		} else if (symbols.includes(lastChar) && val === '.') {
			currDisplay += '0';
		} else if (numArr[numArr.length - 1].includes('.') && val === '.') {
			val = '';
		}

		currDisplay = currDisplay + val;
		this.updateCalc(currDisplay);
	}

	handleOperator = (val) => {
		let currDisplay = this.state.display;
		let lastChar = currDisplay[currDisplay.length - 1];

		if (lastChar === '.') {
			currDisplay += '0';
		}
		while (symbols.includes(lastChar) && val !== '-') {
			currDisplay = currDisplay.slice(0, -1);
			lastChar = currDisplay[currDisplay.length - 1];
		}
		currDisplay = currDisplay + val;
		this.updateCalc(currDisplay);
	}

	render() {
		return (
			<div className="grid">
				<div id="display"><p>{this.state.display}</p></div>
				<div id="clear" onClick={this.clearCalc}>
					<div className="clearAC">AC</div>
				</div>
				<Numbers click={this.handleClick} />
				<Operators click={this.handleClick} />
				<div id="equals" onClick={this.handleCalculation}>
					<div className="equal">=</div>
				</div>
			</div>
		);
	}
}

export default Calculator;

// class Calculator extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			inputString: '',
// 			lastChar: ''
// 		};
// 	}

// 	handleClear = () => {
// 		this.setState({
// 			inputString: ''
// 		});
// 	};

// 	handleInput = (e) => {
// 		const { inputString, lastChar } = this.state;
// 		const { value } = e.target;
// 		const regex = /(\d*\.\d+\.)|\.{2,}|\+{2,}|-{2,}|\*{2,}|^[*/]|^00|[+\-\/*]0{2}/g;

// 		// const operatorRegex = /[*/\-+]/;
// 		// tests whether a operator is the last character in inputString
// 		// const operatorLast = /[x+‑/]/;
// 		const double = /[^0-9.]/g;
// 		console.log(inputString + value);
// 		if (!regex.test(inputString + value)) {
// 			// if (double.test(inputString + value)) {
// 			// 	for (let i = 0; i < lastChar.length; i++) {
// 			// 		this.setState({
// 			// 			inputString: inputString[i] + lastChar[i]  + value[i]
// 			// 		});
// 			// 	}
// 			// 	console.log('last char' + lastChar + "value" + value);
// 			// } else {
// 				this.setState({
// 					inputString: inputString + value
// 				});
// 				console.log('handleInput ' + inputString + ' L ' + value + "lastChar: " + lastChar);
// 			}
// 		// }
// 	};

// 	handleEquals = () => {
// 		this.setState({
// 			inputString: eval(this.state.inputString)
// 		});
// 	};

// 	render() {
// 		return (
// 			<div className="container">
// 				<div id="display">
// 					<p>{this.state.inputString === ''  ? '0' : this.state.inputString }</p>
// 				</div>
// 				<div className="padContainer">
// 					<div className="firstLine">
// 						<button className="triple" onClick={this.handleClear} id="clear">
// 							AC
// 						</button>
// 						<button value="/" onClick={this.handleInput} id="divide">
// 							/
// 						</button>
// 					</div>

// 					<div className="secondLine">
// 						<button value="7" onClick={this.handleInput} id="seven">
// 							7
// 						</button>
// 						<button value="8" onClick={this.handleInput} id="eight">
// 							8
// 						</button>
// 						<button value="9" onClick={this.handleInput} id="nine">
// 							9
// 						</button>
// 						<button value="*" onClick={this.handleInput} id="multiply">
// 							x
// 						</button>
// 					</div>

// 					<div className="thirdLine">
// 						<button value="4" onClick={this.handleInput} id="four">
// 							4
// 						</button>
// 						<button value="5" onClick={this.handleInput} id="five">
// 							5
// 						</button>
// 						<button value="6" onClick={this.handleInput} id="six">
// 							6
// 						</button>
// 						<button value="-" onClick={this.handleInput} id="subtract">
// 							-
// 						</button>
// 					</div>

// 					<div className="fourthLine">
// 						<button value="1" onClick={this.handleInput} id="one">
// 							1
// 						</button>
// 						<button value="2" onClick={this.handleInput} id="two">
// 							2
// 						</button>
// 						<button value="3" onClick={this.handleInput} id="three">
// 							3
// 						</button>

// 						<button value="+" onClick={this.handleInput} id="add">
// 							+
// 						</button>
// 					</div>

// 					<div className="fifthLine">
// 						<button value="." onClick={this.handleInput} id="decimal">
// 							.
// 						</button>
// 						<button value="0" onClick={this.handleInput} id="zero">
// 							0
// 						</button>
// 						<button className="double" value="=" onClick={this.handleEquals} id="equals">
// 							=
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Calculator;
