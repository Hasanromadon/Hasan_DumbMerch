import React, { useState } from 'react';
import { Table, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ButtonDumbMerch from '../../components/ButtonDumbMerch';
import ModalCategory from '../../components/ModalCategory';
import LayoutAdmin from '../../hoc/LayoutAdmin';

const Category = () => {
  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: '',
    data: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalShow = (action, data) => {
    setShow(true);
    if (action === 'add') {
      setModalMessage({
        title: 'Add Category',
      });
    } else {
      setModalMessage({
        title: 'Edit Category',
        data,
      });
    }
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/admin/category/edit');
  };

  return (
    <>
      <LayoutAdmin>
        <Col>
          <Row className="justify-content-center">
            <Col md={12}>
              <h4 className="">List Category</h4>
              <div className="text-end mb-3">
                <ButtonDumbMerch
                  onClick={() => modalShow('add')}
                  className="me-auto"
                >
                  Add Category
                </ButtonDumbMerch>
              </div>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th className="col-1">No</th>
                    <th className="col-6">Category Name</th>
                    <th className="col-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mouse</td>
                    <td>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-1"
                        onClick={() => modalShow('edit', 'hasan')}
                      >
                        Edit
                      </Button>
                      <Button size="sm" variant="danger">
                        Delete
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Keyboard</td>
                    <td>
                      <Button variant="success" size="sm" className="me-1">
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleShow()}
                        variant="danger"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
        <ModalCategory
          modalMessage={modalMessage}
          show={show}
          handleClose={handleClose}
        />
      </LayoutAdmin>
    </>
  );
};

export default Category;
