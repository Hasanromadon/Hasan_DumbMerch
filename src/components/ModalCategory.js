import React from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import ButtonDumbMerch from './ButtonDumbMerch';

const ModalCategory = ({ show, handleClose, modalMessage }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="form-container border-dark ">
          <Modal.Title className="text-primary-red fs-bold">
            {modalMessage.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="form-container fs-bold">
          <FloatingLabel
            controlId="categoryInput"
            label="Category Name"
            className="mb-3 text-dark p-0"
          >
            <Form.Control
              type="text"
              placeholder="category"
              value={modalMessage.data}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className="form-container border-dark">
          <ButtonDumbMerch onClick={handleClose}>Save Changes</ButtonDumbMerch>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCategory;
