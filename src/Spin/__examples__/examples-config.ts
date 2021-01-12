import figmaDecorator from 'storybook-addon-figma-new';

import { configureRootTheme } from '../../Theme';
import { presets } from '../../Theme/presets';

configureRootTheme({ theme: presets.default });

export const EXAMPLE_DESKTOP_TOKEN = 'Progress|Spin/desktop';

export const createDecorators = () => [
    figmaDecorator({
        url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=9222%3A0',
    }),
];

export const parameters = {
    docs: {
        readme: require('../Spin.md'),
    },
};
