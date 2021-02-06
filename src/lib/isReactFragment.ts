import { Fragment, isValidElement, ReactElement, ReactNode } from 'react';

/**
 * Проверяет, является ли узел реакт-фрагментом.
 *
 * @example
 * if (isReactFragment(node)) {
 *   ...
 * }
 */
export function isReactFragment(node: ReactNode): node is ReactElement<{ children?: ReactNode }> {
    return isValidElement(node) && node.type === Fragment;
}
