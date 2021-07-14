import React from 'react';

import { screen, createClientRender } from '../../../internal/testing';
import { Text as TextCommon } from '../Text';
import { Text as TextDesktop } from '../desktop/bundle';
import { Text as TextTouchPhone } from '../touch-phone/bundle';
import { Text as TextTouchPad } from '../touch-pad/bundle';

const platforms = [
    ['desktop', TextDesktop],
    ['touch-pad', TextTouchPad],
    ['touch-phone', TextTouchPhone],
] as const;

describe('Text@common (next)', () => {
    describe('common environment', () => {
        test('should return correct displayName', () => {
            expect(TextCommon.displayName).toBe('Text');
        });
    });
});

describe.each(platforms)('Text@%s (next)', (_platform, Text) => {
    const render = createClientRender();

    test('should return the full component snapshot', () => {
        render(<Text className="mix" data-testid="text" />);

        expect(screen.getByTestId('text')).toMatchSnapshot();
    });

    test('should change the element tag via `as`', () => {
        render(<Text as="p" data-testid="text" />);

        expect(screen.getByTestId('text').tagName).toBe('P');
    });

    test('should add alignment via props', () => {
        const { setProps } = render(<Text data-testid="text" />);

        ['start', 'end', 'center', 'justify'].forEach((align) => {
            setProps({ align });
            expect(screen.getByTestId('text')).toHaveClass(`Text_align_${align}`);
        });
    });

    test('should manage the overflow via props', () => {
        const { setProps } = render(<Text data-testid="text" />);

        ['ellipsis', 'fade', 'fade-horizontal'].forEach((overflow) => {
            setProps({ overflow });
            expect(screen.getByTestId('text')).toHaveClass(`Text_overflow_${overflow}`);
        });
    });

    test('should manage the color via props', () => {
        render(<Text data-testid="text" color="primary" />);

        expect(screen.getByTestId('text')).toHaveClass('Text_color_primary');
    });
});
