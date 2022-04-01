import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <NavbarAdmin />
      {children}
    </>
  );
};

export default LayoutAdmin;
