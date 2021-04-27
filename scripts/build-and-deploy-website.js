#!/usr/bin/env node

const { resolve } = require('path');
const { exec, FAILURE_BEHAVIOUR } = require('@yandex-int/frontend.ci.utils');

const websiteDir = resolve(__dirname, '../website');
const YENV = process.env.YENV || 'testing';

function build() {
    exec('npm ci', FAILURE_BEHAVIOUR.THROW, websiteDir);
    exec('npm run build', FAILURE_BEHAVIOUR.THROW, websiteDir);
}

// TODO: В идеале не использовать static-uploader,
// а использоать aws node api, чтобы очищать бакет
// от артефакторв прошлых сборок.
function deploy() {
    exec(`YENV=${YENV} npm run deploy`, FAILURE_BEHAVIOUR.THROW, websiteDir);
}

function main() {
    build();
    deploy();
}

main();
