import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ButtonDumbMerch from '../../components/ButtonDumbMerch';
import Layout from '../../hoc/Layout';

const Cart = () => {
  const navigate = useNavigate();
  const handlePay = () => {
    navigate('/payment-success');
  };

  return (
    <Layout>
      <Container>
        <h3 className="text-center my-3">Your shopping cart</h3>
        <Row className="justify-content-md-center mb-4  ">
          <Col md={10}>
            <div className="cart-container p-5">
              {/* reciver */}
              <div className="mb-3">
                <p className="fw-bold">Receiver Information:</p>
                <Row className="g-0 pb-3 receiver">
                  <Col md={3}>
                    <p className="mb-1">Name</p>
                    <p className="mb-1">No. Phone</p>
                    <p className="mb-1">Address</p>
                  </Col>
                  <Col>
                    <p className="mb-1">: Hasan Romadon</p>
                    <p className="mb-1">: 08551188337</p>
                    <p className="mb-1">
                      : Jl. Putri Tunggal, RT 03, RW 07 No.57 Harjamukti,
                      Cimanggis Depok
                    </p>
                  </Col>
                </Row>
              </div>
              {/* product detail */}
              <div>
                <p className="fw-bold">Product Detail:</p>
                {/* product name */}
                <Row>
                  <Col md={1} className="action">
                    <img src="/assets/icons/cross.svg" alt="" />
                  </Col>
                  <Col>img</Col>
                  <Col>product name</Col>
                  <Col className="text-end">1 x 50.000.000</Col>
                </Row>
                <Row>
                  <Col md={1} className="action">
                    <img src="/assets/icons/cross.svg" alt="" />
                  </Col>
                  <Col>img</Col>
                  <Col>product name</Col>
                  <Col className="text-end">1 x 50.000.000</Col>
                </Row>
                <Row className="mt-2">
                  <Col md={10} className="text-end fw-bold">
                    Total
                  </Col>
                  <Col className="text-end fw-bold">10.000.000</Col>
                </Row>
                <div className="text-end pt-4">
                  <ButtonDumbMerch onClick={() => handlePay()}>
                    Pay Now
                  </ButtonDumbMerch>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
