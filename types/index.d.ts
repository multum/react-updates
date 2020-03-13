/**
 * Copyright (c) 2020-present Andrew Vereshchak
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
export function useDebugger(
  component: Function | string | null,
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
export function debugComponentUpdate(
  component: object | string | null,
  prevProps: object,
  props: object
): void;
