/**
 * Copyright (c) 2020-present Andrew Vereshchak
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const _defaultDisplayName = 'Unknown';

export const toString = value => {
  if (typeof value === 'function') {
    return value.toString();
  }
  return JSON.stringify(value);
};

export const isNil = value => value === null || value === undefined;

export const getDisplayName = component => {
  if (isNil(component)) {
    return _defaultDisplayName;
  } else if (typeof component === 'string') {
    return component || _defaultDisplayName;
  } else {
    return component.displayName || component.name || _defaultDisplayName;
  }
};
