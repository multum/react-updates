/**
 * Copyright (c) 2020-present Andrew Vereshchak
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

const _displayName = 'UpdateDebugger';
const _prefix = `[ ${_displayName} ] `;

const _toString = value => {
  if (typeof value === 'function') {
    return value.toString();
  }
  return JSON.stringify(value);
};

export const debugUpdates = (prev, next) => {
  if (prev) {
    const changed = Object.keys({ ...prev, ...next }).filter(
      key => !Object.is(prev[key], next[key])
    );

    if (changed.length === 0) {
      console.info(
        _prefix + '%cComponent re-render without props updates',
        'color: red; line-height: 18px'
      );
      return;
    }

    const strings = [];
    const styles = [];

    changed.forEach(key => {
      strings.push(
        `%c  '${key}'  \n` +
          `%c\t- ${_toString(prev[key])} \n` +
          `%c\t+ ${_toString(next[key])} `
      );
      styles.push(
        'background: white; color: black; line-height: 20px',
        'background: #ffdce0; line-height: 18px; color: black',
        'background: #cdffd8; line-height: 18px; color: black'
      );
    });

    console.info(
      _prefix + '%cComponent re-render with updates:\n' + strings.join('\n'),
      'color: green; line-height: 20px',
      ...styles
    );
  } else {
    console.info(
      _prefix + '%cInitial component render',
      'color: green; line-height: 20px'
    );
  }
};

export const useUpdateDebugger = props => {
  const ref = React.useRef(null);
  debugUpdates(ref.current, props);
  ref.current = props;
};

export const withUpdateDebugger = Component => {
  const Debugger = props => {
    useUpdateDebugger(props);
    return React.createElement(Component, { ...props });
  };
  Debugger.displayName = _displayName;
  return Debugger;
};
