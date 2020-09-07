import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';
import { TPlatform } from '@yandex-int/storybook-with-platforms/lib/platforms';

import { configureRootTheme } from '../../Theme';
import { presets } from '../../Theme/presets';

configureRootTheme({ theme: presets.default });

export const themes = [presets.default, presets.brand, presets.inverse];

export const EXAMPLE_DESKTOP_TOKEN = 'Utility|Showcase/desktop';
export const EXAMPLE_TOUCH_PHONE_TOKEN = 'Utility|Showcase/touch-phone';
export const EXAMPLE_TOUCH_PAD_TOKEN = 'Utility|Showcase/touch-pad';

export const createDecorators = ({ scope }: { scope: TPlatform }) => [
    createScopeDecorator(scope, 'lego'),
];

export const parameters = {
    docs: {
        readme: require('../Showcase.md'),
    },
};
