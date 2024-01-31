import React from 'react';
import {
  getGridLayout,
  getMappedClassNames,
  combineClassNames,
} from '../util/responsiveLayout';

/**
 * Todo:
 * memoize calculations
 * set default values (mignt need need to do this just let material css library handle it)
 */
const LayoutWrapper = ({
  LayoutComponet,
  smCols,
  medCols,
  lrgCols,
  xlrgCols,
  smOffsetBy,
  medOffsetBy,
  lrgOffsetBy,
  xlrgOffsetBy,
  smPush,
  medPush,
  lrgPush,
  xlrgPush,
  ...forwardedProps
}) => {
  const gridLayoutClassName = getGridLayout({
    smCols,
    medCols,
    lrgCols,
    xlrgCols,
  });

  const offsetClassNameMapper = {
    smOffsetBy: 'offset-s',
    medOffsetBy: 'offset-m',
    lrgOffsetBy: 'offset-l',
    xlrgOffsetBy: 'offset-xl',
  };

  const gridOffsetClassName = getMappedClassNames(
    {
      smOffsetBy,
      medOffsetBy,
      lrgOffsetBy,
      xlrgOffsetBy,
    },
    offsetClassNameMapper
  );

  const pushClassNameMapper = {
    smPush: 'push-s',
    medPush: 'push-m',
    lrgPush: 'push-l',
    xlrgPush: 'push-xl',
  };

  const gridPushClassName = getMappedClassNames(
    {
      smPush,
      medPush,
      lrgPush,
      xlrgPush,
    },
    pushClassNameMapper
  );

  const layoutClassName = combineClassNames(
    gridLayoutClassName,
    gridOffsetClassName,
    gridPushClassName,
    ' '
  );

  return (
    <div className={layoutClassName}>
      <LayoutComponet {...forwardedProps} />
    </div>
  );
};

export default LayoutWrapper;
