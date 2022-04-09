import React from 'react';
import {
  Container,
  FloatingLabel,
  Form,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import ButtonDumbMerch from '../../components/ButtonDumbMerch';
import LayoutAdmin from '../../hoc/LayoutAdmin';

const EditProduct = () => {
  return (
    <LayoutAdmin>
      <Col>
        <Row className="justify-content-center">
          <Col md={11}>
            <h4 className="fw-bold mb-5">Add Product</h4>
            <Form>
              <Row>
                <Col md={5}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
              </Row>

              <FloatingLabel
                controlId="floatingInput"
                label="Product Name"
                className="mb-3 text-dark p-0"
              >
                <Form.Control type="text" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingSelect"
                label="Category"
                className="mb-3 text-dark p-0"
              >
                <Form.Select aria-label="Floating label select example">
                  <option value="">Select Category</option>
                  <option value="Mouse">Mouse</option>
                  <option value="USB">USB</option>
                  <option value="Keyboar">Keyboard</option>
                </Form.Select>
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
                <ButtonDumbMerch>Save</ButtonDumbMerch>
              </div>
            </Form>
          </Col>
        </Row>
      </Col>
    </LayoutAdmin>
  );
};

export default EditProduct;
