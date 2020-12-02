import React, { useState } from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';

import { Tumbler } from '@yandex-lego/components/Tumbler/desktop/bundle';
import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';

export const Playground = () => {
    const [checked, setChecked] = useState(false);
    const preset = select('theme-preset', presetsKeys, 'default');
    const view = select('view', ['default'], 'default') as any;
    const size = select('size', ['s', 'm', 'l'], 'm') as any;
    const labelBefore = text('labelBefore', '');
    const labelAfter = text('labelAfter', '');
    const disabled = boolean('disabled', false);

    return (
        <div className={cnTheme(presets[preset])}>
            <Tumbler
                size={size}
                disabled={disabled}
                view={view}
                checked={checked}
                onChange={() => setChecked(!checked)}
                labelBefore={labelBefore}
                labelAfter={labelAfter}
            />
        </div>
    );
};
