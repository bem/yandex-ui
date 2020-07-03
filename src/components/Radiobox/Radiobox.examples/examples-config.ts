import figmaDecorator from 'storybook-addon-figma-new';
import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';
import { TPlatform } from '@yandex-int/storybook-with-platforms/lib/platforms';

import { configureRootTheme } from '../../../Theme';
import { presets } from '../../../Theme/presets';

configureRootTheme({ theme: presets.default });

export const EXAMPLE_DESKTOP_TOKEN = 'Controls|Radiobox/desktop';

export const createDecorators = ({ scope }: { scope: TPlatform }) => [
    figmaDecorator({
        url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=9314%3A13993',
    }),
    createScopeDecorator(scope, 'lego'),
];

export const parameters = {
    docs: {
        readme: require('../Radiobox.md'),
    },
};
