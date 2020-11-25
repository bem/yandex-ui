import { configureRootTheme } from '@yandex-lego/components/Theme';
import { presets } from '@yandex-lego/components/Theme/presets';
import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';

export const EXAMPLE_TOKEN = 'Utility|LayerManager (I)';

export const createDecorators = () => [createScopeDecorator('desktop', 'lego')];

configureRootTheme({ theme: presets.default });

export const parameters = {
    docs: {
        readme: require('../LayerManager.md'),
    },
};
