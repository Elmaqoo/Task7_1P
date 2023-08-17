import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">DevLink Marketplace</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#find-dev">Find Dev</Nav.Link>
        <Nav.Link href="#find-jobs">Find Jobs</Nav.Link>
        <Nav.Link href="#login">Login</Nav.Link>
        <Nav.Link href="#create-account">Create Account</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default TopBar;
