import React, { FC, ReactNode, ComponentType } from 'react';

import { getDisplayName } from '../../lib/getDisplayName';
import { useCollection } from '../../useCollection';
import { IMenuProps, MixedItem } from '../Menu';

type WithItemsProps = Pick<IMenuProps, 'items'>;

export interface MenuJsxContentProps {
    /**
     * Список пунктов меню в виде JSX
     */
    children?: ReactNode;

    /**
     * Список пунктов меню в виде массива
     */
    items?: MixedItem[];
}

/**
 * Модификатор, отвечающий за содержимое меню.
 */
export function withJsxContent<T extends WithItemsProps>(WrappedComponent: ComponentType<T>) {
    const WithJsxContent: FC<MenuJsxContentProps & Omit<T, 'items'>> = (props) => {
        const { items, children, ...otherProps } = props;
        const collection = useCollection<MixedItem>(props);

        return <WrappedComponent {...(otherProps as T)} items={items || collection} />;
    };

    WithJsxContent.displayName = `withJsxContent(${getDisplayName(WrappedComponent)})`;

    return WithJsxContent;
}

export * from './Group';
export * from './Item';
