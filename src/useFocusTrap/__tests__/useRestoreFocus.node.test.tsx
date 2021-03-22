/**
 * @jest-environment node
 */

import React from 'react';

import { createServerRender } from '../../internal/testing';
import { useRestoreFocus, UseRestoreFocusOptions } from '../useRestoreFocus';

function Fixture(props: UseRestoreFocusOptions) {
    useRestoreFocus(props);

    return <div />;
}

describe('useRestoreFocus (ssr)', () => {
    const ssr = createServerRender();

    test('должен работать без ошибок в серверном окружении', () => {
        expect(() => ssr(<Fixture enabled />)).not.toThrowError();
    });
});
