import figmaDecorator from 'storybook-addon-figma-new';

export * from './basic';
export * from './customLabelTick';
export * from './customThumb';
export * from './filled';
export * from './marked';
export * from './playground';
export * from './reversed';
export * from './showcase';
export * from './stepped';

export default {
    title: 'Controls|Slider/desktop',
    decorators: [
        figmaDecorator({
            url: 'https://www.figma.com/file/hEYn9nn2bEB2BdDKIWP05X/❖--Lego-Web?node-id=11583%3A1425',
        }),
    ],
    parameters: {
        docs: {
            readme: require('../Slider.md'),
        },
    },
};
