import figmaDecorator from 'storybook-addon-figma-new';

export * from './default.examples';
export * from './gap.examples';
export * from './pin.examples';
export * from './vertical.examples';
export * from './radio.examples';
export * from './checkbox.examples';
export * from './playground.examples';
export * from './showcase.examples';

export default {
    title: 'Controls|ButtonGroup/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/CaoHFEO0w6PaE8cVaYFDoq8i/L-E-G-O?node-id=0%3A1',
        }),
    ],
};
