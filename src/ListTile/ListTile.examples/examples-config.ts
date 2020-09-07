import figmaDecorator from 'storybook-addon-figma-new';
import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';
import { TPlatform } from '@yandex-int/storybook-with-platforms/lib/platforms';

import { configureRootTheme } from '../../Theme';
import { presets } from '../../Theme/presets';

import 'yandex-font/build/browser.css';

configureRootTheme({ theme: presets.default });

export const EXAMPLE_DESKTOP_TOKEN = 'Layout|ListTile/desktop';

export const createDecorators = ({ scope }: { scope: TPlatform }) => [
    figmaDecorator({
        url: 'https://www.figma.com/file/hEYn9nn2bEB2BdDKIWP05X/Yandex-Lego-Web?node-id=7691%3A0',
    }),
    createScopeDecorator(scope, 'lego'),
];

export const parameters = {
    docs: {
        readme: require('../ListTile.md'),
    },
};
