import React, {useState} from 'react';
import UserLogin from 'components/user/login/Login';
import AdminLogin from 'components/user/login/verifierlogin';
import {Row,Col} from 'react-bootstrap'


/**
 * Stateless component responsible for rendering the login page.
 * */
const UserLoginPage = () => {
  return (
      <Row>


          <Col>
          <div className='page-form page-form--slim'>
                 <UserLogin/>
          </div>
            </Col>
          <Col>
              <div className='page-form page-form--slim'>
                  <AdminLogin/>
              </div>
          </Col>

        </Row>
  )
}

export default UserLoginPage;
