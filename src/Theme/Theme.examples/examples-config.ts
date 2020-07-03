import { createScopeDecorator } from '@yandex-int/storybook-with-platforms';
import { TPlatform } from '@yandex-int/storybook-with-platforms/lib/platforms';

export const EXAMPLE_DESKTOP_TOKEN = 'Utility|Theme';

export const createDecorators = ({ scope }: { scope: TPlatform }) => [
    createScopeDecorator(scope, 'lego'),
];

export const parameters = {
    docs: {
        readme: require('../README.md'),
    },
};
