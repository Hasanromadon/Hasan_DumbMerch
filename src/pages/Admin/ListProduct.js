import React, { useState } from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import MyModal from '../../components/Modal';
import LayoutAdmin from '../../hoc/LayoutAdmin';

const ListProduct = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const navigateAdd = () => {
    navigate('/admin/product/add');
  };

  return (
    <LayoutAdmin>
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h4 className="fw-bold">List Products</h4>
            <div className="text-end mb-3">
              <Button onClick={() => navigateAdd()} className="me-auto">
                Add Product
              </Button>
            </div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th className="col-1">No</th>
                  <th className="col-1">Photo</th>
                  <th className="col-2">Product Name</th>
                  <th>Product Desc</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th className="col-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link className="link-light" to="mouse.jpg">
                      Mouse.jpg
                    </Link>
                  </td>
                  <td> Mouse </td>
                  <td> lorem ipsum mouse ... </td>
                  <td>500.000</td>
                  <td>600</td>
                  <td>
                    <Button variant="success" className="me-3 px-5">
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      className="px-5"
                      onClick={() => handleShow()}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <MyModal show={show} handleClose={handleClose} />
    </LayoutAdmin>
  );
};

export default ListProduct;
