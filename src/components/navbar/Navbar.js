import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <Navbar role="navigation" expand="md">
      <Navbar.Brand>
        <NavLink to="/" exact role="link">
          Cato Roaldsøy
        </NavLink>
      </Navbar.Brand>

      {/* hamburger menu */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/" exact className="nav-link" role="link">
            Home
          </NavLink>
          <NavLink to="/profile" exact className="nav-link" role="link">
            Profile
          </NavLink>
          <NavLink to="/experience" className="nav-link" role="link">
            Experience
          </NavLink>
          <NavLink to="/projects" className="nav-link" role="link">
            Projects
          </NavLink>
          <NavLink to="/contact" className="nav-link" role="link">
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavMenu;
