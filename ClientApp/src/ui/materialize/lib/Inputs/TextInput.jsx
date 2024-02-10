import React from 'react';
import LayoutWrapper from '../Grid/LayoutWrapper';

// TODO: be able to accept and display icons
const WrappedInput = ({
  id,
  placeHolder = null,
  type = 'text',
  label = null,
  disabled = false,
  ...forwardedProps
}) => {
  return (
    <div className="input-field" {...forwardedProps}>
      <input
        disabled={disabled}
        className="validate"
        id={id}
        placeholder={placeHolder}
        type={type}
      />
      {label ? <label htmlFor={id}>{label}</label> : null}
    </div>
  );
};

const TextInput = (props) => {
  return <LayoutWrapper LayoutComponet={WrappedInput} {...props} />;
};

export default TextInput;
