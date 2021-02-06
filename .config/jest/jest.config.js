const { resolve } = require('path');

/**
 * @type {import('ts-jest/dist/types').TsJestConfig}
 */
const tsJestConfig = {
    tsconfig: {
        noUnusedLocals: true,
        noUnusedParameters: true,
    },
};

/**
 * @type {Partial<jest.InitialOptions>}
 */
module.exports = {
    rootDir: resolve(__dirname, '../..'),
    setupFiles: [
        '<rootDir>/.config/jest/jest.setup.js',
    ],
    preset: 'ts-jest',
    testMatch: [
        '<rootDir>/src/**/*.test.{ts,tsx}',
        '<rootDir>/codeshifts/*.test.js',
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/.+\.examples/',
        '/.+\.bundle/',
        '/.+\.tests/',
        '/_[^_].+/',
        '<rootDir>/src/internal/',
        '<rootDir>/src/docs/',
        '<rootDir>/src/Showcase/',
        '<rootDir>/src/Theme/',
    ],
    coverageDirectory: '<rootDir>/__reports/report-unit:coverage/',
    coverageReporters: ['html'],
    // TODO: https://st.yandex-team.ru/ISL-8003
    // coverageThreshold: {
    //     global: {
    //         branches: 72,
    //         functions: 78,
    //         lines: 90,
    //         statements: 90,
    //     },
    // },
    transform: {
        '^.+\\.js$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.css$': '<rootDir>/.config/jest/__mocks__/noop.js',
    },
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    globals: {
        'ts-jest': tsJestConfig,
    },
    reporters: [
        'default',
        ['jest-html-reporter', {
            outputPath: '__reports/report-unit/index.html',
            pageTitle: 'Report',
            includeFailureMsg: true,
            includeConsoleLog: true,
        }],
    ],
};
