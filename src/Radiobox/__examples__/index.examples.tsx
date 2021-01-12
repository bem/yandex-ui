import figmaDecorator from 'storybook-addon-figma-new';

export * from './view';
export * from './size';
export * from './theme';
export * from './playground';

export default {
    title: 'Controls|Radiobox/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=9314%3A13993',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Radiobox.md'),
        },
    },
};
