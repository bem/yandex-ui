/**
 * @jest-environment node
 */
import React, { createRef } from 'react';

import { createServerRender } from '../../internal/testing';
import { SSRProvider } from '../../ssr';
import { Tooltip as TooltipDesktop, TooltipStateful as TooltipStatefulDesktop } from '../desktop';
import { Tooltip as TooltipTouchPad, TooltipStateful as TooltipStatefulTouchPad } from '../touch-phone';
import { Tooltip as TooltipTouchPhone, TooltipStateful as TooltipStatefulTouchPhone } from '../touch-pad';

const platforms = [
    ['desktop', TooltipDesktop, TooltipStatefulDesktop],
    ['touch-pad', TooltipTouchPad, TooltipStatefulTouchPad],
    ['touch-phone', TooltipTouchPhone, TooltipStatefulTouchPhone],
] as const;

describe.each(platforms)('Tooltip%s (ssr)', (_platform, Tooltip, TooltipStateful) => {
    const render = createServerRender();

    test('should render correctly', () => {
        const fn = () =>
            render(
                <SSRProvider>
                    <Tooltip visible anchor={createRef()}>
                        content
                    </Tooltip>
                </SSRProvider>,
            );

        expect(fn).not.toThrowError();
    });

    test('should render correctly (stateful)', () => {
        const fn = () =>
            render(
                <SSRProvider>
                    <TooltipStateful defaultVisible content="Content">
                        <span>anchor</span>
                    </TooltipStateful>
                </SSRProvider>,
            );

        expect(fn).not.toThrowError();
    });
});
