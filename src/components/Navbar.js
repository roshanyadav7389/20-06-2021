/** @format */

import React from "react";
import swan from "../images/swan.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

//import  Form  from 'react-bootstrap';
// import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className=' navbar navbar-expand-lg navbar-dark'>
        <a className=' navbar-brand' href='localhost:6060'>
          <Link exact to='/'>
            <img
              src={swan}
              style={{ width: 80, marginTop: -10 }}
              alt='ssism'
            />
          </Link>
        </a>
        <ul>
          <li>
            <Link to='/Registration'>Registration</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
          <li>
            <Link to='/DocumentUpload'>upload document</Link>
          </li>
          <li>
            <Link to='/Logout'>Logout</Link>
          </li>
        </ul>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
      
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 ml-5 text-uppercase font-weight-bold">
            <li className="nav-item active" >
              <NavLink className="nav-link active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signUp">signUp</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/greating">Greating</NavLink>
            </li>
         
            <li className="nav-item">
              <NavLink className="nav-link" to="/covid">covid-19</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/toDo">to-do</NavLink>
            </li>
              </ul>

          </div>
          </div>
      </nav> */}
    </>
  );
};
export default Navbar;
