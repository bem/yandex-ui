const lunr = require('lunr');
const { patchLunr } = require('../src/indexer');

exports.clientEntry = () => {
    patchLunr(lunr);

    window.__LUNR__ = window.__LUNR__ || {};
    window.__LUNR__.loaded = fetch(`${__PATH_PREFIX__}/search_index.json`)
        .then((response) => response.json())
        .then(({ index, store }) => {
            window.__LUNR__ = {
                index: lunr.Index.load(index),
                store,
                loaded: window.__LUNR__.loaded,
            };

            return window.__LUNR__;
        })
        .catch((e) => {
            throw e;
        });
};
