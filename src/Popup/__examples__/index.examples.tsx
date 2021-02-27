import figmaDecorator from 'storybook-addon-figma-new';

export * from './playground';
export * from './direction';
export * from './nonvisual';
export * from './scrollable';
export * from './target';
export * from './theme';
export * from './view';
export * from './boundary';

export default {
    title: 'Surface|Popup/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=3358%3A0',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Popup.md'),
        },
    },
};
