import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ButtonDumbMerch from '../../components/ButtonDumbMerch';
import LayoutUser from '../../hoc/LayoutUser';

const Order = () => {
  return (
    <LayoutUser>
      <Col className="">
        <h5 className="mb-3">My Orders List</h5>
        <div className="mb-3">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class="btn btn-danger">
              All
            </button>
            <button type="button" class="btn btn-outline-danger">
              New Order
            </button>
            <button type="button" class="btn btn-outline-danger">
              Compelte
            </button>
          </div>
        </div>
        {/* order list */}
        <div className="order-list mb-1">
          <Row className="g-0">
            <Col>
              <div className="order-item p-5 py-3">
                <div>
                  <p className="m-0 order-date">Saturday, 14 Juli 2021</p>
                  <p className="order-number">INV/20220402/MPL/2187499652</p>
                  <div className="order-products">
                    <Row className="g-0">
                      <Col
                        className="border-end border-secondary border-1"
                        md={9}
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
                          <Col className="order-item-name" md={4}>
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
                          <Col className="order-item-name" md={4}>
                            <span className="align-middle">
                              Mouse Kerlap Kelip
                            </span>
                          </Col>
                          <Col className="text-end order-price" md={4}>
                            <span className="align-middle">1 x 100.000</span>
                          </Col>
                        </Row>
                      </Col>
                      {/* product total */}
                      <Col>
                        <div className="d-flex flex-column align-items-center">
                          <div className="total-order text-center">
                            <p className="m-0">Total</p>
                            <p className="fw-bold">Rp. 200.000</p>
                          </div>
                          <div className="rating">
                            <img
                              className="me-1"
                              src="/assets/icons/star-fill.svg"
                              alt=""
                            />
                            <img
                              className="me-1"
                              src="/assets/icons/star-fill.svg"
                              alt=""
                            />
                            <img
                              className="me-1"
                              src="/assets/icons/star-fill.svg"
                              alt=""
                            />
                            <img
                              className="me-1"
                              src="/assets/icons/star-fill.svg"
                              alt=""
                            />
                            <img src="/assets/icons/star-empty.svg" alt="" />
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
        <div className="order-list mb-1">
          <Row className="g-0">
            <Col>
              <div className="order-item p-5 py-3">
                <div>
                  <p className="m-0 order-date">Saturday, 14 Juli 2021</p>
                  <p className="order-number">INV/20220402/MPL/2187499652</p>
                  <div className="order-products">
                    <Row className="g-0">
                      <Col
                        className="border-end border-secondary border-1"
                        md={9}
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
                          <Col className="order-item-name" md={4}>
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
                          <Col className="order-item-name" md={4}>
                            <span className="align-middle">
                              Mouse Kerlap Kelip
                            </span>
                          </Col>
                          <Col className="text-end order-price" md={4}>
                            <span className="align-middle">1 x 100.000</span>
                          </Col>
                        </Row>
                      </Col>
                      {/* product total */}
                      <Col>
                        <div className="d-flex flex-column align-items-center">
                          <div className="total-order text-center">
                            <p className="m-0">Total</p>
                            <p className="fw-bold">Rp. 200.000</p>
                          </div>
                          <div>
                            <ButtonDumbMerch sm>Write Review</ButtonDumbMerch>
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
        <div className="order-list mb-1">
          <Row className="g-0">
            <Col>
              <div className="order-item p-5 py-3">
                <div>
                  <p className="m-0 order-date">Saturday, 14 Juli 2021</p>
                  <p className="order-number">INV/20220402/MPL/2187499652</p>
                  <div className="order-products">
                    <Row className="g-0">
                      <Col
                        className="border-end border-secondary border-1"
                        md={9}
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
                          <Col className="order-item-name" md={4}>
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
                          <Col className="order-item-name" md={4}>
                            <span className="align-middle">
                              Mouse Kerlap Kelip
                            </span>
                          </Col>
                          <Col className="text-end order-price" md={4}>
                            <span className="align-middle">1 x 100.000</span>
                          </Col>
                        </Row>
                      </Col>
                      {/* product total */}
                      <Col>
                        <div className="d-flex flex-column align-items-center">
                          <div className="total-order text-center">
                            <p className="m-0">Total</p>
                            <p className="fw-bold">Rp. 200.000</p>
                          </div>
                          <div>
                            <ButtonDumbMerch sm>Write Review</ButtonDumbMerch>
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
    </LayoutUser>
  );
};

export default Order;
