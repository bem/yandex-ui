const PR_NUMBER = process.env.TRENDBOX_PULL_REQUEST_NUMBER;

function getPathPrefix() {
    if (PR_NUMBER) {
        return `/lego-components/pull-${PR_NUMBER}`;
    }

    return '/lego-components';
}

module.exports = {
    getPathPrefix,
};
