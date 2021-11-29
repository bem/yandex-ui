import React from 'react';

import { screen, createClientRender, fireEvent, installPointerEvent } from '../../../internal/testing';
import { DateTimeRangeField } from '../DateTimeRangeField';

describe('DateTimeRangeField', () => {
    installPointerEvent();
    const render = createClientRender();

    test('should auto focus first segment', () => {
        render(<DateTimeRangeField autoFocus />);

        const segments = screen.getAllByRole('spinbutton');

        expect(segments[0]).toHaveFocus();
    });

    test('should focus next segment after click on dash', () => {
        render(<DateTimeRangeField formatOptions={{ day: '2-digit', month: '2-digit', year: '2-digit' }} />);

        const dash = screen.getAllByRole('presentation')[2];
        const segments = screen.getAllByRole('spinbutton');

        fireEvent.pointerDown(dash);

        expect(segments[3]).toHaveFocus();
    });
});
