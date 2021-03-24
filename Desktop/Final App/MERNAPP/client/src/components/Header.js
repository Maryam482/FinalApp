import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar variant="dark" className="" style={{backgroundColor:"#28a745!important"}}>
      <Navbar.Brand as={Link} to="/">
        MyStore
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users">
          Customers
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          Register
        </Nav.Link>
        <Nav.Link as={Link} to="/posts">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/addpost">
          New Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Sign in
          </Nav.Link>
        <Nav.Link as={Link} to="/logout">
          Sign out
            </Nav.Link>

      </Nav>
    </Navbar>
  );
};

export default Header;
