/**
 * Copyright (c) 2020-present Andrew Vereshchak
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface Props { [key: string] : any }

export function debugUpdates (prevProps: Props | void, nextProps: Props): void

export function useUpdateDebugger (props: Props): void

export function withUpdateDebugger (component): void
