/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Button } from '../../Button/desktop/bundle';
import { ButtonGroup } from '../desktop/bundle';

describe('ButtonGroup (ssr)', () => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <ButtonGroup>
                    <Button />
                </ButtonGroup>,
            );
        }).not.toThrowError();
    });
});
