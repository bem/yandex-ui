import React, { createRef } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { Spacer } from '../Spacer';

describe('Spacer', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Spacer className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(Spacer.displayName).toBe('Spacer');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Spacer innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать и изменять all через props', () => {
        const { setProps } = render(<Spacer data-testid="element" all={20} />);

        expect(screen.getByTestId('element')).toHaveStyle({
            padding: '20px',
        });

        setProps({ all: '10rem' });

        expect(screen.getByTestId('element')).toHaveStyle({
            padding: '10rem',
        });
    });

    test('должен устанавливать vertical и horizontal через props', () => {
        render(<Spacer data-testid="element" vertical={10} horizontal={20} />);

        expect(screen.getByTestId('element')).toHaveStyle({
            paddingBottom: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '10px',
        });
    });

    test('должен устанавливать top bottom left и right через props', () => {
        render(<Spacer data-testid="element" top={10} bottom="10px" left="20rem" right={20} />);

        expect(screen.getByTestId('element')).toHaveStyle({
            paddingBottom: '10px',
            paddingLeft: '20rem',
            paddingRight: '20px',
            paddingTop: '10px',
        });
    });

    test('должен изменять тег компонента через props as', () => {
        render(<Spacer as="span" data-testid="element" />);

        expect(screen.getByTestId('element').tagName).toBe('SPAN');
    });
});
