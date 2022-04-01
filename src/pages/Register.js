import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, FloatingLabel } from 'react-bootstrap';
import ButtonDumbMerch from '../components/ButtonDumbMerch';
import LinkDumbMerch from '../components/LinkDumbMerch';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Sorry the name is required'),
      email: Yup.string()
        .required('Sorry the email is required')
        .email('This is invalid email'),
      password: Yup.string().required('Sorry the password is required'),
    }),
    onSubmit: (values) => {
      setUser(values);
    },
  });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (user) {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
    } else {
      return;
    }
  }, [user, navigate]);

  return (
    <Container className="auth-container">
      <Row>
        <Col xl md="6">
          <img
            className="auth-logo"
            src="assets/icons/dumbmerch-logo.svg"
            alt=""
          />
          <h3 className="my-3">Easy, Fast and Reliable </h3>
          <p>
            Go shopping for merchandise, just go to dumb merch shopping. the
            biggest merchandise in Indonesia
          </p>
          <div className="mt-5">
            <LinkDumbMerch to="/login">Login</LinkDumbMerch>
            <LinkDumbMerch active to="/register">
              Register
            </LinkDumbMerch>
          </div>
        </Col>
        <Col md="6">
          <div className="form-container position-relative p-4 w-75 ">
            <img
              className="position-absolute bg-dot-small"
              src="/assets/icons/dot-yellow.svg"
              alt=""
            />
            <p className="fs-4 text fw-bold">Register</p>
            <Form onSubmit={formik.handleSubmit}>
              <FloatingLabel
                controlId="nameInput"
                label="Name"
                className="mb-3 text-dark p-0"
              >
                <Form.Control
                  type="text"
                  placeholder="name"
                  {...formik.getFieldProps('name')}
                />
                {formik.errors.name ? (
                  <small className="text-danger">{formik.errors.name}</small>
                ) : null}
              </FloatingLabel>
              <FloatingLabel
                controlId="EmailInput"
                label="Email"
                className="mb-3 text-dark p-0"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  {...formik.getFieldProps('email')}
                />
                {formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </FloatingLabel>
              <FloatingLabel
                controlId="password"
                label="Password"
                className="mb-3 text-dark"
              >
                <Form.Control
                  type="password"
                  placeholder="password"
                  {...formik.getFieldProps('password')}
                />
                {formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </FloatingLabel>
              <ButtonDumbMerch type="submit" full>
                Register
              </ButtonDumbMerch>
            </Form>
            <img
              className="position-absolute bg-dot-big"
              src="/assets/icons/dot-big.svg"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
