import React, { Component } from 'react';

import './Keypad.css';

class Keypad extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="padContainer">
				<div className="firstLine">
					<button className="triple" name="AC" onClick={(e) => this.props.onClick(e.target.name)} id="clear">
						AC
					</button>
					<button name="/" onClick={(e) => this.props.onClick(e.target.name)} id="divide">
						/
					</button>
				</div>

				<div className="secondLine">
					<button name="7" onClick={(e) => this.props.onClick(e.target.name)} id="seven">
						7
					</button>
					<button name="8" onClick={(e) => this.props.onClick(e.target.name)} id="eight">
						8
					</button>
					<button name="9" onClick={(e) => this.props.onClick(e.target.name)} id="nine">
						9
					</button>
					<button name="*" onClick={(e) => this.props.onClick(e.target.name)} id="multiply">
						x
					</button>
				</div>

				<div className="thirdLine">
					<button name="4" onClick={(e) => this.props.onClick(e.target.name)} id="four">
						4
					</button>
					<button name="5" onClick={(e) => this.props.onClick(e.target.name)} id="five">
						5
					</button>
					<button name="6" onClick={(e) => this.props.onClick(e.target.name)} id="six">
						6
					</button>
					<button name="-" onClick={(e) => this.props.onClick(e.target.name)} id="subtract">
						-
					</button>
				</div>

				<div className="fourthLine">
					<button name="1" onClick={(e) => this.props.onClick(e.target.name)} id="one">
						1
					</button>
					<button name="2" onClick={(e) => this.props.onClick(e.target.name)} id="two">
						2
					</button>
					<button name="3" onClick={(e) => this.props.onClick(e.target.name)} id="three">
						3
					</button>

					<button name="+" onClick={(e) => this.props.onClick(e.target.name)} id="add">
						+
					</button>
				</div>

				<div className="fifthLine">
					<button name="." onClick={(e) => this.props.onClick(e.target.name)} id="decimal">
						.
					</button>
					<button name="0" onClick={(e) => this.props.onClick(e.target.name)} id="zero">
						0
					</button>
					<button className="double" name="=" onClick={(e) => this.props.onClick(e.target.name)} id="equals">
						=
					</button>
				</div>
			</div>
		);
	}
}

export default Keypad;
