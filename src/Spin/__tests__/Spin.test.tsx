import React, { createRef } from 'react';

import { createClientRender, screen } from '../../internal/testing';
import { Spin } from '../Spin';

describe('Spin', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Spin className="mix" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(Spin.displayName).toBe('Spin2');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', async () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Spin innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    test('должен устанавливать/удалять модификатор progress при обновлении через props', () => {
        const { setProps } = render(<Spin data-testid="element" />);

        expect(screen.getByTestId('element')).not.toHaveClass('Spin2_progress');

        setProps({ progress: true });

        expect(screen.getByTestId('element')).toHaveClass('Spin2_progress');
    });
});
