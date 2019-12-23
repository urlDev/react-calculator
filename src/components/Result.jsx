import React, { Component } from 'react';

import './Result.css';

const operations = [
    {
    symbol: '/',
    name: 'divide'
  },{
    symbol: '*',
    name: 'multiply'
  },{
    symbol: '-',
    name: 'subtract'
  },
  {
    symbol: '+',
    name: 'add'
  },
  
  
  
]

const Operators = (props) => {
	const numOperations = operations.map((operation) => {
		return (
			<div onClick={(e) => props.click(e)} id={operation.name} value={operation.symbol} className="operation">
				<div className="oper"></div>{operation.symbol}
			</div>
		);
	});

	return numOperations;
};

export default Operators;
