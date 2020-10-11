/* eslint-disable */
const path = require('path');

module.exports = {
    pathPrefix: '/lego-components',

    siteMetadata: {
        title: '@yandex-lego/docs-site',
        description: 'Components documentation',
        author: 'yarastqt',
    },

    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-use-query-params',
        // TODO: Для навигации свой резолвер нужно написать
        // https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/gatsby-theme-carbon/gatsby-config.js
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'docs',
                path: path.resolve(__dirname, 'src/docs'),
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'source-docs',
                path: path.resolve(__dirname, '../src'),
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                remarkPlugins: [require('remark-slug')],
            },
        },
    ],
};
