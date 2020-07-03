import figmaDecorator from 'storybook-addon-figma-new';
import { TPlatform } from '@yandex-int/storybook-with-platforms/lib/platforms';
import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';
import { configureRootTheme } from '../../../Theme';
import { presets } from '../../../Theme/presets';

import 'yandex-font/build/browser.css';

configureRootTheme({ theme: presets.default });

export const EXAMPLE_DESKTOP_TOKEN = 'Content|Text/desktop';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createDecorators = ({ scope }: { scope: TPlatform }): any[] => [
    figmaDecorator({
        url: 'https://www.figma.com/file/hEYn9nn2bEB2BdDKIWP05X/Lego-B2C-%E2%80%94-Desktop?node-id=6690%3A54904',
    }),
    createScopeDecorator(scope, 'lego'),
];

export const parameters = {
    docs: {
        readme: require('../Text.md'),
    },
};
