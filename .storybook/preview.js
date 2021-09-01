import 'yandex-font/build/browser.css';
import '@yandex-lego/components/internal/polyfills/common';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage } from '@storybook-addons/docs';

import { withThemeProvider } from './decorators/theme-provider';

export const parameters = {
    docs: {
        container: DocsPage,
    },
    actions: {
        argTypesRegex: '^on[A-Z].*',
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
};

export const decorators = [withThemeProvider];

if (process.env.NODE_ENV !== 'test') {
    // NOTE: Важно, чтобы performance декораторы подключались первыми,
    // чтобы остальные декораторы не вносили коллизий.
    decorators.unshift(require('storybook-addon-performance').withPerformance);
}

if (process.env.NODE_ENV === 'test') {
    // NOTE: Удалить с переездом на SB6
    // Вместо этого использовать параметр layout
    decorators.push(require('./decorators/reset-style').withResetPaddings);
}
