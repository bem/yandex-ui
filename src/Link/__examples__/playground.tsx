import React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';

export const Playground = () => {
    const children = text('children', 'Yandex');
    const href = text('href', 'https://yandex.ru');
    const view = select('view', ['default', ''], 'default') as any;
    const theme =
        view === ''
            ? (select('theme', ['black', 'ghost', 'normal', 'outer', 'pseudo', 'strong'], 'normal') as any)
            : null;
    const pseudo = boolean('pseudo', false);
    const disabled = boolean('disabled', false);

    return (
        <Link href={href} view={view} theme={theme} pseudo={pseudo} disabled={disabled}>
            {children}
        </Link>
    );
};
