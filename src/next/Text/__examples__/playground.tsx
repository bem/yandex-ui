import React from 'react';
import { number, radios, select, text } from '@storybook/addon-knobs';
import { Text, TextAlignValue, TextOverflowValue, TextWeightValue } from '@yandex-lego/components/next/Text/bundle';

import { typographyValues } from './assets';

export const Playground = () => {
    const weight = select<TextWeightValue>('Weight', ['light', 'regular', 'medium', 'bold'], 'light');
    const align = select<TextAlignValue>('Align', ['start', 'center', 'end', 'justify'], 'start');
    const overflow = radios<TextOverflowValue>('Overflow', {
        Ellipsis: 'ellipsis',
        Fade: 'fade',
        FadeHorizontal: 'fade-horizontal',
    });
    const maxLines = number('Max lines', 1, {
        range: true,
        min: 1,
        max: 5,
        step: 1,
    });

    const typography = select('Typography', typographyValues, 'body-long-m');
    const children = text('Content', 'Миссия Яндекса — помогать людям решать задачи и достигать своих целей в жизни.');

    const props = {
        weight,
        align,
        typography,
        children,
        overflow,
        maxLines,
    };

    return (
        <div style={{ backgroundColor: 'var(--color-bg-default)' }}>
            <Text as="div" {...props}>
                {children}
            </Text>
        </div>
    );
};
