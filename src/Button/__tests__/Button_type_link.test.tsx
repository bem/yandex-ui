import React from 'react';
import { compose } from '@bem-react/core';

import { createClientRender, screen } from '../../internal/testing';
import { Button as ButtonDesktop } from '../desktop';
import { Button as ButtonTouchPad } from '../touch-pad';
import { Button as ButtonTouchPhone } from '../touch-phone';
import { withTypeLink } from '../_type/Button_type_link';

const platforms = [
    ['desktop', compose(withTypeLink)(ButtonDesktop)],
    ['touch-pad', compose(withTypeLink)(ButtonTouchPad)],
    ['touch-phone', compose(withTypeLink)(ButtonTouchPhone)],
] as const;

describe.each(platforms)('Button_type_link@%s', (_platform, Button) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(<Button type="link" />);

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен при передаче props type=link и url устанавливать href равным url и рендерить тег a', () => {
        render(<Button type="link" url="https://yandex.ru" data-testid="link" />);

        expect(screen.getByTestId('link').tagName).toBe('A');
        expect(screen.getByTestId('link')).toHaveAttribute('href', 'https://yandex.ru');
    });

    test('должен при передаче props targer=_blank и rel устанавливать rel пользователя первым приоритетом', () => {
        render(<Button type="link" target="_blank" rel="author" data-testid="link" />);

        expect(screen.getByTestId('link')).toHaveAttribute('target', '_blank');
        expect(screen.getByTestId('link')).toHaveAttribute('rel', expect.stringContaining('author'));
    });

    test('должен устанавливать tabIndex', () => {
        render(<Button type="link" tabIndex={3} data-testid="link" />);

        expect(screen.getByTestId('link')).toHaveAttribute('tabindex', '3');
    });

    test('должен при передаче props disabled не устанавливать tabIndex и url', () => {
        render(<Button type="link" url="https://yandex.ru" disabled tabIndex={3} data-testid="link" />);

        expect(screen.getByTestId('link')).toHaveAttribute('disabled');
        expect(screen.getByTestId('link')).not.toHaveAttribute('href');
        expect(screen.getByTestId('link')).toHaveAttribute('tabIndex', '-1');
    });
});
