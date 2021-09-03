import { useRef, useEffect, DependencyList, EffectCallback } from 'react';

/**
 * Эффект вызываемый после первого рендера.
 */
export const useUpdateEffect = (fn: EffectCallback, deps: DependencyList) => {
    const isMount = useRef(true);
    const fnRef = useRef<EffectCallback>(fn);
    fnRef.current = fn;

    useEffect(() => {
        if (isMount.current) {
            isMount.current = false;
        } else {
            return fnRef.current();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
