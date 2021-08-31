import React from 'react';

import { createClientRender } from '../../internal/testing';
import { ListTile, cnListTile } from '../ListTile';

describe('ListTile', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<ListTile className="mix">Text</ListTile>);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(ListTile.displayName).toBe(cnListTile());
    });
});
