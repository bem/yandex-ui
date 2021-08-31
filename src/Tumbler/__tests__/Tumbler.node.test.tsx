/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Tumbler as TumblerDesktop } from '../desktop';
import { Tumbler as TumblerTouchPad } from '../touch-pad';
import { Tumbler as TumblerTouchPhone } from '../touch-phone';

const platforms = [
    ['desktop', TumblerDesktop],
    ['touch-pad', TumblerTouchPad],
    ['touch-phone', TumblerTouchPhone],
] as const;

const noop = () => null;

describe.each(platforms)('Tumbler@%s (ssr)', (_platform, Tumbler) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(
                <Tumbler
                    checked={false}
                    onChange={noop}
                    tabIndex={1}
                    name="switch"
                    id="static-id"
                    className="unit-mixin"
                    labelBefore="labelBefore"
                    labelAfter="labelAfter"
                />,
            );
        }).not.toThrowError();
    });
});
