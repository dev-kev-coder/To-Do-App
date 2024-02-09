const getGridLayout = ({ smCols, medCols, lrgCols, xlrgCols }) => {
  return `col s${smCols} m${medCols} l${lrgCols} xl${xlrgCols}`;
};

const getMappedClassNames = (values, mapper) => {
  const classNames = [];

  Object.entries(values).forEach(([key, value]) => {
    const mappedClassName = mapper[key];

    if (value) classNames.push(`${mappedClassName}${value}`);
  });

  return classNames.join(' ');
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

  const className = classNames.join(delimiter).trim();

  return className !== '' ? `col ${className}` : className;
};

export { getGridLayout, getMappedClassNames, combineClassNames };
