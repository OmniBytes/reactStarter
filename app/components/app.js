import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div>
                React simple starter
                <br />
                <Link to="/">Home</Link>
                <br />
                <Link to="/one">One</Link>
                { this.props.children }
            </div>
    );
    }
}
