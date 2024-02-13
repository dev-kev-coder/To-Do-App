import React from 'react';
import ButtonWraper from './ButtonWrapper';

const WrappedRasiedButton = ({
  children,
  className = '',
  wrapperClassName,
  ...forwardedProps
}) => {
  const trimmedClassName = `btn ${wrapperClassName + className}`.trim();
  return (
    <a className={trimmedClassName} {...forwardedProps}>
      {children}
    </a>
  );
};

const RaisedButton = (props) => {
  return <ButtonWraper ButtonComponent={WrappedRasiedButton} {...props} />;
};

export default RaisedButton;
