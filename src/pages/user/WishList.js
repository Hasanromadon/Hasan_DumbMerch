import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard';
import productsData from '../../data/products';
import LayoutUser from '../../hoc/LayoutUser';

const WishList = () => {
  return (
    <LayoutUser>
      <Col className="p-0">
        <h5 className="mb-3">My Dumba (Wishlist)</h5>
        <Row className="g-2">
          {productsData.map((product) => (
            <Col md={3} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Col>
    </LayoutUser>
  );
};

export default WishList;
