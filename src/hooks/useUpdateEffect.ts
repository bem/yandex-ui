import { useRef, useEffect, DependencyList, EffectCallback } from 'react';

/**
 * Эффект вызываемый после первого рендера.
 */
export const useUpdateEffect = (fn: EffectCallback, deps: DependencyList) => {
    const isMount = useRef(true);

    useEffect(() => {
        if (isMount.current) {
            isMount.current = false;
        } else {
            fn();
        }
    }, [deps]);
};
