import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatNumber } from '../utils/numberFormatter';

const ProductCard = ({ product }) => {
  return (
    <Card
      className="shadow-sm"
      style={{ width: '100%', border: 'none', height: '24rem' }}
    >
      <div className="position-relative">
        {product.bestseller && (
          <span className="card-best-seller position-absolute px-2 py-1 rounded-pill">
            Bestseller
          </span>
        )}
        <div className="card-image-container">
          <Card.Img className="card-image" variant="top" src={product.image} />
        </div>
      </div>
      <Card.Body className="product-card-body">
        <Card.Title className="fs-6">
          <Link className="title-product" to={`/detail/${product.id}`}>
            {product.name}
          </Link>
        </Card.Title>
        <div>
          <div>
            <span className="fw-bold fs-6">{formatNumber(product.price)}</span>
            <span className="fw-thin text-light mx-1">|</span>
            <span className="fw-thin text-light card-text-stock">
              Stock: {product.qty}
            </span>
          </div>
          <div>
            <img className="me-1" src="/assets/icons/star-fill.svg" alt="" />
            <img className="me-1" src="/assets/icons/star-fill.svg" alt="" />
            <img className="me-1" src="/assets/icons/star-fill.svg" alt="" />
            <img className="me-1" src="/assets/icons/star-fill.svg" alt="" />
            <img className="me-1" src="/assets/icons/star-empty.svg" alt="" />
          </div>
          <div>{product.desc && product.desc.substring(1, 50)}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
