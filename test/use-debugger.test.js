import React from 'react';
import { useDebugger, setDebuggerSettings } from '../lib';
import * as utils from './utils';
import { render } from '@testing-library/react';

const DebugComponent = (props) => {
  useDebugger(DebugComponent, props);
  return <div>Child component content</div>;
};

DebugComponent.displayName = 'DebugComponent';

describe('useDebugger', () => {
  utils.mockConsole();
  afterEach(() => {
    setDebuggerSettings({ disabled: false });
  });

  it('initial render', () => {
    const styles = { width: '100%' };
    const Component = () => <DebugComponent style={styles} />;
    const { rerender } = render(<Component />);
    rerender(<Component />);
    expect(console.calls).toMatchSnapshot();
  });

  it('normal re-render', () => {
    const { rerender } = render(<DebugComponent content="foo" />);
    rerender(<DebugComponent content="bar" />);
    expect(console.calls).toMatchSnapshot();
  });

  it('redundant re-render', () => {
    const Component = () => <DebugComponent style={{ width: '100%' }} />;
    const { rerender } = render(<Component />);
    rerender(<Component />);
    expect(console.calls).toMatchSnapshot();
  });

  it('redundant re-render without change props', () => {
    const { rerender } = render(<DebugComponent />);
    rerender(<DebugComponent />);
    expect(console.calls).toMatchSnapshot();
  });

  it('settings.disabled', () => {
    setDebuggerSettings({ disabled: true });
    render(<DebugComponent />);
    expect(console.calls).toEqual([]);
  });

  it('circular references', () => {
    const Component = () => {
      const foo = { bar: 0 };
      foo.foo = foo;
      return <DebugComponent foo={foo} />;
    };
    const { rerender } = render(<Component />);
    rerender(<Component />);
    expect(console.calls).toMatchSnapshot();
  });
});
