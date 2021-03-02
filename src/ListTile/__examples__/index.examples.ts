import figmaDecorator from 'storybook-addon-figma-new';

export * from './playground';
export * from './default';

export default {
    title: 'Layout|ListTile/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/hEYn9nn2bEB2BdDKIWP05X/Yandex-Lego-Web?node-id=7691%3A0',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../ListTile.md'),
        },
    },
};
