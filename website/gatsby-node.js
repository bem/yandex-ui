const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const fs = require('fs-extra');

const processedPagesSet = new Set();

exports.onPreInit = () => {
    // FIXME: Удаляем gatsby-кэш, т.к. при изменении параметров запуска он не инвалидируется.
    fs.removeSync(path.resolve(__dirname, 'public'));
};

exports.onCreatePage = ({ actions, page }) => {
    const { createPage } = actions;

    if (!page.context.frontmatter) {
        return;
    }

    const { id } = page.context.frontmatter;

    if (processedPagesSet.has(id)) {
        return;
    }

    if (page.context.frontmatter.tabs) {
        page.context.frontmatter.tabs = [...page.context.frontmatter.tabs, 'Issues'];
    }

    processedPagesSet.add(id);

    createPage({
        component: path.resolve(__dirname, './src/templates/Issues.tsx'),
        path: path.join(path.dirname(page.path), 'issues'),
        context: page.context,
    });
};
