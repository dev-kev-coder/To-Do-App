import React from 'react';
import LayoutWrapper from '../Grid/LayoutWrapper';

// TODO: be able to accept and display icons
const WrappedInput = ({
  id,
  placeHolder = null,
  type = 'text',
  label = null,
  inputStyle = {},
  labelStyle = {},
  helperText = null,
  disabled = false,
  inline = false,
  ...forwardedProps
}) => {
  const inputClassName = inline ? 'input-field inline' : 'input-field';

  return (
    <div className={inputClassName} {...forwardedProps}>
      <input
        disabled={disabled}
        className="validate"
        id={id}
        placeholder={placeHolder}
        type={type}
        style={{ ...inputStyle }}
      />

      {label ? (
        <label style={{ ...labelStyle }} htmlFor={id}>
          {label}
        </label>
      ) : null}

      {helperText ? (
        <span
          className="helper-text"
          data-error="in-correct"
          data-success="correct"
        >
          {helperText}
        </span>
      ) : null}
    </div>
  );
};

const TextInput = (props) => {
  return <LayoutWrapper LayoutComponet={WrappedInput} {...props} />;
};

export default TextInput;
