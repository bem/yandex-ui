import React, { FC, ComponentType, ReactElement, useRef, createElement, useEffect } from 'react';

import { createGlobalState } from '../createGlobalState';

export type RenderOverride<T = any, U = any> = (props: T, component: React.ComponentType<U>) => ReactElement | null;

/**
 * Реакт-хук для создания компонента с возможностью переопределения.
 *
 * @example
 * const ElementOriginal = ({ children }) => <div>{children}</div>
 *
 * const MyComponent = ({ renderElement }) => {
 *   const Element = useRenderOverride(ElementOriginal, renderElement)
 *   return <Element />
 * }
 */
export function useRenderOverride<T>(component: ComponentType<T>, render?: RenderOverride<T>): ComponentType<T> {
    // Создаем глобальное состояние, чтобы иметь возможность
    // обновлять каждый инстанс переопределенного компонента.
    const { current: useDeps } = useRef(createGlobalState([component, render] as const));
    const [, setDeps] = useDeps();

    // Используем useRef для кэширования функции, т.к. реакт
    // не гарантирует постоянную мемоизацию для useMemo/Callback.
    const { current: renderer } = useRef<ComponentType<T>>(function RenderOverride(props: T) {
        const [deps] = useDeps();
        const [nextComponent, nextRender] = deps || [];
        if (deps === undefined || nextRender === undefined) {
            return createElement(nextComponent as ComponentType, props);
        }
        return nextRender(props, nextComponent as ComponentType);
    });

    useEffect(() => {
        setDeps([component, render]);
    }, [setDeps, component, render]);

    return renderer;
}

export type RenderOverrideProviderProps = {
    children: (component: ComponentType<any>) => ReactElement;
    component: ComponentType<any>;
    render?: RenderOverride;
};

/**
 * Реакт-провайдер для создания компонента с возможностью переопределения.
 *
 * @example
 * const ElementOriginal = ({ children }) => <div>{children}</div>
 *
 * const MyComponent = ({ renderElement }) => {
 *   <RenderOverrideProvider component={ElementOriginal} render={renderElement}>
 *     {(Element) => <Element />}
 *   </RenderOverrideProvider>
 * }
 */
export const RenderOverrideProvider: FC<RenderOverrideProviderProps> = ({ children, component, render }) => {
    const renderer = useRenderOverride(component, render);
    return children(renderer);
};

RenderOverrideProvider.displayName = 'RenderOverrideProvider';

export type MultiRenderOverrideProviderProps = {
    components: [ComponentType<any>, RenderOverride<any> | undefined][];
    children: (...components: ComponentType<any>[]) => ReactElement;
};

/**
 * Реакт-провайдер для создания нескольких компонентов с возможностью переопределения.
 *
 * @example
 * const ElementOriginal1 = ({ children }) => <div>{children}</div>
 * const ElementOriginal2 = ({ children }) => <div>{children}</div>
 *
 * const MyComponent = ({ renderElement1, renderElement2 }) => {
 *   <MultiRenderOverrideProvider
 *     components={[
 *       [ElementOriginal2, renderElement1],
 *       [ElementOriginal2, renderElement2],
 *     ]}
 *   >
 *     {(Element1, Element2) => (
 *       <>
 *         <Element1 />
 *         <Element2 />
 *       </>
 *     )}
 *   </MultiRenderOverrideProvider>
 * }
 */
export const MultiRenderOverrideProvider: FC<MultiRenderOverrideProviderProps> = ({ children, components }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const renderers = components.map(([component, render]) => useRenderOverride(component, render));
    return children(...renderers);
};

MultiRenderOverrideProvider.displayName = 'MultiRenderOverrideProvider';
