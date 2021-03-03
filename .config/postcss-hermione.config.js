const { join } = require('path');
const { NODE_ENV } = process.env;

const __PROD__ = NODE_ENV === 'production';

const plugins = [
    require('postcss-mixins')({
        mixinsDir: join(__dirname, '../src/*/mixins'),
    }),
];

if (__PROD__) {
    plugins.push(
        require('postcss-theme-fold')({
            themes: [
                [join(__dirname, '../src/Theme/presets/default.css')],
                [join(__dirname, '../src/Theme/presets/brand.css')],
                [join(__dirname, '../src/Theme/presets/inverse.css')],
            ],
            globalSelectors: ['.utilityfocus', "html[dir='rtl']", "html:not([dir='rtl'])"],
        }),
    );
}

module.exports = {
    plugins,
};
