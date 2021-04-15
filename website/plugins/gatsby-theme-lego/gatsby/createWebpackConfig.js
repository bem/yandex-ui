// FIXME: Отключаем ворнинг о том, что css-файлы не в правильном порядке.
function onCreateWebpackConfig({ stage, actions, getConfig }) {
    if (stage === 'develop' || stage === 'build-javascript') {
        const config = getConfig();
        const miniCssExtractPlugin = config.plugins.find(
            (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
        );
        if (miniCssExtractPlugin) {
            miniCssExtractPlugin.options.ignoreOrder = true;
        }
        actions.replaceWebpackConfig(config);
    }
}

module.exports = {
    onCreateWebpackConfig,
};
