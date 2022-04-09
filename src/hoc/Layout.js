import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import NavbarLayout from '../components/NavbarLayout';

const Layout = ({ children, playAnimateCart }) => {
  const user = { role: 'user' };

  return (
    <>
      {user.role === 'admin' ? (
        <NavbarAdmin />
      ) : (
        <NavbarLayout playAnimateCart={playAnimateCart} />
      )}
      {children}
    </>
  );
};

export default Layout;
