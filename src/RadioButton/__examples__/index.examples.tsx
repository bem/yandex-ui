import figmaDecorator from 'storybook-addon-figma-new';

export * from './view';
export * from './size';
export * from './playground';

export default {
    title: 'Controls|RadioButton/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/LEGO?node-id=13194%3A25955',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../RadioButton.md'),
        },
    },
};
