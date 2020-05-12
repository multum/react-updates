export const title = (level, component, title) => {
  return console[level](
    `%c${component}%c > ${title}`,
    'color: green; font-weight: bold',
    'font-weight: bold'
  );
};

export const diff = (level, key, prev, next) => {
  console[level](
    `%c "${key}" %c${prev === next ? ' but not visually changed' : ''}` +
      `\n%c  - %s ` +
      `\n%c  + %s `,

    'background: white;' +
      ' color: black;' +
      ' line-height: 18px;' +
      ' margin-top: 2px',

    'background: none;' +
      ' line-height: 18px;' +
      ' color: #ababab;' +
      ' font-size: .85em',

    'background: #ffdce0;' + ' line-height: 18px;' + ' color: black',
    prev,

    'background: #cdffd8;' +
      ' line-height: 18px;' +
      ' color: black;' +
      ' margin-bottom: 2px',
    next
  );
};
