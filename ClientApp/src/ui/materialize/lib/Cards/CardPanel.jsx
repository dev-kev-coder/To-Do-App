import React from 'react';
import LayoutWrapper from '../Grid/LayoutWrapper';

const WrappedCardPanel = ({
  children,
  className = 'teal',
  ...forwardedProps
}) => {
  return (
    <div className={`card-panel ${className}`} {...forwardedProps}>
      {children}
    </div>
  );
};

const CardPanel = (props) => {
  return <LayoutWrapper LayoutComponet={WrappedCardPanel} {...props} />;
};

export default CardPanel;
