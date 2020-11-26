import { configureRootTheme } from '@yandex-lego/components/Theme';
import { presets } from '@yandex-lego/components/Theme/presets';
import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';

export * from './complex-modal.examples';
export * from './complex-popup.examples';

configureRootTheme({ theme: presets.default });

export default {
    title: 'Utility|LayerManager (I)',
    decorators: [createScopeDecorator('desktop', 'lego')],
    parameters: {
        docs: {
            readme: require('../LayerManager.md'),
        },
    },
};
