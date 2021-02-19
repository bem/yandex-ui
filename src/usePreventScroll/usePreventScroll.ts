import { RefObject, useRef } from 'react';

import { useIsomorphicLayoutEffect as useLayoutEffect } from '../useIsomorphicLayoutEffect';
import * as ScrollLocker from '../lib/scroll-locker';

export interface UsePreventScrollOptions {
    /**
     * Включает/отключает прокрутку у элемента.
     */
    enabled: boolean | undefined;

    /**
     * Ссылка на DOM-элемент, у которого нужно заблокировать прокрутку.
     *
     * @default document.body
     */
    containerRef?: RefObject<HTMLElement>;
}

/**
 * Реакт-хук, запрещающий прокрутку содержимого на элементе.
 *
 * @example
 * const Modal: FC<ModalProps> = (props) => {
 *   const { visible } = props;
 *   const containerRef = useRef(document.documentElement);
 *
 *   usePreventScroll({ enabled: visible, containerRef });
 *
 *   ...
 * }
 */
export function usePreventScroll(options: UsePreventScrollOptions) {
    const { enabled, containerRef } = options;
    const elementRef = useRef<HTMLElement | null>(null);
    const lockedRef = useRef(false);

    useLayoutEffect(() => {
        const container = containerRef ? containerRef.current : null;

        if (elementRef.current === container) {
            return;
        }

        // Обрабатываем случай, когда ссылка на элемент поменялась,
        // а у текущего включена блокировка
        if (enabled && lockedRef.current) {
            ScrollLocker.unlock(elementRef.current);
            ScrollLocker.lock(container);
        }

        elementRef.current = container;
    });

    useLayoutEffect(() => {
        if (!enabled) {
            return;
        }

        lockedRef.current = true;
        ScrollLocker.lock(elementRef.current);

        return () => {
            lockedRef.current = false;
            ScrollLocker.unlock(elementRef.current);
        };
    }, [enabled]);
}
