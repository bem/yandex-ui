import React from 'react';

import { screen, createClientRender } from '../../../internal/testing';
import { DateTimeField } from '../DateTimeField';

describe('DateTimeField', () => {
    const render = createClientRender();

    test('should auto focus first segment', () => {
        render(<DateTimeField autoFocus />);

        const segments = screen.getAllByRole('spinbutton');

        expect(segments[0]).toHaveFocus();
    });
});
