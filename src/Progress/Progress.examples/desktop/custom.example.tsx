import React from 'react';

import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/turbo';

import { Progress } from '@yandex-lego/components/Progress/Progress.bundle/desktop';

export const Custom = () => {
    return (
        <div className={cnTheme(theme)}>
            <Progress value={10} timing="linear" maxValue={100} />
        </div>
    );
};
