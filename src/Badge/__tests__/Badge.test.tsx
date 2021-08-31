import React, { createRef } from 'react';

import { createClientRender } from '../../internal/testing';
import { Badge } from '../Badge';

describe('Badge', () => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Badge className="mix" content="1">
                <div />
            </Badge>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(Badge.displayName).toBe('Badge');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLDivElement>();
        render(<Badge innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });
});
