import React from 'react';
import PropTypes from 'prop-types';

const LoginPageContainer = ({ children, ...forwardedProps }) => {
  return (
    <div className="login-page-container" {...forwardedProps}>
      {children}
    </div>
  );
};

LoginPageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginPageContainer;
