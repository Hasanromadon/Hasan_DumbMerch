import React from 'react';
import { Badge, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const SideNavUser = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <Col className="border-end border-dark border-2 me-3" md={3}>
      <div>
        <div className="mb-5 d-flex">
          <img
            width={50}
            className="me-2"
            src="/assets/images/profile.png"
            alt=""
          />
          <div>
            <p className="mb-0 fw-bold">Hasan Romadon</p>
            <div>
              <img width={16} src="/assets/images/badge.svg" alt="" />
              <span className="align-middle ms-2 profile-badge">
                Senior Buyer
              </span>
            </div>
          </div>
        </div>
        <ul className="">
          <li className="bg-transparent border-0 mb-3">
            <Link
              className={
                splitLocation[2] === 'order'
                  ? 'sidenav-link fw-bold text-red-primary'
                  : 'sidenav-link fw-bold'
              }
              to="/profile/order"
            >
              My Order
            </Link>
          </li>
          <li className="bg-transparent border-0 mb-3">
            <Link
              className={
                splitLocation[2] === 'wishlist'
                  ? 'sidenav-link fw-bold text-red-primary'
                  : 'sidenav-link fw-bold'
              }
              to="/profile/wishlist"
            >
              Wishlist <Badge bg="danger">9</Badge>
            </Link>
          </li>
          <li className="bg-transparent border-0 mb-3">
            <Link
              className={
                splitLocation[2] === 'setting'
                  ? 'sidenav-link fw-bold text-red-primary'
                  : 'sidenav-link fw-bold'
              }
              to="/profile/setting"
            >
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default SideNavUser;
