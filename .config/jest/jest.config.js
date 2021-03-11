const { resolve } = require('path');

/**
 * @type {Partial<jest.InitialOptions>}
 */
module.exports = {
    rootDir: resolve(__dirname, '../..'),
    setupFilesAfterEnv: ['<rootDir>/.config/jest/jest.setup.js'],
    preset: 'ts-jest',
    testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}', '<rootDir>/codeshifts/*.test.js'],
    transform: {
        '^.+\\.js$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.css$': '<rootDir>/.config/jest/__mocks__/noop.js',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    globals: {
        'ts-jest': {
            tsconfig: {
                noUnusedLocals: false,
                noUnusedParameters: false,
            },
        },
    },
    reporters: [
        'default',
        [
            'jest-html-reporter',
            {
                outputPath: '__reports/report-unit/index.html',
                pageTitle: 'Report',
                includeFailureMsg: true,
                includeConsoleLog: true,
            },
        ],
    ],
};
