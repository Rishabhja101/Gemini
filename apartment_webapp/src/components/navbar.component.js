import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="title" >Apartment Smart Interface</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Devices</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Device</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}