const fs = require('fs');
const slug = require('slug');
const { createIndex } = require('../src/indexer');
const { parse } = require('../src/markdown-parser');

function prepareDocument({ id, content, title }) {
    return Object.entries(content).map(([section, content]) => ({
        id: `${id}#${slug(section)}`,
        title,
        section,
        content,
    }));
}

exports.postBootstrap = async ({ getNodes }, options) => {
    const { shouldExcludeFromSearch } = options;

    let documents = await Promise.all(
        getNodes()
            .filter((node) => node.context && node.context.indexable && !shouldExcludeFromSearch(node))
            .map(async (node) => {
                const content = fs.readFileSync(node.component, 'utf-8');

                return {
                    id: node.path,
                    title: node.context.frontmatter.title,
                    content: await parse(content),
                };
            }),
    );
    documents = documents.flatMap(prepareDocument);

    const store = documents.reduce((store, document) => ({ [document.id]: document, ...store }), {});

    const index = createIndex(documents);

    fs.writeFileSync('public/search_index.json', JSON.stringify({ index: index.toJSON(), store }));
};
