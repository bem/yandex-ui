import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

import { cnTheme } from '@yandex-lego/components/Theme';
import { presets, presetsKeys } from '@yandex-lego/components/Theme/presets';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
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
        <div className={cnTheme(presets[preset])}>
            <Link href={href} view={view} theme={theme} pseudo={pseudo} disabled={disabled}>
                {children}
            </Link>
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
