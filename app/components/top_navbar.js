import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TopNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">

              <Link to="/" className="navbar-brand">ProjectName</Link>

              <form className="pull-xs-right">
                  <input type="text" className="form-control" placeholder="Search..." />
              </form>
            </nav>
        );
    }
}
