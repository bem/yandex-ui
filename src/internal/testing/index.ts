export * from './createClientRender';
export * from './createServerRender';

export function createContainer(html: string): HTMLDivElement {
    const container = document.createElement('div');
    container.innerHTML = html;

    return container;
}
