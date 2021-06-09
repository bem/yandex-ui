const id = process.env.id;

function shouldCreatePage(page) {
    if (id) {
        const chunks = id.split(',');

        return chunks.some((chunk) => page.frontmatter.id === chunk);
    }

    return true;
}

module.exports = {
    shouldCreatePage,
};
