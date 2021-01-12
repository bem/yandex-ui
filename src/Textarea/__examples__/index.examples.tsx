import figmaDecorator from 'storybook-addon-figma-new';

export * from './auto-resize';
export * from './debounce';
export * from './has-clear';
export * from './size';
export * from './state';
export * from './theme';
export * from './view';
export * from './playground';

export default {
    title: 'Controls|Textarea/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=249%3A1049',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Textarea.md'),
        },
    },
};
