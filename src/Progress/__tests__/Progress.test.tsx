import React, { createRef } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { Progress } from '../Progress';

describe('Progress', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Progress className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(Progress.displayName).toBe('Progress');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Progress innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать и изменять value через props', () => {
        const { setProps } = render(<Progress value={0.5} data-testid="element" />);

        expect(screen.getByTestId('element').firstChild).toHaveStyle({
            width: '50.00%',
        });

        setProps({ value: 1 });

        expect(screen.getByTestId('element').firstChild).toHaveStyle({
            width: '100%',
        });
    });

    test('должен устанавливать value учитывая maxValue', () => {
        render(<Progress value={50} maxValue={150} data-testid="element" />);

        expect(screen.getByTestId('element').firstChild).toHaveStyle({
            width: '33.33%',
        });
    });

    test('должен устанавливать и изменять timing через props', () => {
        render(<Progress timing="linear" data-testid="element" />);

        expect(screen.getByTestId('element')).toHaveClass('Progress_timing_linear');
    });
});
