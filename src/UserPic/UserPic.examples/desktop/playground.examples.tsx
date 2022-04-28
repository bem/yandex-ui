import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { UserPic } from '@yandex-lego/components/UserPic/desktop/bundle';
import { cnTheme } from '../../../Theme';
import { presets, presetsKeys } from '../../../Theme/presets';

export const Playground = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const size = select('size', ['s', 'm'], 'm') as any;
    const plus = boolean('plus', false) as any;

    return (
        <div className={cnTheme(presets[preset])}>
            <UserPic avatarId="43978/351415393-30646433" size={size} plus={plus} />
            <div style={{ marginLeft: '20px', display: 'inline-block' }}>
                <UserPic avatarId="0/0-0" hasCamera size={size} plus={plus} cameraURLTarget="_blank" />
            </div>
        </div>
    );
};
