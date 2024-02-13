import React from 'react';

const genericButtonClassBuilder = ({
  wavesOptions,
  btnSize,
  disabled,
  buttonColor,
}) => {
  const classNameArray = [];

  const buttonClassName = getButtonSize(btnSize);

  const wavesClassName = getWavesOptions(wavesOptions);

  classNameArray.push(wavesClassName);

  classNameArray.push(buttonClassName);

  classNameArray.push(buttonColor);

  classNameArray.push(disabled ? 'disabled' : '');

  return classNameArray.join(' ').trim();
};

const getButtonSize = ({ large, small }) => {
  if (large) return 'btn-large';
  else if (small) return 'btn-small';
  else return '';
};

const getWavesOptions = ({ waves, wavesColor = 'light' }) => {
  return waves ? 'waves-effect waves-' + wavesColor : '';
};

const ButtonWraper = ({
  disabled = null,
  waves = false,
  wavesColor = null,
  large = false,
  small = false,
  buttonColor = '',
  ButtonComponent,
  ...forwardedProps
}) => {
  const btnSize = { large, small };

  const wavesOptions = {
    waves,
    wavesColor,
  };

  const buttonWrapperClassName = genericButtonClassBuilder({
    wavesOptions,
    btnSize,
    disabled,
    buttonColor,
  });

  return (
    <ButtonComponent
      wrapperClassName={buttonWrapperClassName}
      {...forwardedProps}
    />
  );
};

export default ButtonWraper;
