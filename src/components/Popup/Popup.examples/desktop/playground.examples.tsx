import React, { createRef } from 'react';
import { withKnobs, select, boolean, object, text } from '@storybook/addon-knobs';

import { cnTheme } from '../../../../Theme';
import { presets, presetsKeys } from '../../../../Theme/presets';
import { Popup } from '../../Popup.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

const scopeRef = createRef<HTMLDivElement>();

const allDirections = [
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'top-left',
    'top-center',
    'top-right',
    'right-top',
    'right-center',
    'right-bottom',
    'left-top',
    'left-center',
    'left-bottom',
];

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const visible = boolean('visible', !true);
    const nonvisual = boolean('nonvisual', false) as any;
    const children = text(
        'children',
        'Общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом.',
    ) as any;
    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'clear'], 'normal') as any) : null;
    const position = object('position ', { top: 0, left: 0 }) as any;
    const direction = select('direction', allDirections, 'bottom-center') as any;

    return (
        <div className={cnTheme(presets[preset])} ref={scopeRef} style={{ position: 'relative' }}>
            <Popup
                scope={scopeRef}
                theme={theme}
                view={view}
                direction={direction}
                visible={visible}
                nonvisual={nonvisual}
                position={position}
                style={{ maxWidth: 280 }}
            >
                <div style={{ padding: 16, fontFamily: 'var(--control-font-family)' }}>{children}</div>
            </Popup>
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
