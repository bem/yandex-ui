const { createPagesStatefully } = require('./gatsby/createPagesStatefully');
const { onCreateWebpackConfig } = require('./gatsby/createWebpackConfig');

exports.createPagesStatefully = createPagesStatefully;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
