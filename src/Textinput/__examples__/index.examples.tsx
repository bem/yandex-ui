import figmaDecorator from 'storybook-addon-figma-new';

export * from './playground';
export * from './baseline';
export * from './debounce';
export * from './has-clear';
export * from './pin';
export * from './size';
export * from './state';
export * from './theme';
export * from './type';
export * from './view';
export * from './miniapps';

export default {
    title: 'Controls|Textinput/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=182%3A4103',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Textinput.md'),
        },
    },
};
