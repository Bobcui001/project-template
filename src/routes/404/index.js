/**
 *  Author: harry.lang
 *  Date: 2017/11/20
 *  Description: Created by harrylang on 2017/11/20.
 */
import React from 'react';

import './style/style.css';
import img from './images/hehe.png';

class NoMatch extends React.Component {
    render() {
        return <div className="no-match">
            <img className="img" src={img} alt="404"/>

            <h3>No match for <code>{this.props.location.pathname}</code></h3>
        </div>;
    }
}

export default NoMatch;
 