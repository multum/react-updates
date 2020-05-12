import React from 'react';
import * as utils from './utils';
import * as logger from './logger';

const Settings = {
  disabled: false,
};

export const setDebuggerSettings = (settings) => {
  return Object.assign(Settings, settings);
};

export const debugComponentUpdate = (component, prev, next) => {
  if (Settings.disabled) return;

  const displayName = utils.getDisplayName(component);

  if (prev) {
    const allProperties = Object.assign({}, prev, next);
    const changed = Object.keys(allProperties).filter(
      (key) => !Object.is(prev[key], next[key])
    );

    if (changed.length === 0) {
      logger.title('warn', displayName, 'Re-render without changes');
      return;
    }

    logger.title('group', displayName, 'Re-render with changes');
    changed.forEach((key) => {
      const prevValue = utils.stringify(prev[key]);
      const nextValue = utils.stringify(next[key]);
      logger.diff('info', key, prevValue, nextValue);
    });
    console.groupEnd();
  } else {
    logger.title('info', displayName, 'Initial render');
  }
};

export const useDebugger = (component, props) => {
  if (Settings.disabled) return;

  const ref = React.useRef(null);
  React.useEffect(() => {
    debugComponentUpdate(component, ref.current, props);
    ref.current = props;
  });
};
