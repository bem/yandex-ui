import React, { createRef } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { Divider } from '../Divider';

describe('Divider', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Divider className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(Divider.displayName).toBe('Divider');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Divider innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать и изменять size через props', () => {
        const { setProps } = render(
            <Divider size={2} data-testid="element">
                content
            </Divider>,
        );

        expect(screen.getByTestId('element').firstChild).toHaveStyle({ height: '2px' });
        expect(screen.getByTestId('element').lastChild).toHaveStyle({ height: '2px' });

        setProps({ size: 10 });

        expect(screen.getByTestId('element').firstChild).toHaveStyle({ height: '10px' });
        expect(screen.getByTestId('element').lastChild).toHaveStyle({ height: '10px' });
    });

    test('должен устанавливать и изменять color через props', () => {
        render(
            <Divider color="#fc0" data-testid="element">
                content
            </Divider>,
        );

        expect(screen.getByTestId('element').firstChild).toHaveStyle({ backgroundColor: 'rgb(255, 204, 0)' });
        expect(screen.getByTestId('element').lastChild).toHaveStyle({ backgroundColor: 'rgb(255, 204, 0)' });
    });

    test('должен изменять тег компонента через props as', () => {
        render(<Divider as="span" data-testid="element" />);

        expect(screen.getByTestId('element').tagName).toBe('SPAN');
    });
});
