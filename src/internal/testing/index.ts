import userEvent from '@testing-library/user-event';

import { fireEvent as fireEventBase } from './createClientRender';

export * from './createClientRender';
export * from './createServerRender';
export * from './events';

export const fireEvent = Object.assign(fireEventBase.bind(null), {
    ...fireEventBase,
    baseClick: fireEventBase.click,
    ...userEvent,
});

export function createContainer(html: string): HTMLDivElement {
    const container = document.createElement('div');
    container.innerHTML = html;

    return container;
}
