import React from 'react';
import {
  getMappedClassNames,
  combineClassNames,
} from '../util/responsiveLayout';

const offsetClassNameMapper = {
  smOffsetBy: 'offset-s',
  medOffsetBy: 'offset-m',
  lrgOffsetBy: 'offset-l',
  xlrgOffsetBy: 'offset-xl',
};

const pushClassNameMapper = {
  smPush: 'push-s',
  medPush: 'push-m',
  lrgPush: 'push-l',
  xlrgPush: 'push-xl',
};

const gridClassNameMapper = {
  smCols: 's',
  medCols: 'm',
  lrgCols: 'l',
  xlrgCols: 'xl',
};

/**
 * Todo:
 * memoize calculations
 * set default values (mignt need need to do this just let material css library handle it)
 */
const LayoutWrapper = ({
  LayoutComponet,
  smCols = 12,
  medCols = 12,
  lrgCols = 12,
  xlrgCols = 12,
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
  const gridLayoutClassName = getMappedClassNames(
    {
      smCols,
      medCols,
      lrgCols,
      xlrgCols,
    },
    gridClassNameMapper
  );

  const gridOffsetClassName = getMappedClassNames(
    {
      smOffsetBy,
      medOffsetBy,
      lrgOffsetBy,
      xlrgOffsetBy,
    },
    offsetClassNameMapper
  );

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
