import { useState, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

/**
 * Фабрика, для создания реакт-хука с глобальным состоянием.
 *
 * Используется, когда необходимо использовать общее состояние в нескольких компонентах.
 *
 * @example
 * const useSharedState = createGlobalState()
 *
 * function ComponentA() {
 *   const [value, setValue] = useSharedState()
 *   return <div>{value}</div>
 * }
 *
  * function ComponentB() {
 *   const [value, setValue] = useSharedState()
 *   return <div>{value}</div>
 * }
 */
export function createGlobalState<S = any>(initialState?: S) {
    const store: { state: S | undefined; setState: (state: S) => void; setters: any[] } = {
        state: initialState,
        setState(state: S) {
            store.state = state;
            store.setters.forEach((setter) => setter(store.state));
        },
        setters: [],
    };

    return (): [S | undefined, (state: S) => void] => {
        const [globalState, stateSetter] = useState<S | undefined>(store.state);

        // prettier-ignore
        useEffect(() => () => {
            store.setters = store.setters.filter((setter) => setter !== stateSetter);
        }, []);

        useIsomorphicLayoutEffect(() => {
            if (store.setters.indexOf(stateSetter) === -1) {
                store.setters.push(stateSetter);
            }
        });

        return [globalState, store.setState];
    };
}
