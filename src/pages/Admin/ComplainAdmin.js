import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import LayoutAdmin from '../../hoc/LayoutAdmin';
const ComplainAdmin = () => {
  return (
    <LayoutAdmin>
      <Container>
        <Row className="complain-page">
          <Col className="border-end border-secondary" md={4}>
            <div className="d-flex align-items-center mt-4">
              <img
                width={50}
                height={50}
                className="rounded-circle user-profile"
                src="/assets/images/profile.png"
                alt=""
              />
              <div className="ms-3">
                <span>hasan_aja</span>
                <p className="m-0 text-secondary">
                  Hello Admin, I Need Your Help
                </p>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <Row className="g-0">
              <Col md={12} className="">
                <div className="messages-container">
                  <div className=" message-left-container mb-2">
                    <div className="d-flex">
                      <img
                        width={50}
                        height={50}
                        className="rounded-circle user-profile"
                        src="/assets/images/profile.png"
                        alt=""
                      />
                      <div className="message-left ms-4 p-2 rounded">
                        <div className="position-absolute polygon-chat">
                          <img src="/assets/icons/poligon.svg" alt="" />
                        </div>
                        <p className="m-0">Hello Admin, I need your help!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {/* sen document */}
              <Col md={12} className="send-message">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Send Message" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </LayoutAdmin>
  );
};

export default ComplainAdmin;
