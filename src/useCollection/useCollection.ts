import { Children, FC, isValidElement, ReactElement, ReactNode, useMemo } from 'react';

import { isReactFragment } from '../lib/isReactFragment';

interface CollectionContext {
    createCollection<T>(nodes: ReactNode): T[];
}

export interface CollectionComponent<P = {}, T = unknown> extends FC<P> {
    getCollectionNode(props: P, context: CollectionContext): T;
}

function isCollectionElement<T = {}>(node: ReactNode): node is ReactElement<T, CollectionComponent<T>> {
    if (isValidElement(node)) {
        const { type } = node;

        return typeof type === 'function' && typeof (type as CollectionComponent).getCollectionNode === 'function';
    }

    return false;
}

function createCollection<T>(nodes: ReactNode): T[] {
    const result: T[] = [];
    const context: CollectionContext = { createCollection };

    Children.forEach(nodes, (node) => {
        if (isReactFragment(node)) {
            result.push(...createCollection<T>(node.props.children));
        } else if (isCollectionElement(node)) {
            result.push(node.type.getCollectionNode(node.props, context) as T);
        } else if (node) {
            throw new Error('Unknown element of the children');
        }
    });

    return result;
}

/**
 * Реакт-хук для создания коллекций из `children`
 * с помощью виртуальных компонентов.
 *
 * @param props - свойства компонента
 *
 * @example
 * const collection = useCollection({ children });
 */
export function useCollection<T>(props: { children?: ReactNode }): T[] {
    const { children } = props;

    return useMemo(() => {
        return createCollection(children);
    }, [children]) as T[];
}
