import React from 'react';
import LoginPageContainer from './components/LoginPageContainer';
import LoginForm from './LoginForm';
import './login.css';
import { Row } from 'materialize';

const Login = () => {
  return (
    <>
      <LoginPageContainer>
        <Row style={{ height: '100%' }}>
          <LoginForm />
        </Row>
      </LoginPageContainer>
    </>
  );
};

export default Login;
