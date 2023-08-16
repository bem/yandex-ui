const lunr = require('lunr');

function patchLunr(lunr) {
    require('lunr-languages/lunr.stemmer.support')(lunr);
    require('lunr-languages/lunr.multi')(lunr);
    require('lunr-languages/lunr.ru')(lunr);
}

function createIndex(documents) {
    patchLunr(lunr);

    return lunr(function() {
        this.use(lunr.multiLanguage('en', 'ru'));

        this.ref('id');

        this.field('section', { boost: 20 });
        this.field('content', { boost: 10 });

        for (const document of documents) {
            this.add(document);
        }
    });
}

module.exports = { createIndex, patchLunr };
