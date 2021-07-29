const remark = require('remark');
const mdx = require('remark-mdx');
const visit = require('unist-util-visit');

async function parse(content) {
    let result;

    try {
        await remark()
            .use(mdx)
            .use(normalize)
            .use(sanitize)
            .use(
                harvest((res) => {
                    result = res;
                }),
            )
            .process(content);
    } catch {
        // TODO
    }

    return result;
}

function normalize() {
    return (tree) => {
        visit(tree, 'inlineCode', (node) => {
            node.type = 'text';
        });
    };
}

function sanitize() {
    const skip = (_node, index, parent) => {
        parent.children.splice(index, 1);
        return [visit.SKIP, index];
    };

    return (tree) => {
        visit(tree, 'import', skip);
        visit(tree, 'export', skip);
        visit(tree, 'jsx', skip);
        visit(tree, 'code', skip);
    };
}

function harvest(fn) {
    return () => (tree) => {
        const cache = {};
        let currentSection = null;

        for (const node of tree.children) {
            const value = getNodeValues(node);

            if (node.type === 'heading') {
                currentSection = value.join(' ');
                cache[currentSection] = '';
            } else {
                cache[currentSection] += value.join(' ');
            }
        }

        fn(cache);
    };
}

function getNodeValues(node) {
    const values = [];

    visit(node, 'text', (node) => {
        values.push(node.value);
    });

    return values;
}

module.exports = { parse };
