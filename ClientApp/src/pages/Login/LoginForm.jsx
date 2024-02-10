import React from 'react';
import { CardPanel, TextInput } from 'materialize';
import './login.css';

const LoginForm = () => {
  return (
    <CardPanel
      materializeColor="blue-grey lighten-1"
      lrgCols={6}
      medCols={12}
      smCols={12}
      lrgOffsetBy={3}
      style={{ height: '90dvh', marginTop: '3rem', marginBottom: '1rem' }}
    >
      <h2>Login Form</h2>
      <TextInput id="test" label="UserName" />
    </CardPanel>
  );
};

export default LoginForm;
