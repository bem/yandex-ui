import React from 'react';
import { render } from '@testing-library/react';

import { SSRProvider } from '../index';
import { useUniqId } from '../../useUniqId';

const UnitCase = () => <div data-testid="test" id={useUniqId()} />;

describe('SSRProvider', () => {
    it('should generate stable ids', function() {
        const { getAllByTestId } = render(
            <SSRProvider>
                <UnitCase />
                <UnitCase />
            </SSRProvider>,
        );
        const nodes = getAllByTestId('test');

        expect(nodes[0].id).toBe('xuniq-0-1');
        expect(nodes[1].id).toBe('xuniq-0-2');
    });

    it('should generate stable ids with nested SSRProvider', function() {
        const { getAllByTestId } = render(
            <SSRProvider>
                <SSRProvider>
                    <UnitCase />
                </SSRProvider>
                <SSRProvider>
                    <UnitCase />
                </SSRProvider>
            </SSRProvider>,
        );
        const nodes = getAllByTestId('test');

        expect(nodes[0].id).toBe('xuniq-1-1');
        expect(nodes[1].id).toBe('xuniq-2-1');
    });
});
