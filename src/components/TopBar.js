import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">DevLink Marketplace</Navbar.Brand>
      <Nav className="ml-auto">
        {/* Assuming these are placeholders for future routes */}
        <Nav.Link as={Link} to="/find-dev">Find Dev</Nav.Link>
        <Nav.Link as={Link} to="/find-jobs">Find Jobs</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/register">Create Account</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default TopBar;
