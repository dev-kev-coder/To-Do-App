import React from 'react';
import LayoutWrapper from '../Grid/LayoutWrapper';

const WrappedInput = ({
  id,
  placeHolder = '',
  type = 'text',
  label = '',
  ...forwardedProps
}) => {
  return (
    <div className="input-field" {...forwardedProps}>
      <input
        className="validate"
        id={id}
        placeholder={placeHolder}
        type={type}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const TextInput = (props) => {
  return <LayoutWrapper LayoutComponet={WrappedInput} {...props} />;
};

export default TextInput;
