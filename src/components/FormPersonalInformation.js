import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import ButtonDumbMerch from './ButtonDumbMerch';

const FormPersonalInformation = () => {
  return (
    <Row className="g-0">
      <Col md={8}>
        <form>
          <FloatingLabel
            controlId="NameInput"
            label="Name"
            className="mb-3 text-dark p-0"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value="Hasan Romadon"
            />
          </FloatingLabel>
          <Row className="g-2">
            <Col md={6}>
              <FloatingLabel
                controlId="floatingSelect"
                label="Gender"
                className="mb-3 text-dark p-0"
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel
                controlId="floatingDate"
                label="Date"
                className="mb-3 text-dark p-0"
              >
                <Form.Control type="date" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
          </Row>
          <p className="fw-bold">Contact</p>
          <FloatingLabel
            controlId="NameInput"
            label="No Handphone"
            className="mb-3 text-dark p-0"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value="Hasan Romadon"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="NameInput"
            label="Email"
            className="mb-3 text-dark p-0"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value="hsanromadon@gmail.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="NameInput"
            label="Address"
            className="mb-3 text-dark p-0"
          >
            <Form.Control
              as="textarea"
              style={{ height: '100px' }}
              placeholder="address"
              value=""
            />
          </FloatingLabel>
          <div className="d-grid mb-5">
            <ButtonDumbMerch variant="success fw-bold">Save</ButtonDumbMerch>
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default FormPersonalInformation;
