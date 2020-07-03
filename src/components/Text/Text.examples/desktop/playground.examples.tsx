import { number, radios, select, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { createDecorators, EXAMPLE_DESKTOP_TOKEN, parameters } from '../example-config';
import { cnTheme } from '../../../../Theme';
import { presets, presetsKeys } from '../../../../Theme/presets';
import { Text, TextAlignValue, TextOverflowValue, TextWeightValue } from '../../Text.bundle/desktop';
import { text as defaultText, typographyValues } from './assets';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const weight = select<TextWeightValue>(
        'Weight',
        [
            'light',
            'regular',
            'medium',
            'bold',
        ],
        'light',
    );
    const align = select<TextAlignValue>(
        'Align',
        [
            'start',
            'center',
            'end',
            'justify',
        ],
        'start',
    );
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

    const typography = select(
        'Typography',
        typographyValues,
        'body-long-m',
    );
    const children = text('Content', defaultText);

    const props = {
        weight,
        align,
        typography,
        children,
        overflow,
        maxLines,
    };

    return (
        <div className={cnTheme(presets[preset])} style={{ backgroundColor: 'var(--color-bg-default)' }}>
            <Text
                as="div"
                {...props}
            >
                { children }
            </Text>
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
