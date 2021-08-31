import React, { createRef } from 'react';

import { createClientRender, screen, fireEvent } from '../../internal/testing';
import { Link as LinkCommon } from '../Link';
import { Link as LinkDesktop } from '../desktop';
import { Link as LinkTouchPad } from '../touch-pad';
import { Link as LinkTouchPhone } from '../touch-phone';
import { withPseudo } from '../_pseudo/Link_pseudo';

const platforms = [
    ['desktop', withPseudo(LinkDesktop)],
    ['touch-pad', withPseudo(LinkTouchPad)],
    ['touch-phone', withPseudo(LinkTouchPhone)],
] as const;

describe.each(platforms)('Link@%s', (_platform, Link) => {
    const render = createClientRender();

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { container } = render(
            <Link href="www.test.ru" className="mix">
                Content
            </Link>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен рендерить псевдо ссылку', () => {
        const { container } = render(
            <Link href="www.test.ru" pseudo>
                Content
            </Link>,
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    test('должен быть установлен корректный displayName', () => {
        expect(LinkCommon.displayName).toBe('Link');
    });

    test('должен устанавливать ссылку на корневой DOM элемент', () => {
        const innerRef = createRef<HTMLElement>();
        render(<Link innerRef={innerRef} />);

        expect(innerRef.current).not.toBe(null);
    });

    // TODO: При чем здесь инпут непонятно, но ссылка реально поддерживает controlRef
    test('должен устанавливать ссылку на нативный DOM инпут', () => {
        const controlRef = createRef<HTMLInputElement>();
        render(<Link controlRef={controlRef} />);

        expect(controlRef.current).not.toBe(null);
    });

    test('должен вызывать событие onClick с event при клике', () => {
        const onClick = jest.fn();
        render(<Link role="link" onClick={onClick} />);

        fireEvent.click(screen.getByRole('link'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('должен рендерить Link с вложенным content', () => {
        render(
            <Link>
                <i data-testid="link-content" />
            </Link>,
        );

        expect(screen.getByTestId('link-content')).toBeInTheDocument();
    });

    test('должен установить tabIndex', () => {
        const { setProps } = render(<Link role="link" tabIndex={1} />);

        expect(screen.getByRole('link')).toHaveAttribute('tabindex', '1');

        setProps({ disabled: true });

        expect(screen.getByRole('link')).toHaveAttribute('tabindex', '-1');
    });
});
