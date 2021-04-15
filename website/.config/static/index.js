const PULL_REQUEST_NUMBER = process.env.TRENDBOX_PULL_REQUEST_NUMBER;

module.exports = {
    bucket: 'lego-docs',
    /**
     * @type {boolean} Включено ли проксирование через yastatic.net
     * По умолчанию true для YENV=production и false для YENV=testing
     * Влияет на построение путей staticPath и freezePath
     */
    useYastaticCdn: false,

    /** @type {object} Куда грузить обычную статику (css и js) */
    static: {
        /** @type {string} Из какой папки при сборке брать статику */
        path: 'public',
        /** @type {string[]} Какие файлы заливать (fast-glob) */
        sources: ['**/*'],
        /**
         * @type {string} Путь в бакете, в который класть статику
         * По умолчанию в проде <service>/<version>
         * В пулреквестах <service>/<prNumber>/<commit>/static
         */
        target: PULL_REQUEST_NUMBER ? `lego-components/pull-${PULL_REQUEST_NUMBER}` : 'lego-components',
        /**
         * @deprecated
         * @type {boolean} Падать ли если пытаемся залить файл вместо существующего
         * Для продакшена true, для тестинга false.
         * При false файл не будет залит, если уже существует
         */
        denyOverwrite: true,
        /**
         * @type {boolean} Перезаписывает существующие файлы
         * По умолчанию false
         */
        overwrite: true,
    },
    s3: {
        /** @type {string} По умолчанию process.env.FRONTEND_S3_ACCESS_KEY_ID */
        accessKeyId: process.env.LEGO_S3_ACCESS_KEY_ID,
        /** @type {string} По умолчанию process.env.FRONTEND_S3_SECRET_ACCESS_KEY */
        secretAccessKey: process.env.LEGO_S3_SECRET_ACCESS_KEY,
    },
};
