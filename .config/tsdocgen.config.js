module.exports = {
    hooks: {
        afterAllFileWrite: ['yaspeller --only-errors'],
    },
};
