import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black fs-bold">Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black fs-bold">
          Are you sure want to delete?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
