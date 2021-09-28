import React from 'react';
import { Nav, NavLink, Navbar, Container } from 'react-bootstrap';
import '../styles.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ConsFilm
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbar-nav">
              <NavLink className="ml-5" as={Link} to="/singleshow/id">
                TV Shows
              </NavLink>
              <NavLink as={Link} to="/about">
                About
              </NavLink>
              <NavLink as={Link} to="/posts">
                Posts
              </NavLink>
              <NavLink as={Link} to="/search">
                Search
              </NavLink>
              <NavLink as={Link} to="/login">
                Log In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
