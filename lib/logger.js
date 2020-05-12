const titleStyles = [
  'color: green;' + ' font-weight: bold',
  'font-weight: bold',
];

const diffStyles = [
  'background: white;' +
    ' color: black;' +
    ' line-height: 18px;' +
    ' margin-top: 2px',

  'background: none;' +
    ' line-height: 18px;' +
    ' color: #ababab;' +
    ' font-size: .85em',

  'background: #ffdce0;' + ' line-height: 18px;' + ' color: black',

  'background: #cdffd8;' +
    ' line-height: 18px;' +
    ' color: black;' +
    ' margin-bottom: 4px',
];

export const title = (level, component, title) => {
  return console[level].apply(
    null,
    [`%c${component}%c > ${title}`].concat(titleStyles)
  );
};

export const diff = (level, key, prev, next) => {
  console[level].apply(
    null,
    [
      `%c "${key}" %c${prev === next ? ' but not visually changed' : ''}` +
        `\n%c  - ${prev} ` +
        `\n%c  + ${next} `,
    ].concat(diffStyles)
  );
};
