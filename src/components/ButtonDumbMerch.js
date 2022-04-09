import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonDumbMerch = ({ children, full, type, sm, onClick }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      className={`button-dumb-merch ${full ? 'w-100' : 'px-3'} ${
        sm ? 'btn-sm' : ''
      }`}
    >
      {children}
    </Button>
  );
};

export default ButtonDumbMerch;
