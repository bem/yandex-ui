import React, { useState } from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Textarea } from '@yandex-lego/components/Textarea/desktop/bundle';

export const Playground = () => {
    const [value, setValue] = useState('');

    const view = select('view', ['default', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const size = select('size', ['m', 's'], 'm') as any;
    const hasClear = boolean('hasClear', false);
    const disabled = boolean('disabled', false);
    const state = select('state', ['error', ''], '') as any;
    const hint = text('hint', '');

    return (
        <Textarea
            disabled={disabled}
            hasClear={hasClear}
            size={size}
            theme={theme}
            view={view}
            placeholder="Placeholder"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onClearClick={() => setValue('')}
            state={state}
            hint={hint}
            rows={0}
        />
    );
};
