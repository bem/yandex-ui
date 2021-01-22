import figmaDecorator from 'storybook-addon-figma-new';

export const EXAMPLE_DESKTOP_TOKEN = 'Content|Text/desktop';

export const createDecorators = () => [
    figmaDecorator({
        url: 'https://www.figma.com/file/hEYn9nn2bEB2BdDKIWP05X/Lego-B2C-%E2%80%94-Desktop?node-id=6690%3A54904',
    }),
];

export const parameters = {
    docs: {
        readme: require('../Text.md'),
    },
};
