import figmaDecorator from 'storybook-addon-figma-new';

export * from './view';
export * from './size';
export * from './theme';
export * from './width';
export * from './playground';
export * from './jsx-content';
export * from './context-menu';
export * from './custom-check';

export default {
    title: 'Controls|Menu/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=13245%3A0',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Menu.md'),
        },
    },
};
