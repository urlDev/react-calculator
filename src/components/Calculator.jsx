import React, { Component } from 'react';
import Result from './Result';
import Keypad from './Keypad';

import './Calculator.css';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: '',
			newResult: ''
		};
	}

	calculate = () => {
		try {
			this.setState({
				// eslint-disable-next-line
				result: eval(this.state.result) + ''
			});
		} catch (e) {
			this.setState({
				result: 'error'
			});
		}
	};

	onClick = (e) => {
		if (e === 'AC') {
			this.setState({
				result: ''
			});
		} else if (e === '=') {
			this.calculate();
		} else {
			this.setState({
				result: this.state.result + e
			});
		}
	};

	render() {
		return (
			<div className="container">
				<Result result={this.state.result} newResult={this.state.newResult} />
				<Keypad onClick={this.onClick} />
			</div>
		);
	}
}

export default Calculator;
