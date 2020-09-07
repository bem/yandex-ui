import React from 'react';
import { render } from 'enzyme';
import { ListTile, cnListTile } from './ListTile';
import { serverEnvironmentSetup } from '../internal/utils';

describe('ListTiles', () => {
    describe('server environment', () => {
        serverEnvironmentSetup();

        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<ListTile className="mix">Text</ListTile>)).toMatchSnapshot();
        });
    });

    describe('client environment', () => {
        test('должен вернуть полный шаблон компонента (snapshot)', () => {
            expect(render(<ListTile className="mix">Text</ListTile>)).toMatchSnapshot();
        });

        test('должен быть установлен корректный displayName', () => {
            expect(ListTile.displayName).toBe(cnListTile());
        });
    });
});
