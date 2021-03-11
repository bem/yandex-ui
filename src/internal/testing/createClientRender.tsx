import { ReactElement, cloneElement } from 'react';
import { RenderOptions, RenderResult, render as testingLibraryRender } from '@testing-library/react';

export * from '@testing-library/react';

type Render<T> = RenderResult & {
    setProps: (props: T) => void;
};

function clientRender<T>(element: ReactElement<T>, options: RenderOptions = {}) {
    const { container, hydrate } = options;
    const render = testingLibraryRender(element, { container, hydrate }) as Render<T>;

    function setProps(props: any) {
        render.rerender(cloneElement(element, props));
    }

    Object.assign(render, { setProps });

    return render;
}

export function createClientRender() {
    return clientRender;
}
