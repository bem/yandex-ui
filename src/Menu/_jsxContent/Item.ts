import { ReactNode } from 'react';

import { CollectionComponent } from '../../useCollection';
import { ItemSimple } from '../Menu';

export interface ItemProps {
    /**
     * Значение, которое соответствует пункту меню. Это значение передается в обработчик, который указан в `onChange`
     */
    value?: any;

    /**
     * Неактивное состояние элемента
     */
    disabled?: boolean;

    /**
     * Идентификатор компонента
     */
    id?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Содержимое элемента
     */
    children?: ReactNode;
}

export const Item: CollectionComponent<ItemProps, ItemSimple> = () => {
    return null;
};

Item.getCollectionNode = function getComponetNode(props): ItemSimple {
    // eslint-disable-next-line camelcase
    const { children, value, disabled, id, ...unsafe_props } = props;

    return {
        id,
        disabled,
        value,
        content: children,
        unsafe_props,
    };
};
