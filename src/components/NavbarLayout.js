import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const NavbarLayout = () => {
  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const handleLogout = () => {
    toast('Logout Success');
    navigate('/login');
  };

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
            to="/cart"
            className={
              splitLocation[1] === 'cart'
                ? 'fw-bold text-red-primary'
                : 'fw-bold text-white'
            }
          >
            Cart
            <Badge className="ms-1" bg="danger">
              1
            </Badge>
          </Nav.Link>
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
            to="/profile/order"
            className={
              splitLocation[1] === 'profile'
                ? 'fw-bold text-red-primary'
                : 'fw-bold text-white'
            }
          >
            Profile
          </Nav.Link>

          <Nav.Link
            onClick={() => handleLogout()}
            className="fw-bold text-white"
          >
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarLayout;
