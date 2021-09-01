/**
 * @jest-environment node
 */
import React from 'react';

import { createServerRender } from '../../internal/testing';
import { Link as LinkDesktop } from '../desktop';
import { Link as LinkTouchPad } from '../touch-pad';
import { Link as LinkTouchPhone } from '../touch-phone';
import { withPseudo } from '../_pseudo/Link_pseudo';

const platforms = [
    ['desktop', withPseudo(LinkDesktop)],
    ['touch-pad', withPseudo(LinkTouchPad)],
    ['touch-phone', withPseudo(LinkTouchPhone)],
] as const;

describe.each(platforms)('Link@%s (ssr)', (_platform, Link) => {
    const render = createServerRender();

    test('should render correctly', () => {
        expect(() => {
            render(<Link href="www.test.ru" />);
        }).not.toThrowError();
    });

    test('должен вернуть полный шаблон компонента (snapshot)', () => {
        const { html } = render(
            <Link href="www.test.ru" className="mix">
                Content
            </Link>,
        );

        expect(html).toBe('<a href="www.test.ru" class="Link mix">Content</a>');
    });

    test('должен рендерить псевдо ссылку', () => {
        const { html } = render(
            <Link href="www.test.ru" pseudo>
                Content
            </Link>,
        );

        expect(html).toBe('<a href="www.test.ru" class="Link Link_pseudo">Content</a>');
    });

    test('должен добавлять в ссылку с target="_blank" атрибут rel="noopener"', () => {
        const { html } = render(
            <Link href="www.test.ru" target="_blank" rel="nofollow">
                Content
            </Link>,
        );

        expect(html).toBe('<a href="www.test.ru" target="_blank" rel="nofollow noopener" class="Link">Content</a>');
    });
});
