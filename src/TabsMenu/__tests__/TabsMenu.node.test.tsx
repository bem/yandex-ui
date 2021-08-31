/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { ITabsMenuTabProps } from '../Tab/TabsMenu-Tab';
import { TabsMenu as TabsMenuDesktop } from '../desktop';
import { TabsMenu as TabsMenuTouchPad } from '../touch-pad';
import { TabsMenu as TabsMenuTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', TabsMenuDesktop],
    ['touch-pad', TabsMenuTouchPad],
    ['touch-phone', TabsMenuTouchPhone],
] as const;

const tab1: ITabsMenuTabProps = { id: 'tab1', onClick: jest.fn(), content: 'Поиск' };
const tab2: ITabsMenuTabProps = { id: 'tab2', onClick: jest.fn(), content: <div>Картинки</div> };
const tab3: ITabsMenuTabProps = { id: 'tab3', onClick: jest.fn(), disabled: true, content: 'Видео' };
const tab4: ITabsMenuTabProps = { id: 'tab4', onClick: jest.fn(), content: 'Карты' };
const tabs: ITabsMenuTabProps[] = [tab1, tab2, tab3, tab4];

describe.each(platforms)('TabsMenu@%s (ssr)', (_platform, TabsMenu) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<TabsMenu activeTab={tab1.id} tabs={tabs} className="mix" />);
        }).not.toThrowError();
    });
});
