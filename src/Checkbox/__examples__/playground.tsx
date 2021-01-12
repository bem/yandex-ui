import React, { useState } from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Checkbox } from '@yandex-lego/components/Checkbox/desktop/bundle';

export const Playground = () => {
    const [checked, setChecked] = useState(false);
    const label = text('label', 'Label');
    const size = select('size', ['m', 's'], 'm') as any;
    const view = select('view', ['default', 'outline', ''], 'default') as any;
    const theme = view === '' ? (select('theme', ['normal', 'pseudo'], 'normal') as any) : null;
    const disabled = boolean('disabled', false);
    const indeterminate = boolean('indeterminate', false) as any;

    return (
        <Checkbox
            theme={theme}
            view={view}
            size={size}
            onChange={() => setChecked(!checked)}
            checked={checked}
            label={label}
            disabled={disabled}
            indeterminate={indeterminate}
        />
    );
};
