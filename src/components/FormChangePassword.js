import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import ButtonDumbMerch from './ButtonDumbMerch';

const FormChangePassword = () => {
  return (
    <Row className="g-0">
      <Col md={8}>
        <form>
          <FloatingLabel
            controlId="NameInput"
            label="Current Password"
            className="mb-3 text-dark p-0"
          >
            <Form.Control type="password" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="newpassword"
            label="New Password"
            className="mb-3 text-dark p-0"
          >
            <Form.Control type="password" placeholder="name@example.com" />
          </FloatingLabel>
          <div className="d-grid mb-5">
            <ButtonDumbMerch variant="success fw-bold">
              Change Password
            </ButtonDumbMerch>
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default FormChangePassword;
