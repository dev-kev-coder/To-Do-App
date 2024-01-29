import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, useDefaultPadding }) => {
  return <div className={useDefaultPadding ? 'container' : ''}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  useDefaultPadding: false,
};

export default Container;
