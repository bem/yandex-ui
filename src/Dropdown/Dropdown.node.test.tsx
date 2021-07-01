/**
 * @jest-environment node
 */
import React from 'react';
import { render } from 'enzyme';
import { Dropdown } from './desktop';
import { Button } from '../Button/desktop/bundle';

describe('Dropdown@dekstop', () => {
    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        expect(
            render(
                <Dropdown content={<div>Test</div>}>
                    <Button />
                </Dropdown>,
            ),
        ).toMatchSnapshot();
    });
});
