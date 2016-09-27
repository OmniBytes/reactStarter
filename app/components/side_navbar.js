import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideNavbar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/one">Page one</Link>
                    </li>

                </ul>
            </div>
        );
    }
}
