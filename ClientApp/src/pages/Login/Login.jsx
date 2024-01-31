import React from 'react';
import LoginPageContainer from './components/LoginPageContainer';
import LoginForm from './LoginForm';
import './login.css';
import { Row } from '../../ui/materialize';

const Login = () => {
  return (
    <>
      <LoginPageContainer>
        <LoginForm />
      </LoginPageContainer>
    </>
  );
};

export default Login;
