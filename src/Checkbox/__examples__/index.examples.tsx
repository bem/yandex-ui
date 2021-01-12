import figmaDecorator from 'storybook-addon-figma-new';

export * from './view';
export * from './size';
export * from './theme';
export * from './indeterminate';
export * from './lines';
export * from './playground';

export default {
    title: 'Controls|Checkbox/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=229%3A4251',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Checkbox.md'),
        },
    },
};
