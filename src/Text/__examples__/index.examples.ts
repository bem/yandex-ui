import figmaDecorator from 'storybook-addon-figma-new';

export * from './playground';
export * from './base';
export * from './align';
export * from './color';
export * from './control-color';
export * from './ellipsis';
export * from './fade-horizontal';
export * from './fade';
export * from './link-color';
export * from './common';

export default {
    title: 'Content|Text/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/hEYn9nn2bEB2BdDKIWP05X/Lego-B2C-%E2%80%94-Desktop?node-id=6690%3A54904',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Text.md'),
        },
    },
};
