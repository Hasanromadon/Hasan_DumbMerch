import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavbarLayout = () => {
  const location = useLocation();
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="nav-logo"
            src="/assets/icons/dumbmerch-logo.svg"
            alt="dumbmerch logo"
          />
        </Navbar.Brand>
        <Nav className="me-0">
          <Nav.Link
            as={Link}
            to="/complain"
            className={
              splitLocation[1] === 'complain'
                ? 'fw-bold text-red-primary'
                : 'fw-bold text-white'
            }
          >
            Complain
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/profile"
            className={
              splitLocation[1] === 'profile'
                ? 'fw-bold text-red-primary'
                : 'fw-bold text-white'
            }
          >
            Profile
          </Nav.Link>
          <Nav.Link as={Link} className="fw-bold text-white" to="/login">
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarLayout;
