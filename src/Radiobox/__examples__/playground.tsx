import React, { useState } from 'react';
import { select, boolean, object } from '@storybook/addon-knobs';
import { Radiobox, RadioOptionProps } from '@yandex-lego/components/Radiobox/desktop/bundle';

export const Playground = () => {
    const [value, setValue] = useState('a');

    const size = select('size', ['m', 's'], 'm') as any;
    const view = select('view', ['default', 'outline', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'pseudo'], 'normal') as any) : null;
    const options = object<RadioOptionProps[]>('options', [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
        { label: 'Option C (disabled)', value: 'c', disabled: true },
    ]);
    const disabled = boolean('disabled', false);

    return (
        <Radiobox
            disabled={disabled}
            size={size}
            theme={theme}
            view={view}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            options={options}
        />
    );
};
