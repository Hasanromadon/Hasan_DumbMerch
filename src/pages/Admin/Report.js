import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chart from '../../components/Chart';
import LayoutAdmin from '../../hoc/LayoutAdmin';

const Report = () => {
  return (
    <LayoutAdmin>
      <Col>
        <h5>Summary</h5>
        <Row>
          <Col md={4}>
            <div className="monthly-revenue py-2 px-3">
              <small> Revenue April</small>
              <h5 className="mt-1">Rp. 140.000</h5>
            </div>
          </Col>
          <Col md={4}>
            <div className="monthly-revenue py-2 px-3">
              <small>All Revenue</small>
              <h5 className="mt-1">Rp. 20.000.000</h5>
            </div>
          </Col>
        </Row>
        <h5 className="mt-5">Report</h5>
        <Chart />
      </Col>
    </LayoutAdmin>
  );
};

export default Report;
