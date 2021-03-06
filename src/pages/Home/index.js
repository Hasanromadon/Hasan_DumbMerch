import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import Layout from '../../hoc/Layout';
import productsData from '../../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/actions/productActions';

const Home = () => {
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Layout>
      <Container className="mt-5">
        <h3>Products</h3>
        <Row className="g-3">
          {allProducts.length !== 0 &&
            allProducts.map((product) => (
              <Col md={3} key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
        <div className="divider my-5"></div>
        <section className="mb-5">
          <Link to="/">
            <img
              className="img-fluid"
              src="/assets/images/big-deal-promo.png"
              alt="big deal promotion"
            />
          </Link>
        </section>
        <h3 className="mb-5">Product Promo </h3>
        <Row className="gx-3 gy-5">
          <Col md={3}>
            <img
              className="special-promo d-block"
              src="/assets/images/ramadhan-sale.png"
              alt=""
            />
          </Col>
          {productsData.map((product) => (
            <Col md={3} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
