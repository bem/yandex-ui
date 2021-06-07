import userEvent from '@testing-library/user-event';

import { fireEvent as fireEventBase } from './createClientRender';

export * from './createClientRender';
export * from './createServerRender';

export const fireEvent = { ...fireEventBase, ...userEvent };

export function createContainer(html: string): HTMLDivElement {
    const container = document.createElement('div');
    container.innerHTML = html;

    return container;
}
