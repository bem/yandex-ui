/* eslint-disable */
const path = require('path');
const slugs = require('github-slugger')();

function slugHeadingsDecorator(headings) {
    slugs.reset();
    return headings.map((heading) => {
        const slug = slugs.slug(heading.value);
        return { ...heading, id: slug, url: `#${slug}` };
    });
}

async function createLibraryPages(graphql, createPage, reporter) {
    const result = await graphql(`
        query LibraryPagesQuery {
            allMdx(filter: { fileAbsolutePath: { regex: "/src/.+/docs/" } }) {
                edges {
                    node {
                        slug
                        body
                        headings {
                            depth
                            value
                        }
                        frontmatter {
                            id
                            path
                            description
                            title
                            tabs
                            links {
                                label
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    const data = {};

    for (const edge of result.data.allMdx.edges) {
        const [, segment = 'index'] = edge.node.slug.match(/.+\/(.+)?$/);
        const { id, path, ...frontmatter } = edge.node.frontmatter;

        if (id === null) {
            reporter.warn('>>> У файла отсутсвует id, не могу определить принаджлежность к разделу');
            continue;
        }

        if (data[id] === undefined) {
            data[id] = { segments: {} };
        }

        if (segment === 'index') {
            // TODO: Validate path anf front.
            data[id].path = path;
            data[id].frontmatter = frontmatter;
        }

        data[id].segments = {
            ...data[id].segments,
            [segment]: {
                body: edge.node.body,
                headings: edge.node.headings,
            },
        };
    }

    for (const [, entryData] of Object.entries(data)) {
        for (const [segment, segmentData] of Object.entries(entryData.segments)) {
            if (segment === 'index') continue;

            createPage({
                path: path.join(entryData.path, segment),
                component: path.resolve(__dirname, 'src/templates/DefaultTemplate.tsx'),
                context: {
                    body: segmentData.body,
                    headings: slugHeadingsDecorator(segmentData.headings),
                    frontmatter: entryData.frontmatter,
                },
            });
        }
    }
}

async function createDocsPages(graphql, createPage) {
    const result = await graphql(`
        query DocsPagesQuery {
            allMdx(filter: { fileAbsolutePath: { regex: "/src/docs/" } }) {
                edges {
                    node {
                        slug
                        body
                        headings {
                            depth
                            value
                        }
                        frontmatter {
                            description
                            title
                            tabs
                            links {
                                label
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    for (const edge of result.data.allMdx.edges) {
        createPage({
            path: edge.node.slug,
            component: path.resolve(__dirname, 'src/templates/DefaultTemplate.tsx'),
            context: {
                body: edge.node.body,
                headings: slugHeadingsDecorator(edge.node.headings),
                frontmatter: edge.node.frontmatter,
            },
        });
    }
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                react: path.resolve(__dirname, 'node_modules/react'),
                'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
                '@mdx-js/react': path.resolve(__dirname, 'node_modules/@mdx-js/react'),
            },
        },
    });
};

/**
 * @param {import('gatsby').CreatePagesArgs}
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    await createDocsPages(graphql, createPage);
    await createLibraryPages(graphql, createPage, reporter);
};
