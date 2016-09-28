import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'

import * as actions from '../actions';

class TopNavbar extends Component {

    authButton() {

        if(this.props.authenticated)
        {
            return <button onClick={ () => this.props.authenticate(false) } className="btn btn-primary pull-xs-right">Sign Out</button>;
        }

        return <button onClick={ () => this.props.authenticate(true) } className="btn btn-primary pull-xs-right">Sign In</button>;
    }

    render() {
        return (
            <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">

              <Link to="/" className="navbar-brand">ProjectName</Link>

              { this.authButton() }

              <form className="pull-xs-right">
                  <input type="text" className="form-control" placeholder="Search..." />
              </form>

            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(TopNavbar);
