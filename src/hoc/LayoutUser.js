import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavbarLayout from '../components/NavbarLayout';
import SideNavUser from '../components/SideNavUser';
import Footer from '../components/Footer';
const LayoutUser = ({ children }) => {
  return (
    <>
      <NavbarLayout />
      <Container className="mt-5">
        <Row className="g-0">
          <SideNavUser />
          {children}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default LayoutUser;
