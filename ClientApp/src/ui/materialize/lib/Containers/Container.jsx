import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, useDefaultPadding, ...forwardedProps }) => {
  return (
    <div className={useDefaultPadding ? 'container' : ''} {...forwardedProps}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  useDefaultPadding: false,
};

export default Container;
