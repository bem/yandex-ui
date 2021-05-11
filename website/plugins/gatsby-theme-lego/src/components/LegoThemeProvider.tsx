import React, { FC } from 'react';
import { cnTheme, configureRootTheme } from '@yandex-lego/components/Theme';
import { theme } from '@yandex-lego/components/Theme/presets/default';

configureRootTheme({ theme });

export const LegoThemeProvider: FC = (props) => {
    const { children } = props;

    return <div className={cnTheme(theme)}>{children}</div>;
};
