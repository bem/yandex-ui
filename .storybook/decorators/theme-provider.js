import React from 'react';
import { select } from '@storybook/addon-knobs';

import { cnTheme, configureRootTheme } from '../../src/Theme';
import { presets, presetsKeys } from '../../src/Theme/presets';
import { useParams } from '../../src/internal/utils/parseQueryString';

// NOTE: Устанавливаем тему по умолчанию глобально, чтобы стили у попапа не ломались
configureRootTheme({ theme: presets.default });

export const withThemeProvider = (Story) => {
    // IE11 не умеет в object destructing (кто бы мог подумать)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams();
    const tokens = params.tokens || 'default';
    const className = cnTheme(presets[select('theme', presetsKeys, tokens)]);

    return (
        <div className={className}>
            <Story />
        </div>
    );
};
