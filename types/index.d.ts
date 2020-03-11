/**
 * Copyright (c) 2020-present Andrew Vereshchak
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface Props { [key: string] : any }

export function useDebugger (component: Function | String | null, props: Props): void

export function debugComponentUpdate (component: Function | String | null, prevProps: Props, props: Props): void
