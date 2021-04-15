const id = process.env.id;

function shouldCreatePage(page) {
    if (id) {
        return page.frontmatter.id === id;
    }

    return true;
}

module.exports = {
    shouldCreatePage,
};
