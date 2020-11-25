#!/usr/bin/env node

/* eslint-disable no-console */

const { exec } = require('child_process');
const { resolve } = require('path');
const { promisify } = require('util');

const execa = promisify(exec);
const websiteDir = resolve(__dirname, '../docs-site');
const YENV = process.env.YENV || 'testing';

async function build() {
    // TODO: Залогировать все этапы выполнения.
    const [install, build] = await Promise.all([
        await execa('npm ci', { cwd: websiteDir }),
        await execa('npm run build', { cwd: websiteDir }),
    ]);

    console.log(install.stderr || install.stdout);
    console.log(build.stderr || build.stdout);
}

// TODO: В идеале не использовать static-uploader,
// а использоать aws node api, чтобы очищать бакет
// от артефакторв прошлых сборок.
async function deploy() {
    const { stderr, stdout } = await execa(`YENV=${YENV} npm run deploy`, { cwd: websiteDir });
    console.log(stderr || stdout);
}

async function main() {
    await build();
    await deploy();
}

main();
