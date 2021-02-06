import { ReactNode } from 'react';

import { CollectionComponent } from '../../useCollection';
import { ItemGroup } from '../Menu';

export interface GroupProps {
    /**
     * Заголовок группы
     */
    label?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Набор элементов в группе
     */
    children?: ReactNode;
}

export const Group: CollectionComponent<GroupProps, ItemGroup> = () => {
    return null;
};

Group.getCollectionNode = function getComponetNode(props, context): ItemGroup {
    // eslint-disable-next-line camelcase
    const { children, label, ...unsafe_props } = props;

    return {
        title: label,
        items: context.createCollection(props.children),
        unsafe_props,
    };
};
