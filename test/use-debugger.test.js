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

  it('disable in settings', () => {
    setDebuggerSettings({ disabled: true });
    render(<DebugComponent />);
    expect(console.calls).toEqual([]);
  });
});
