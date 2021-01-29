/**
 * @jest-environment node
 */
import React from 'react';
import { render } from 'enzyme';

import { ButtonGroup } from '../desktop/bundle';
import { Button } from '../../Button/desktop/bundle';

describe('ButtonGroup@dekstop', () => {
    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        expect(
            render(
                <ButtonGroup>
                    <Button />
                </ButtonGroup>,
            ),
        ).toMatchSnapshot();
    });
});
