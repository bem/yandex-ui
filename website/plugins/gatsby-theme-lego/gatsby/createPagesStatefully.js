const path = require('path');
const fs = require('fs');
const glob = require('fast-glob');
const matter = require('gray-matter');

async function createPagesStatefully({ actions }, options) {
    const { createPage } = actions;

    for (const section of options.sections) {
        const pages = getPages(section.pages, section.shouldCreatePage);
        const sidebar = getSidebar(section.sidebar, pages);
        const pathPrefix = section.pathPrefix || '/';

        for (const page of pages) {
            createPage({
                component: page.componentPath,
                path: path.join(pathPrefix, page.routePath),
                context: {
                    sidebar,
                    frontmatter: page.frontmatter,
                    prefix: pathPrefix,
                    section: section.name,
                    indexable: !page.frontmatter.excludeFromSearch,
                },
            });
        }
    }
}

function getPages(rootPath, shouldCreatePage) {
    const pages = new Set();
    const context = new Map();
    const files = glob
        .sync('**/*.mdx', { cwd: rootPath })
        // Meta files should be processed first.
        .sort((a) => a.includes('__meta.mdx'));

    for (const file of files) {
        const key = path.dirname(file);
        const routePath = file.replace(path.extname(file), '');
        const normalizedRoutePath = path.join('/', routePath);
        const componentPath = path.resolve(rootPath, file);

        const content = fs.readFileSync(componentPath, 'utf-8');
        const { data } = matter(content);

        // Set context when frontmatter exists.
        if (Object.keys(data).length > 0) {
            context.set(key, data);
        }

        // Dont create page from meta file.
        if (file.includes('__meta.mdx')) {
            continue;
        }

        const frontmatter = context.get(key);

        if (shouldCreatePage && !shouldCreatePage({ frontmatter })) {
            continue;
        }

        pages.add({ frontmatter, componentPath, routePath: normalizedRoutePath });
    }

    return pages;
}

function getSidebar(sidebarPath, pages) {
    const sidebarData = require(path.resolve(sidebarPath));

    const resolveSidebarData = (sidebar) => {
        for (const index in sidebar) {
            const item = sidebar[index];

            if (typeof item === 'string') {
                const page = findPageById(pages, item);

                if (page) {
                    let pagePath = page.frontmatter.path || page.routePath;

                    if (page.frontmatter.tabs) {
                        const currentPath = pagePath.split('/').filter(Boolean).slice(-1)[0];
                        const normalizedTab = page.frontmatter.tabs[0].toLowerCase();
                        pagePath = pagePath.replace(currentPath, normalizedTab);
                    }

                    sidebar[index] = {
                        id: page.frontmatter.id,
                        path: pagePath,
                        label: page.frontmatter.sidebarLabel || page.frontmatter.id,
                    };
                } else {
                    sidebar[index] = {
                        id: item,
                        path: '#',
                        label: item,
                        disabled: true,
                    };
                }
            } else if (!item.__skip) {
                const items = resolveSidebarData(item.items, pages)
                    // Use sort only for nested items.
                    .sort((a, b) => a.label.localeCompare(b.label));
                item.items = items;
            }
        }

        return sidebar;
    };

    const sidebar = resolveSidebarData(sidebarData);

    return sidebar;
}

function findPageById(pages, id) {
    for (const page of pages) {
        if (page.frontmatter.id === id) {
            return page;
        }
    }
}

module.exports = {
    createPagesStatefully,
};
