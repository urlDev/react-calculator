import React, {Component} from 'react';

import "./Result.css";

class Result extends Component {
    render() {

        let { result, newResult } = this.props;

        return (
            <div id="display"><p>{result}{newResult}</p></div>
        );
    }
}

export default Result;