import React, { useState } from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';
import { Icon } from '@yandex-lego/components/Icon/bundle';

export const Playground = () => {
    const [value, setValue] = useState('');
    const view = select('view', ['default', 'material', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'websearch'], 'normal') as any) : null;
    const size = theme !== 'websearch' ? (select('size', ['m', 's'], 'm') as any) : null;
    const pin = select(
        'pin',
        [
            '',
            'brick-brick',
            'brick-clear',
            'brick-round',
            'clear-brick',
            'clear-clear',
            'clear-round',
            'round-brick',
            'round-clear',
            'round-round',
        ],
        '',
    ) as any;
    const type = select('type', ['text', 'password', 'number'], 'text');
    const hasClear = boolean('hasClear', false);
    const disabled = boolean('disabled', false);
    const state = select('state', ['error', ''], '') as any;
    const hint = text('hint', '');
    const leftIcon = boolean('leftIcon', false);
    const rightIcon = boolean('rightIcon', false);

    let variant;
    let label;
    if (view === 'material') {
        variant = select('variant', ['filled', 'outlined', ''], '') as any;
        label = text('label', 'Label');
    }

    return (
        <Textinput
            variant={variant}
            disabled={disabled}
            theme={theme}
            size={size}
            view={view}
            pin={pin}
            hasClear={hasClear}
            placeholder="Placeholder"
            value={value}
            type={type}
            onChange={(event) => setValue(event.target.value)}
            onClearClick={() => setValue('')}
            state={state}
            hint={hint}
            label={label}
            iconLeft={leftIcon ? <Icon size="xs" glyph="type-cross-websearch" /> : undefined}
            iconRight={rightIcon ? <Icon size="ns" glyph="type-cross-websearch" /> : undefined}
        />
    );
};
