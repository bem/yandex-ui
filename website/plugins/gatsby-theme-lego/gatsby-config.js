/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-remove-trailing-slashes',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                lessBabel: true,
                defaultLayouts: {
                    default: require.resolve('./src/templates/Default.tsx'),
                },
            },
        },
        {
            resolve: 'gatsby-alias-imports',
            options: {
                aliases: {
                    '@emotion/react': require.resolve('@emotion/react'),
                },
            },
        },
    ],
};
