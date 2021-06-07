const { join } = require('path');

module.exports = {
    plugins: [
        require('postcss-mixins')({
            mixinsDir: join(__dirname, '../src/**/mixins'),
        }),
    ],
};
