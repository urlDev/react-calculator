import React, { Component } from 'react';

import './Calculator.css';

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputString: ''
		};
	}

	handleClear = () => {
		this.setState({
			inputString: ''
		});
	};

	handleInput = (e) => {
		const regex = /(\d*\.\d+\.)|\.{2,}|\+{2,}|-{2,}|\*{2,}|^[*/]|^00|[+\-\/*]0{2}/g;

		// const operatorRegex = /[*/\-+]/;
		// tests whether a operator is the last character in inputString
		// const operatorLast = /([^.0-9]0|^0)$/;
        const double = /[*-/+{2,}]+/g;
		if (!regex.test(this.state.inputString + e.target.value)) {
			// If our 'patterns we don't want ' regex doesn't match anything
			if (!double.test(this.state.inputString)) {
                this.setState({
                    inputString: this.state.inputString + e.target.value,
                    
                })
                console.log("double regex handleinput" + this.state.inputString, e.target.value)
            } else {
                this.setState({
					inputString: this.state.inputString.slice(0, -1) + e.target.value
				});
                console.log("handleInput " + this.state.inputString, e.target.value)
            }
		}
	};

	handleEquals = () => {
            this.setState({
			inputString: eval(`${this.state.inputString}`)
		});
	};

	render() {
		return (
			<div className="container">
				<div id="display">
					<p>{this.state.inputString === '' ? '0' : this.state.inputString}</p>
				</div>
				<div className="padContainer">
					<div className="firstLine">
						<button className="triple" onClick={this.handleClear} id="clear">
							AC
						</button>
						<button value="/" onClick={this.handleInput} id="divide">
							/
						</button>
					</div>

					<div className="secondLine">
						<button value="7" onClick={this.handleInput} id="seven">
							7
						</button>
						<button value="8" onClick={this.handleInput} id="eight">
							8
						</button>
						<button value="9" onClick={this.handleInput} id="nine">
							9
						</button>
						<button value="*" onClick={this.handleInput} id="multiply">
							x
						</button>
					</div>

					<div className="thirdLine">
						<button value="4" onClick={this.handleInput} id="four">
							4
						</button>
						<button value="5" onClick={this.handleInput} id="five">
							5
						</button>
						<button value="6" onClick={this.handleInput} id="six">
							6
						</button>
						<button value="-" onClick={this.handleInput} id="subtract">
							-
						</button>
					</div>

					<div className="fourthLine">
						<button value="1" onClick={this.handleInput} id="one">
							1
						</button>
						<button value="2" onClick={this.handleInput} id="two">
							2
						</button>
						<button value="3" onClick={this.handleInput} id="three">
							3
						</button>

						<button value="+" onClick={this.handleInput} id="add">
							+
						</button>
					</div>

					<div className="fifthLine">
						<button value="." onClick={this.handleInput} id="decimal">
							.
						</button>
						<button value="0" onClick={this.handleInput} id="zero">
							0
						</button>
						<button className="double" value="=" onClick={this.handleEquals} id="equals">
							=
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
