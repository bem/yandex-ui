import figmaDecorator from 'storybook-addon-figma-new';

export * from './playground';
export * from './pseudo';
export * from './theme';
export * from './view';
export * from './disabled';

export default {
    title: 'Navigation|Link/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=1473%3A9880',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Link.md'),
        },
    },
};
