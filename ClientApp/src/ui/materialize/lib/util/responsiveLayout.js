const getGridLayout = ({ smCols, medCols, lrgCols, xlrgCols }) => {
  return `col s${smCols} m${medCols} l${lrgCols} xl${xlrgCols}`;
};

const getMappedClassNames = (offsetByOptions, mapper) => {
  const offSetClassNames = [];

  Object.entries(offsetByOptions).forEach(([key, value]) => {
    const mappedClassName = mapper[key];
    offSetClassNames.push(value !== null ? `${mappedClassName}-${value}` : '');
  });

  return offSetClassNames.join(' ');
};

const combineClassNames = (...args) => {
  const delimiter = args.pop();

  if (typeof delimiter !== 'string') {
    throw Error('Delimiter must be a string');
  }

  const classNames = [];

  args.forEach((arg) => {
    if (Array.isArray(arg)) classNames.push(...arg);
    else if (typeof arg === 'string') classNames.push(arg);
    else throw Error('Arguements must be either an Array, series of strings');
  });

  return classNames.join(delimiter);
};

export { getGridLayout, getMappedClassNames, combineClassNames };
