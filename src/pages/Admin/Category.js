import React from 'react';
import { Container, Table, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LayoutAdmin from '../../hoc/LayoutAdmin';

const Category = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/admin/category/edit');
  };

  return (
    <LayoutAdmin>
      <Container>
        <Row className="justify-content-center">
          <Col md={11}>
            <h4 className="">List Category</h4>
            <div className="text-end mb-3">
              <Button className="me-auto">Add Category</Button>
            </div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th className="col-4">No</th>
                  <th className="col-4">Category Name</th>
                  <th className="col-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mouse</td>
                  <td>
                    <Button
                      variant="success"
                      className="me-3 px-5"
                      onClick={() => handleNavigate()}
                    >
                      Edit
                    </Button>
                    <Button variant="danger" className=" px-5">
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Keyboard</td>
                  <td>
                    <Button variant="success" className="me-3 px-5">
                      Edit
                    </Button>
                    <Button variant="danger" className=" px-5">
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </LayoutAdmin>
  );
};

export default Category;
