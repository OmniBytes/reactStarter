import React, { Component } from 'react';
import { Link } from 'react-router';

import TopNavbar from './top_navbar';
import SideNavbar from './side_navbar';

export default class App extends Component {
    render() {
        return (
            <div>
                <TopNavbar />

                <div className="container-fluid">

                    <div className="row">

                        <SideNavbar />

                        <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
                            { this.props.children }
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
