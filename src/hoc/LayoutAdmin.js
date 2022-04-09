import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavbarLayout from '../components/NavbarAdmin';
import SideNavAdmin from '../components/SideNavAdmin';

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <NavbarLayout />
      <Container className="mt-5">
        <Row className="g-0">
          <SideNavAdmin />
          {children}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default LayoutAdmin;
