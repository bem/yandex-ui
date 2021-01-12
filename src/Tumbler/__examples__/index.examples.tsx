import figmaDecorator from 'storybook-addon-figma-new';

export * from './label';
export * from './showcase';
export * from './size';
export * from './playground';

export default {
    title: 'Controls|Tumbler/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/LEGO?node-id=411%3A129',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Tumbler.md'),
        },
    },
};
