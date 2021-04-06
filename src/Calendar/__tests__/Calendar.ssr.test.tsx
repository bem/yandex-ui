/**
 * @jest-environment node
 */

import React from 'react';

import { createServerRender } from '../../internal/testing';
import { unstable_Calendar as Calendar } from '../desktop/bundle';

describe('Calendar (ssr)', () => {
    const ssr = createServerRender();

    test('should render correctly [day]', () => {
        const fn = () => ssr(<Calendar type="day" />);
        expect(fn).not.toThrowError();
    });

    test('should render correctly [year]', () => {
        const fn = () => ssr(<Calendar type="month" />);
        expect(fn).not.toThrowError();
    });

    test('should render correctly [month]', () => {
        const fn = () => ssr(<Calendar type="year" />);
        expect(fn).not.toThrowError();
    });
});
