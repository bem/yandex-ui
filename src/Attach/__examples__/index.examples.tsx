import figmaDecorator from 'storybook-addon-figma-new';

export * from './view';
export * from './hasHolder';
export * from './size';
export * from './theme';
export * from './playground';

export default {
    title: 'Controls|Attach/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=1386%3A2',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Attach.md'),
        },
    },
};
