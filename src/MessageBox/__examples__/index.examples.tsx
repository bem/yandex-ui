import figmaDecorator from 'storybook-addon-figma-new';

export * from './apps';
export * from './buttons';
export * from './complex';
export * from './corner';
export * from './layout';
export * from './sizes';
export * from './tooltip';
export * from './view';
export * from './withPopup';
export * from './playground';

export default {
    title: 'Surface|MessageBox/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/LEGO?node-id=4865%3A0',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../MessageBox.md'),
        },
    },
};
