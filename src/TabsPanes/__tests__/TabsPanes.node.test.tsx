/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { TabsPanes } from '../TabsPanes';

const pane1 = { id: 'tab1', content: 'Pane 1 Поиск' };
const pane2 = { id: 'tab2', content: 'Pane 2 Картинки' };
const pane3 = { id: 'tab3', content: <div>Pane 3 Маркет</div> };
const panes = [pane1, pane2, pane3];

describe('TabsPanes (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<TabsPanes activePane={pane1.id} panes={panes} className="mix" />);
        }).not.toThrowError();
    });
});
