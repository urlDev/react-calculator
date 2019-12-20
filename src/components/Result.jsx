import React, {Component} from 'react';

import "./Result.css";

class Result extends Component {
    render() {

        const { result } = this.props;

        return (
            <div id="display"><p>{result}</p></div>
        );
    }
}

export default Result;