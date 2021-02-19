/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';

import { usePreventScroll, UsePreventScrollOptions } from '../usePreventScroll';

function Example(props: UsePreventScrollOptions) {
    usePreventScroll(props);

    return <div />;
}

describe('usePreventScroll (ssr)', () => {
    test('должен работать без ошибок в серверном окружении', () => {
        expect(() => renderToString(<Example enabled />)).not.toThrowError();
    });
});
