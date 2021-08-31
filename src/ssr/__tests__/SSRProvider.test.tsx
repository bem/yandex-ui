import React from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { useUniqId } from '../../useUniqId';
import { SSRProvider } from '../index';

const UnitCase = () => <div data-testid="test" id={useUniqId()} />;

describe('SSRProvider', () => {
    const render = createClientRender();

    it('should generate stable ids', () => {
        render(
            <SSRProvider>
                <UnitCase />
                <UnitCase />
            </SSRProvider>,
        );
        const nodes = screen.getAllByTestId('test');

        expect(nodes[0].id).toBe('xuniq-0-1');
        expect(nodes[1].id).toBe('xuniq-0-2');
    });

    it('should generate stable ids with nested SSRProvider', () => {
        render(
            <SSRProvider>
                <SSRProvider>
                    <UnitCase />
                </SSRProvider>
                <SSRProvider>
                    <UnitCase />
                </SSRProvider>
            </SSRProvider>,
        );
        const nodes = screen.getAllByTestId('test');

        expect(nodes[0].id).toBe('xuniq-1-1');
        expect(nodes[1].id).toBe('xuniq-2-1');
    });
});
