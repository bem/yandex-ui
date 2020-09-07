import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';
import { TPlatform } from '@yandex-int/storybook-with-platforms/lib/platforms';

import { configureRootTheme } from '../../Theme';
import { presets } from '../../Theme/presets';

configureRootTheme({ theme: presets.default });

export const EXAMPLE_DESKTOP_TOKEN = 'Navigation|TabsMenu/desktop';

export const createDecorators = ({ scope }: { scope: TPlatform }) => [
    createScopeDecorator(scope, 'lego'),
];

export const parameters = {
    docs: {
        readme: require('../TabsMenu.md'),
    },
};
