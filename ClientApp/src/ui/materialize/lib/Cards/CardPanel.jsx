import React from 'react';
import LayoutWrapper from '../Grid/LayoutWrapper';

const WrappedCardPanel = ({ children, ...forwardedProps }) => {
  return (
    <div className="card-panel teal" {...forwardedProps}>
      {children}
    </div>
  );
};

const CardPanel = (props) => {
  return <LayoutWrapper LayoutComponet={WrappedCardPanel} {...props} />;
};

export default CardPanel;
