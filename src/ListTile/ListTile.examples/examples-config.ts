import figmaDecorator from 'storybook-addon-figma-new';
import 'yandex-font/build/browser.css';

export const EXAMPLE_DESKTOP_TOKEN = 'Layout|ListTile/desktop';

export const createDecorators = () => [
    figmaDecorator({
        url: 'https://www.figma.com/file/hEYn9nn2bEB2BdDKIWP05X/Yandex-Lego-Web?node-id=7691%3A0',
    }),
];

export const parameters = {
    docs: {
        readme: require('../ListTile.md'),
    },
};
