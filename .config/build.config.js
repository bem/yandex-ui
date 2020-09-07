/* eslint-disable react-hooks/rules-of-hooks */
const { resolve } = require('path');
const { useCleanUpPlugin } = require('@bem-react/pack/lib/plugins/CleanUpPlugin');
const { useCopyAssetsPlugin } = require('@bem-react/pack/lib/plugins/CopyAssetsPlugin');
const { useCssPlugin } = require('@bem-react/pack/lib/plugins/CssPlugin');
const { useTypeScriptPlugin } = require('@bem-react/pack/lib/plugins/TypeScriptPlugin');

/**
 * @type {import('@bem-react/pack/lib/interfaces').Config}
 */
module.exports = {
    context: resolve(__dirname, '..'),

    output: './dist',

    plugins: [
        useCleanUpPlugin(['./dist']),

        // Плагин также создает esm версию сборки
        // и добавляет package.json для каждого компонента.
        useTypeScriptPlugin({
            configPath: './tsconfig.json',
        }),

        useCssPlugin({
            context: './src',
            src: './**/*.css',
            // Дополнительно собираем css для esm сборки.
            output: ['./dist', './dist/esm'],
            ignore: ['**/*.tests/**', '**/internal/**'],
        }),

        useCopyAssetsPlugin([
            {
                context: './src',
                src: './**/*.{svg,png,md,json,yml}',
                // Дополнительно копируем статику для esm сборки.
                output: ['./dist', './dist/esm'],
                ignore: ['**/*.tests/**', '**/internal/**'],
            },
            {
                src: ['./package.json', './README.md'],
            },
            {
                src: './codeshifts/**/*',
                ignore: ['**/*.test*', '**/fixtures/**'],
            },
        ]),

        {
            // TODO(https://github.com/yarastqt/themekit/issues/81)
            // Удалить после того, как будут поддержаны относительные пути в темах.
            onFinish(done, context) {
                const fs = require('fs');
                const path = require('path');
                const themesDir = path.join(context.output, 'Theme/themes');
                const themes = fs.readdirSync(themesDir);
                themes.forEach((theme) => {
                    const themePath = path.join(themesDir, theme);
                    const content = fs.readFileSync(themePath, 'utf-8').replace(/.\/src/g, '.');
                    fs.writeFileSync(themePath, content);
                });
                done();
            },
        },
    ],
};
