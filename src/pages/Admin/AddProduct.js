import React from 'react';
import {
  Container,
  FloatingLabel,
  Form,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import Layout from '../../hoc/Layout';

const EditProduct = () => {
  return (
    <Layout>
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h4 className="fw-bold mb-5">Add Product</h4>
            <Form>
              <Form.Group controlId="formFile" className="mb-3 col-3">
                <Form.Control
                  type="file"
                  className="upload-file bg-none border-0 text-light "
                />
              </Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Category Name"
                className="mb-3 text-dark p-0"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Description"
                className="mb-3 text-dark p-0"
              >
                <Form.Control
                  as="textarea"
                  style={{ height: '100px' }}
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Price"
                className="mb-3 text-dark p-0"
              >
                <Form.Control
                  type="number"
                  className="form-input-big"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Stock"
                className="mb-3 text-dark p-0"
              >
                <Form.Control
                  type="number"
                  className="form-input-big"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <div className="d-grid mt-5">
                <Button variant="success fw-bold">Save</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default EditProduct;
