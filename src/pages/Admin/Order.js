import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import ButtonDumbMerch from '../../components/ButtonDumbMerch';
import LayoutAdmin from '../../hoc/LayoutAdmin';

const OrderAdmin = () => {
  return (
    <LayoutAdmin>
      <Col className="">
        <h5 className="mb-3">My Orders List</h5>
        <div className="mb-3">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class="btn btn-danger">
              New Order
            </button>
            <button type="button" class="btn btn-outline-danger">
              Complete
            </button>
            <button type="button" class="btn btn-outline-danger">
              All
            </button>
          </div>
        </div>
        {/* order list */}
        <div className="order-list mb-1">
          <Row className="g-0">
            <Col>
              <div className="order-item p-5 py-3">
                <div>
                  <p className="order-date">Saturday, 14 Juli 2021</p>
                  <div className="order-products">
                    <Row className="g-0">
                      <Col
                        className="border-end border-secondary border-1"
                        md={8}
                      >
                        {/* product list */}
                        <Row className="g-0 mb-2">
                          <Col md={1}>
                            <div>
                              <img
                                width={40}
                                height={25}
                                src="/assets/images/mouse.png"
                                alt=""
                              />
                            </div>
                          </Col>
                          <Col className="order-item-name ms-1" md={4}>
                            <span className="align-middle">
                              Mouse Kerlap Kelip
                            </span>
                          </Col>
                          <Col md={4} className="text-end order-price">
                            <span className="align-middle ">1 x 50. 000</span>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col md={1}>
                            <div>
                              <img
                                width={40}
                                height={25}
                                src="/assets/images/mouse.png"
                                alt=""
                              />
                            </div>
                          </Col>
                          <Col className="order-item-name ms-1" md={4}>
                            <span className="align-middle m-0">
                              Mouse Kerlap Kelip
                            </span>
                          </Col>
                          <Col className="text-end order-price" md={4}>
                            <span className="align-middle">1 x 100.000</span>
                          </Col>
                        </Row>
                      </Col>
                      {/* product total */}
                      <Col className="px-2">
                        <div className="d-flex flex-column align-items-center">
                          <div className="total-order text-center">
                            <p className="m-0">Total</p>
                            <p className="fw-bold">Rp. 200.000</p>
                          </div>
                          <div>
                            <InputGroup size="sm" className="mb-3">
                              <FormControl
                                placeholder="Tracking Number"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <ButtonDumbMerch id="button-addon2">
                                Deliver
                              </ButtonDumbMerch>
                            </InputGroup>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </LayoutAdmin>
  );
};

export default OrderAdmin;
