import { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';

function serverRender(element: ReactElement) {
    const html = renderToString(element);

    return { html };
}

export function createServerRender() {
    return serverRender;
}
