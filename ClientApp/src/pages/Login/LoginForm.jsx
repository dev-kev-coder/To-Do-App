import React from 'react';
import { CardPanel } from 'materialize';

const LoginForm = () => {
  return (
    <CardPanel
      lrgCols={6}
      medCols={12}
      smCols={12}
      lrgOffsetBy={3}
      style={{ height: '90dvh', marginTop: '3rem', marginBottom: '1rem' }}
    >
      <h2>Login Form</h2>
    </CardPanel>
  );
};

export default LoginForm;
