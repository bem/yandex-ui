import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const EXAMPLE_TOKEN = 'Surface|Drawer/touch-phone';

export const parameters = {
    docs: {
        readme: require('../Drawer.md'),
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone6',
    },
};
