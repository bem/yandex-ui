import figmaDecorator from 'storybook-addon-figma-new';

export * from './view';
export * from './size';
export * from './position';
export * from './playground';

export default {
    title: 'Progress|Spin/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=9222%3A0',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Spin.md'),
        },
    },
};
