const path = require('path');

require('./gatsby/dotenv-setup');
const { getPathPrefix } = require('./gatsby/pathPrefix');
const { shouldCreatePage } = require('./gatsby/shouldCreatePage');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    pathPrefix: getPathPrefix(),

    siteMetadata: {
        title: '@yandex-lego/docs',
        description: 'Yandex lego components documentation',
        author: 'Lego Team <lego@yandex-team.ru>',
    },

    plugins: [
        {
            resolve: 'gatsby-theme-lego',
            options: {
                pages: './content',
                sidebar: './content/sidebar',
                shouldCreatePage,
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('postcss-mixins')({
                        mixinsDir: path.resolve(__dirname, '../src/**/mixins'),
                    }),
                ],
            },
        },
        {
            resolve: 'gatsby-alias-imports',
            options: {
                aliases: {
                    '@yandex-lego/components': path.resolve(__dirname, '../src'),
                },
            },
        },
    ],
};
