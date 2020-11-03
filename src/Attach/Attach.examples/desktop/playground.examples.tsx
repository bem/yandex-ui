import React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';

import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';
import { Attach } from '../../Attach.bundle/desktop';

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['l', 'm', 's'], 'm') as any;
    const view = select('view', ['default', ''], 'default') as any;
    const children = text('children', 'Select file');
    const theme = view === '' ? (select('theme', ['normal'], 'normal') as any) : null;
    const hasHolder = boolean('hasHolder', true);
    const holderText = text('holderText', 'no file chosen');
    const disabled = boolean('disabled', false);

    return (
        <div className={cnTheme(presets[preset])}>
            <Attach
                theme={theme}
                size={size}
                view={view}
                disabled={disabled}
                hasHolder={hasHolder}
                holderText={holderText}
            >
                {children}
            </Attach>
        </div>
    );
};

Playground.story = {
    name: 'playground',
};
