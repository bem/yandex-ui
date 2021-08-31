/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../../internal/testing';
import { Calendar, MultipleCalendar, RangeCalendar } from '../desktop/bundle';

describe('Calendar@next (ssr)', () => {
    const ssr = createServerRender();

    test('should render correctly [single]', () => {
        const fn = () => ssr(<Calendar />);
        expect(fn).not.toThrowError();
    });

    test('should render correctly [multiple]', () => {
        const fn = () => ssr(<MultipleCalendar />);
        expect(fn).not.toThrowError();
    });

    test('should render correctly [range]', () => {
        const fn = () => ssr(<RangeCalendar />);
        expect(fn).not.toThrowError();
    });
});
