# react-updates

Ease-to-use **React** tool for debugging **redundant re-renders**

![](https://img.shields.io/npm/l/react-updates.svg?style=flat-square)
![](https://img.shields.io/npm/v/react-updates.svg?style=flat-square)
![](https://img.shields.io/bundlephobia/min/react-updates?style=flat-square)

## Motivation

Trying to minimize the number of re-renders in our components using `PureComponent` or `React.memo`, developers spend a lot of time debugging redundant re-renders

`react-updates` is designed to simplify this process

![](https://img.shields.io/badge/built%20with-love-yellow?style=for-the-badge&color=fe7d37)
![](https://img.shields.io/badge/makes%20people-smile-yellow?style=for-the-badge&color=389ad5)

## Getting started

[![](https://img.shields.io/badge/sandbox-demo-yellow?style=for-the-badge&logo=codesandbox&color=389ad5)](https://codesandbox.io/s/react-updates-zm830)

```bash
npm i --save-dev react-updates
# or using yarn
yarn add --dev react-updates
```

```javascript
// src/index.js
import { setDebuggerSettings } from 'react-updates';

setDebuggerSettings({
  disabled: process.env.NODE_ENV === 'production',
});
```

```javascript
import { useDebugger } from 'react-updates';

const View = React.memo((props) => {
  useDebugger('View', props);
  return <div style={props.styles}>{props.content}</div>;
});

const App = () => {
  const [, setValue] = useState('');
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <View
        // < ❗ > causes re-rendering
        styles={{ width: '100%', display: 'flex' }}
        content="Example use react-updates"
      />
    </div>
  );
};
```

<p align='center'>
    <img width='680px' src='https://raw.githubusercontent.com/multum/react-updates/master/docs/component-styles.png'/>
</p>

## Using a class component

```javascript
import { debugComponentUpdate } from 'react-updates';

class View extends PureComponent {
  componentDidUpdate(prevProps) {
    debugComponentUpdate(View, prevProps, this.props);
  }
  // ...
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
