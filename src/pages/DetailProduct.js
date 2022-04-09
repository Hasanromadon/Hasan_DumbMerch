import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Layout from '../hoc/Layout';
import ButtonDumbMerch from '../components/ButtonDumbMerch';
import Rating from '../components/Rating';
import productsData from '../data/products';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DetailProduct = (props) => {
  const params = useParams('id');
  const product = productsData.find((product) => product.id === +params.id);
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const handleOrder = () => {
    toast('checkout success!');
    navigate('/');
  };

  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center mb-4  ">
          <Col md={10}>
            <Row className="g-5">
              <Col md={6} className="">
                <div className="image-detail-container">
                  <img src={product.image} alt="images" />
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <h3 className="text-red-primary fs-2 fw-bold">
                    {product.name}
                  </h3>
                  <div className="mb-3">
                    <span>
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
                    </span>
                    <span className="ms-5">(2 Review)</span>
                  </div>
                  <div>
                    <p>{product.description}</p>
                  </div>
                </div>
                <div className="border-top mt-4 pt-4">
                  <p>Stock: {product.stock}</p>
                  <div className=" d-flex justify-content-between align-items-center">
                    <div className="button-add mb-4">
                      <Button
                        variant="none"
                        className="border text-white"
                        onClick={() => setQty(qty - 1)}
                      >
                        -
                      </Button>
                      <span className="mx-4">{qty}</span>
                      <Button
                        variant="none"
                        className="border text-white"
                        onClick={() => setQty(qty + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <p>Rp. {product.price}</p>
                  </div>
                  <div>
                    <ButtonDumbMerch onClick={handleOrder} full>
                      Buy
                    </ButtonDumbMerch>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={10}>
            <div className="border-top">
              <h3 className="my-4">Review</h3>
              <div className="rating mb-4">
                <div>
                  <Rating />
                  <p className="my-3">Barangnya oke sampai dengan baik</p>
                  <p className="text-muted">Hasan Romadon on Mar 26, 2022</p>
                </div>
              </div>
              <div className="rating mb-4">
                <div>
                  <Rating />
                  <p className="my-3">Barangnya oke sampai dengan baik</p>
                  <p className="text-muted">Hasan Romadon on Mar 26, 2022</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default DetailProduct;
