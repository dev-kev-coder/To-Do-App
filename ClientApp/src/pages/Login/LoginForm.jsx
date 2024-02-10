import React from 'react';
import { CardPanel, TextInput } from 'materialize';
import './login.css';

const LoginForm = () => {
  return (
    <CardPanel style={{ height: '50em', width: '50em' }}>
      <h2>Login Form</h2>
      <TextInput id="test" label="UserName" />

      <div className="input-field col s6">
        <input id="last_name" type="text" className="validate" />
        <label htmlFor="last_name">Last Name</label>
      </div>
    </CardPanel>
  );
};

export default LoginForm;
