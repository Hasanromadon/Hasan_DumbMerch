import React from 'react';
import NavbarLayout from '../components/NavbarLayout';


const Layout = ({children}) => {

  return (
   <>
    <NavbarLayout/>
        {children}
   </>
  )
}

export default Layout;