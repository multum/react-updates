import { ComponentType, FunctionComponent } from 'react';

interface DebuggerSettings {
  disabled?: boolean;
}

/**
 * @example
 * import { setDebuggerSettings } from 'react-updates';
 * setDebuggerSettings({
 *   disabled: process.env.NODE_ENV === 'production'
 * });
 */
export function setDebuggerSettings(
  settings: DebuggerSettings
): DebuggerSettings;

/**
 * @example
 * import { useDebugger } from 'react-updates';
 * const ViewComponent = (props) => {
 *   useDebugger('View', props);
 *   return '...'
 * };
 */
export function useDebugger<P = {}>(
  component: FunctionComponent<P> | string,
  props: object
): void;

/**
 * @example
 * import { debugComponentUpdate } from 'react-updates';
 * class View extends Component {
 *   componentDidUpdate(prevProps) {
 *     debugComponentUpdate('View', prevProps, this.props);
 *   }
 *   render() {
 *     return '...'
 *   }
 * };
 */
export function debugComponentUpdate<P = {}>(
  component: ComponentType<P> | string,
  prevProps: object,
  props: object
): void;
