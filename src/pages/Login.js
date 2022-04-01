import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, FloatingLabel } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import ButtonDumbMerch from '../components/ButtonDumbMerch';
import LinkDumbMerch from '../components/LinkDumbMerch';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Sorry the email is required')
        .email('This is invalid email'),
      password: Yup.string().required('Sorry the password is required'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = ({ email, password }) => {
    const user = users.find((user) => user.email === email);

    if (user) {
      if (user.password === password) {
        if (user.email === 'admin@dumb.com') {
          navigate('/admin/product');
        } else {
          navigate('/');
        }
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  // get registered user
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users') || '[]'));
  }, []);

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
            <LinkDumbMerch active to="/login">
              Login
            </LinkDumbMerch>
            <LinkDumbMerch to="/register">Register</LinkDumbMerch>
          </div>
        </Col>
        <Col md="6">
          <div className="form-container position-relative p-4 w-75 ">
            <img
              className="position-absolute bg-dot-small"
              src="/assets/icons/dot-yellow.svg"
              alt=""
            />
            <p className="fs-4 text fw-bold">Login</p>
            {error && (
              <div className="text-center">
                <p className="text-danger">Wrong Password or Email</p>
              </div>
            )}
            <Form onSubmit={formik.handleSubmit}>
              <FloatingLabel
                controlId="emailInput"
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
                controlId="passwordInput"
                label="Password"
                className="mb-3 text-dark"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...formik.getFieldProps('password')}
                />
                {formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </FloatingLabel>
              <div className="mb-3 text-end">
                <Link className="link-light text-decoration-none " to="/reset">
                  Forgot password?
                </Link>
              </div>
              <ButtonDumbMerch type="submit" full>
                Login
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

export default Login;
