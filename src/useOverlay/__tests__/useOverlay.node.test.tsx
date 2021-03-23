/**
 * @jest-environment node
 */

import React, { FC } from 'react';

import { createServerRender } from '../../internal/testing';
import { useOverlay, UseOverlayOptions } from '..';

const Overlay: FC<UseOverlayOptions> = (props) => {
    useOverlay(props);

    return null;
};

describe('useOverlay (ssr)', () => {
    const ssr = createServerRender();

    test('должен работать в серверном окружении', () => {
        const { html } = ssr(<Overlay visible essentialRefs={[]} />);

        expect(html).toBe('');
    });
});
