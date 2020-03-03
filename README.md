# react-updates

**React** tool for debugging **redundant re-renders**

![](https://img.shields.io/npm/l/react-updates.svg?style=flat-square)
![](https://img.shields.io/npm/v/react-updates.svg?style=flat-square)
![](https://img.shields.io/bundlephobia/min/react-updates?style=flat-square)

> _Do not use in production_

## Motivation

Trying to minimize the number of re-renders in our components using `PureComponent` or `React.memo`, developers spend a lot of time debugging redundant re-renders

`react-updates` is designed to simplify this process

![](https://forthebadge.com/images/badges/built-with-love.svg)
![](https://forthebadge.com/images/badges/makes-people-smile.svg)

## Getting started

> [_CodeSandbox_](https://codesandbox.io/s/react-updates-zm830)

```bash
npm i --save-dev react-updates
# or using yarn
yarn add --dev react-updates
```

## Using hook

```javascript
import React from 'react';
import { useUpdateDebugger } from 'react-updates';

const Counter = props => {
  useUpdateDebugger(props);
  return <div>Current value: {props.value}</div>;
};
```

## Using HOC

```javascript
import React from 'react';
import { withUpdateDebugger } from 'react-updates';

const Counter = props => {
  return <div>Current value: {props.value}</div>;
};

export default withUpdateDebugger(Counter);
```

## Using debug function

```javascript
import React, { Component } from 'react';
import { debugUpdates } from 'react-updates';

class Counter extends Component {
  componentDidUpdate(prevProps) {
    debugUpdates(prevProps, this.props);
  }

  render() {
    return <div>Current value: {this.props.value}</div>;
  }
}
```

## Contributing

#### Issue

Suggestions for introducing new features, bug reports, and any other suggestions can be written in the issue. They will be reviewed immediately.

#### Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope for **react-updates**. Generally always have a related issue with discussions for whatever you are including.

Please also provide a **test plan**, i.e. specify how you verified that your addition works.

## License

**react-updates** is open source software [licensed as MIT](https://github.com/multum/react-updates/blob/master/LICENSE).
