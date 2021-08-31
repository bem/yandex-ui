/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Menu as MenuDesktop } from '../desktop';
import { Menu as MenuTouchPad } from '../touch-pad';
import { Menu as MenuTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', MenuDesktop],
    ['touch-pad', MenuTouchPad],
    ['touch-phone', MenuTouchPhone],
] as const;

const testItems = [
    {
        title: 'test1',
        items: [
            { id: 'item-id-1', value: '1', content: 'Тест1' },
            { id: 'item-id-2', value: '2', content: 'Тест2' },
        ],
    },
    { id: 'item-id-3', value: '3', content: 'test2' },
];

describe.each(platforms)('Menu@%s (ssr)', (_platform, Menu) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Menu items={testItems} className="mix" />);
        }).not.toThrowError();
    });
});
