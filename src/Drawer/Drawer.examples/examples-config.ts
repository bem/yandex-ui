import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';
import { TPlatform } from '@yandex-int/storybook-with-platforms/lib/platforms';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { configureRootTheme } from '../../Theme';
import { presets } from '../../Theme/presets';

configureRootTheme({ theme: presets.default });

export const EXAMPLE_TOKEN = 'Surface|Drawer/touch-phone';

export const createDecorators = ({ scope }: { scope: TPlatform }) => [createScopeDecorator(scope, 'lego')];

export const parameters = {
    docs: {
        readme: require('../Drawer.md'),
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone6',
    },
};
