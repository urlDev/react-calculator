import React, { Component } from 'react';

import './Keypad.css';

const numbers = [
	{
		num: '7',
		name: 'seven'
	},
	{
		num: '8',
		name: 'eight'
	},
	{
		num: '9',
		name: 'nine'
	},
	{
		num: '4',
		name: 'four'
	},
	{
		num: '5',
		name: 'five'
	},

	{
		num: '6',
		name: 'six'
	},
	{
		num: '1',
		name: 'one'
	},
	{
		num: '2',
		name: 'two'
	},

	{
		num: '3',
		name: 'three'
	},

	{
		num: '.',
		name: 'decimal'
	},

	{
		num: '0',
		name: 'zero'
	}
];

const Numbers = (props) => {
	const numList = numbers.map((num) => {
		return (
			<div id={num.name} className="number" value={num.num} onClick={(e) => props.click(e)}>
				<div className="keys">{num.num}</div>
			</div>
		);
	});
	return numList;
};

export default Numbers;
