import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonDumbMerch = ({ children, full, type, onClick }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      className={`button-dumb-merch ${full ? 'w-100' : 'px-3'}`}
    >
      {children}
    </Button>
  );
};

export default ButtonDumbMerch;
