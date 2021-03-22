/**
 * @jest-environment node
 */

import React, { useRef } from 'react';

import { createServerRender } from '../../internal/testing';
import { useFocusTrap, UseFocusTrapOptions } from '../useFocusTrap';

function Fixture(props: Partial<UseFocusTrapOptions>) {
    const { enabled = false, ...other } = props;
    const scopeRef = useRef(null);

    useFocusTrap({ ...other, enabled, scopeRef });

    return <div ref={scopeRef} />;
}

describe('useFocusTrap (ssr)', () => {
    const ssr = createServerRender();

    test('должен работать без ошибок в серверном окружении', () => {
        expect(() => ssr(<Fixture enabled />)).not.toThrowError();
    });
});
