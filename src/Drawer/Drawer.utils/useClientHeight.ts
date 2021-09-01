import { useCallback, useState } from 'react';

import { canUseDOM } from '../../lib/canUseDOM';
import { useIsomorphicLayoutEffect as useLayoutEffect } from '../../useIsomorphicLayoutEffect';

/**
 * Вычисляет высоту вьюпорта
 */
const getClientHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

/**
 * Провоцирует перерисовку при ресайзе окна и возвращает высоту вьюпорта
 */
export const useClientHeight = () => {
    const [clientHeight, setClientHeight] = useState<number | undefined>(canUseDOM() ? getClientHeight() : undefined);

    const recalculateHeight = useCallback(() => setClientHeight(getClientHeight()), []);

    useLayoutEffect(() => {
        window.addEventListener('resize', recalculateHeight);

        return () => {
            window.removeEventListener('resize', recalculateHeight);
        };
    }, [recalculateHeight]);

    return clientHeight;
};
