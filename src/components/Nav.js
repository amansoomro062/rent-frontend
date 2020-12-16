import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Nav extends Component {



    render () {

        return (
            
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <div className="navbar-brand d-flex align-items-center">
              
            <Link to="/" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
              <strong>Rent Management</strong>
            </Link>
              
            </div>
          </div>
        </div>
      </header>
        );
    }

}

export default Nav;