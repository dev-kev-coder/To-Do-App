import React from 'react';
import { CardPanel, TextInput, RaisedButton } from 'materialize';
import './login.css';

const formPanelStyle = {
  height: '50dvh',
  marginTop: '3rem',
  marginBottom: '1rem',
  textAlign: 'center',
};

const LoginForm = () => {
  return (
    <CardPanel
      // className="blue-grey lighten-1"
      className="blue-grey lighten-4"
      xlrgCols={6}
      lrgCols={6}
      medCols={12}
      smCols={12}
      lrgOffsetBy={3}
      xlrgOffsetBy={3}
      style={formPanelStyle}
    >
      <h2>Sign In</h2>
      <TextInput id="form_username" label="User Name" />
      <TextInput id="form_password" label="Password" type="password" />

      <RaisedButton waves>Test</RaisedButton>
      <a class="waves-effect waves-yellow btn">button</a>
      {/* <a class="waves-effect waves-teal btn-flat">Button</a> */}
    </CardPanel>
  );
};

export default LoginForm;
