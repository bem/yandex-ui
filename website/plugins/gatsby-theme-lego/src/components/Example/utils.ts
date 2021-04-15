const indexSource = `import React from 'react'
import { render } from 'react-dom'

import { configureRootTheme } from '@yandex/ui/Theme';
import { theme } from '@yandex/ui/Theme/presets/default';

import App from './App'

configureRootTheme({ theme })

const rootElement = document.getElementById('root')
render(<App />, rootElement)
`;

function prepareSource(source: string) {
    const sourceCode = source.replace(/@yandex-lego\/components/g, '@yandex/ui');

    return sourceCode.replace(/(export.+=\s?)\(/, 'export default (');
}

function getCodeSandboxBody(source: string) {
    return JSON.stringify({
        files: {
            'package.json': {
                content: {
                    dependencies: {
                        react: 'latest',
                        'react-dom': 'latest',
                        'react-scripts': 'latest',
                        '@yandex/ui': 'latest',
                        '@bem-react/classname': 'latest',
                        '@bem-react/core': 'latest',
                        '@bem-react/di': 'latest',
                    },
                },
                isBinary: false,
            },
            'App.tsx': {
                content: source,
                isBinary: false,
            },
            'index.tsx': {
                content: indexSource,
                isBinary: false,
            },
        },
    });
}

export function createCodeSandbox(source) {
    const preparedSource = prepareSource(source);
    const body = getCodeSandboxBody(preparedSource);

    fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body,
    })
        .then((result) => result.json())
        .then((result) => window.open(`https://codesandbox.io/s/${result.sandbox_id}`, '_blank'));
}
