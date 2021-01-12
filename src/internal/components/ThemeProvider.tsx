import React, { FC } from 'react';

import { theme as themeDefault } from '../../Theme/presets/default';
import { theme as themeBrand } from '../../Theme/presets/brand';
import { theme as themeInverse } from '../../Theme/presets/inverse';
import { cnTheme } from '../../Theme';

export const ThemeProvider: FC<{ theme?: string }> = ({ children, theme = 'default' }) => {
    const mapping: Record<string, any> = {
        default: themeDefault,
        brand: themeBrand,
        inverse: themeInverse,
    };
    return <div className={cnTheme(mapping[theme])}>{children}</div>;
};
