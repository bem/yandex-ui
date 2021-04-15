import React, { FC } from 'react';
import { cnTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

export const LegoThemeProvider: FC = (props) => {
    const { children } = props;

    return <div className={cnTheme(theme)}>{children}</div>;
};
