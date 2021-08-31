import React from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { Text, cnText } from '../Text';

describe('Text', () => {
    const render = createClientRender();

    test('должен быть установлен корректный displayName', () => {
        expect(Text.displayName).toBe(cnText());
    });

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Text className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен изменять тэг элемента через as', () => {
        render(<Text as="p" data-testid="element" />);

        expect(screen.getByTestId('element').tagName).toBe('P');
    });

    test.each`
        align
        ${'start'}
        ${'end'}
        ${'center'}
        ${'justify'}
    `('должен добавлять выравнивание `$align` через props', ({ align }) => {
        render(<Text align={align} data-testid="element" />);

        expect(screen.getByTestId('element')).toHaveClass(cnText({ align }));
    });

    test.each`
        overflow
        ${'ellipsis'}
        ${'fade'}
        ${'fade-horizontal'}
    `('должен управлять переполнением `$overflow` через props', ({ overflow }) => {
        render(<Text overflow={overflow} data-testid="element" />);

        expect(screen.getByTestId('element')).toHaveClass(cnText({ overflow }));
    });

    test('должен управлять цветом через props', () => {
        const color = 'primary';
        render(<Text color={color} data-testid="element" />);

        expect(screen.getByTestId('element')).toHaveClass(cnText({ color }));
    });
});
