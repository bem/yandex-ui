import figmaDecorator from 'storybook-addon-figma-new';

export * from './view.example';
export * from './pin.example';
export * from './size.example';
export * from './theme.example';
export * from './width.example';
export * from './playground.example';

export default {
    title: 'Controls|Button/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=0%3A1',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Button.md'),
        },
    },
};
