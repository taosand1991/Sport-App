import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {NavLink} from 'react-router-dom'



export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className='nav navbar-nav'>
  <NavLink exact={true} activeClassName='active' className="nav-link nav-item" to="/">Home</NavLink>
</div>
  <button className="navbar-toggler collapsed " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    <div className='close-icon py-1'>X</div>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <NavLink activeClassName='active' className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' className="nav-link" to="/team">Team</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='active' className="nav-link" to="/player">Player</NavLink>
      </li>
    </ul>
  </div>
</nav>
</React.Fragment>
        )
    }
}
