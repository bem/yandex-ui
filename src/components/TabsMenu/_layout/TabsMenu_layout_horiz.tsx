import React from 'react';
import { withBemMod } from '@bem-react/core';

import { ITabsMenuProps, cnTabsMenu } from '../TabsMenu';
import './TabsMenu_layout_horiz.css';

export interface ITabsMenuLayoutHorizProps {
    /**
     * Расположение вкладок.
     */
    layout?: 'horiz';
}

/**
 * Модификатор, отвечающий за расположение вкладок.
 * @param {ITabsMenuLayoutHorizProps} props
 */
export const withLayoutHoriz = withBemMod<ITabsMenuLayoutHorizProps, ITabsMenuProps>(
    cnTabsMenu(),
    { layout: 'horiz' },
    (TabsMenu) => (props) => <TabsMenu {...props} orientation="horizontal" />,
);
