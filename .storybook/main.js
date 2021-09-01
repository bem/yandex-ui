const path = require('path');

const IS_TESTING = process.env.NODE_ENV === 'test';
const IS_DEV = process.env.NODE_ENV === 'development';

// TODO: Заменить @storybook/addon-knobs на @storybook/controls,
// также не забыть удалить copy-to-clipboard (нужно для knobs).
module.exports = {
    stories: ['../src/**/*.examples.@(ts|tsx)'],
    addons: [
        '@storybook-addons/sync-external-url/register',
        '@storybook/addon-essentials',
        '@storybook/addon-knobs',
        'storybook-addon-performance/register',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    postcssOptions: {
                        config: IS_TESTING
                            ? path.resolve(__dirname, '../.config/postcss-hermione.config.js')
                            : path.resolve(__dirname, '../.config/postcss.config.js'),
                    },
                },
            },
        },
    ],
    reactOptions: {
        fastRefresh: IS_DEV,
    },
    typescript: {
        check: false,
        docgen: false,
    },
    webpackFinal: (config) => {
        config.resolve.alias['@yandex-lego/components'] = path.resolve(__dirname, '../src');
        // Добавляем алиасы для react-dom чтобы иметь возможность профилировать производительность.
        config.resolve.alias['react-dom$'] = require.resolve('react-dom/profiling');
        // FIXME: Перестал работать резолвинг модуля, т.к. теперь он не устанавливается в корень.
        // config.resolve.alias['scheduler/tracing'] = require.resolve('scheduler/tracing-profiling');

        return config;
    },
};
