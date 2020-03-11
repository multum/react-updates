/**
 * Copyright (c) 2020-present Andrew Vereshchak
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as utils from './utils';

export const debugComponentUpdate = (component, prev, next) => {
  const displayName = utils.getDisplayName(component);

  const prepareTitle = title => {
    return [
      `%c${displayName}%c > ${title}`,
      'color: green; font-weight: bold',
      'font-weight: bold',
    ];
  };

  if (prev) {
    const allProperties = Object.assign({}, prev, next);
    const changed = Object.keys(allProperties).filter(
      key => !Object.is(prev[key], next[key])
    );

    if (changed.length === 0) {
      console.warn.apply(null, prepareTitle('Re-render without props changes'));
      return;
    }

    const strings = [];
    const styles = [];

    changed.forEach(key => {
      const prevValue = utils.toString(prev[key]);
      const nextValue = utils.toString(next[key]);
      strings.push(
        `%c "${key}" %c` +
          (prevValue === nextValue ? ' but not visually changed' : '') +
          `\n%c  - ${prevValue} ` +
          `\n%c  + ${nextValue} `
      );
      styles.push(
        `
          background: white;
          color: black;
          line-height: 18px;
          border: 1px solid whitesmoke;
        `,
        `
          background: none;
          line-height: 18px;
          color: #ababab;
          font-size: .85em;
        `,
        `
          background: #ffdce0;
          line-height: 18px;
          color: black
        `,
        `
          background: #cdffd8;
          line-height: 18px;
          color: black;
          margin-bottom: 4px;
        `
      );
    });
    console.group.apply(null, prepareTitle('Re-render with props changes'));
    console.info.apply(null, [strings.join('\n')].concat(styles));
    console.groupEnd();
  } else {
    console.info.apply(null, prepareTitle('Initial render'));
  }
};

export const useDebugger = (component, props) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    debugComponentUpdate(component, ref.current, props);
    ref.current = props;
  });
};
