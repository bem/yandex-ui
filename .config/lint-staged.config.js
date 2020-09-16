module.exports = {
    '*.{ts,tsx}': [
        'prettier --write',
        'git add',
    ],
    '*.md': [
        'prettier --write --parser markdown --tab-width 2 --no-semi --print-width 80',
        'git add',
    ],
};
