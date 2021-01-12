import figmaDecorator from 'storybook-addon-figma-new';

export const EXAMPLE_DESKTOP_TOKEN = 'Controls|Select/desktop';
export const EXAMPLE_TOUCH_PHONE_TOKEN = 'Controls|Select/touch-phone';

export const createDecorators = () => [
    figmaDecorator({
        url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=377%3A1',
    }),
];

export const parameters = {
    docs: {
        readme: require('../Select.md'),
    },
};
