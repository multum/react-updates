export const stringify = (value) => {
  const type = typeof value;
  if (type === 'function' || type === 'symbol') {
    return value.toString();
  }

  if (isSet(value) || isMap(value)) {
    value = Array.from(value);
  } else if (isWeakSet(value) || isWeakMap(value)) {
    return Object.prototype.toString.call(value);
  }

  let cache = [];
  const result = JSON.stringify(value, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.includes(value)) return;
      cache.push(value);
    }
    return value;
  });
  cache = null;

  return result;
};

export const isNil = (value) => value === null || value === undefined;

export const isSet = (target) =>
  Object.prototype.toString.call(target) === '[object Set]';

export const isMap = (target) =>
  Object.prototype.toString.call(target) === '[object Map]';

export const isWeakSet = (target) =>
  Object.prototype.toString.call(target) === '[object WeakSet]';

export const isWeakMap = (target) =>
  Object.prototype.toString.call(target) === '[object WeakMap]';

export const getDisplayName = (component) => {
  const defaultDisplayName = 'Unknown';
  if (isNil(component)) {
    return defaultDisplayName;
  } else if (typeof component === 'string') {
    return component || defaultDisplayName;
  } else {
    return component.displayName || component.name || defaultDisplayName;
  }
};
