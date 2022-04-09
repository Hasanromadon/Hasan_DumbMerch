import React, { useState } from 'react';
import { Col, Form, Row, Tab, Tabs } from 'react-bootstrap';
import LayoutUser from '../../hoc/LayoutUser';
import ButtonDumbMerch from '../../components/ButtonDumbMerch';
import FormPersonalInformation from '../../components/FormPersonalInformation';
import FormChangePassword from '../../components/FormChangePassword';

const UserSetting = () => {
  const [key, setKey] = useState('personal-info');
  return (
    <LayoutUser>
      <Col className="p-0">
        <h5 className="mb-3">My Profile</h5>
        <Row className="g-0">
          <Col className="me-4" md={2}>
            <div>
              <Form>
                <img
                  className="mb-1"
                  width={'100%'}
                  src="/assets/images/profile.png"
                  alt=""
                />
                <ButtonDumbMerch full>Edit Photo</ButtonDumbMerch>
              </Form>
            </div>
          </Col>
          <Col>
            <Tabs
              id="tab-profile"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-4 tab-profile"
            >
              <Tab eventKey="personal-info" title="Personal Information">
                <FormPersonalInformation />
              </Tab>
              <Tab eventKey="security" title="Security">
                <FormChangePassword />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Col>
    </LayoutUser>
  );
};

export default UserSetting;
