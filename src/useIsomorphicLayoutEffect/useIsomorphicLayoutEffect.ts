import { EffectCallback, DependencyList, useEffect, useLayoutEffect } from 'react';

import { canUseDOM } from '../lib/canUseDOM';

export function useIsomorphicLayoutEffect(fn: EffectCallback, deps?: DependencyList): void {
    // TODO ISL-10952: разобраться почему не все необходимые переменные указаны в deps и убрать игнор
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
    return canUseDOM() ? useLayoutEffect(fn, deps) : useEffect(fn, deps);
}
