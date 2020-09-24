import { EffectCallback, DependencyList, useEffect, useLayoutEffect } from 'react';

import { canUseDOM } from '../lib/canUseDOM';

export function useIsomorphicLayoutEffect(fn: EffectCallback, deps?: DependencyList): void {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return canUseDOM() ? useLayoutEffect(fn, deps) : useEffect(fn, deps);
}
