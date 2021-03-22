import { RefObject, useEffect, useMemo, useRef } from 'react';

import { createFocusTrap, FocusTrapInstance, FocusTrapOptions } from '../lib/focus-trap';
import { useIsomorphicLayoutEffect as useLayoutEffect } from '../useIsomorphicLayoutEffect';
import { useRestoreFocus } from './useRestoreFocus';

export interface UseFocusTrapOptions {
    /**
     * Ссылка на элемент, внутри которого будет действовать ловушка.
     */
    scopeRef: RefObject<HTMLElement>;

    /**
     * Включить ловушку фокуса.
     */
    enabled: boolean | undefined;

    /**
     * Вернуть фокус на триггер после выключения ловушки.
     *
     * @default true
     */
    restoreFocus?: boolean;

    /**
     * Ссылка на элемент, на который нужно вернуть фокус после выключения ловушки.
     */
    restoreFocusRef?: RefObject<HTMLElement>;

    /**
     * Выставить фокус на первом фокусируемом элементе внутри ловушки.
     *
     * @default true
     */
    autoFocus?: boolean;
}

/**
 * Реакт-хук, для создания ловушки фокуса.
 *
 * @example
 * const Modal: FC<ModalProps> = (props) => {
 *   const { visible, children } = props;
 *   const scope = useRef(null);
 *
 *   useFocusTrap({ enabled: visible, scope });
 *
 *   return (
 *     <div ref={scope}>{children}</div>
 *   )
 * }
 */
export function useFocusTrap(options: UseFocusTrapOptions) {
    const { scopeRef, enabled, restoreFocusRef, restoreFocus = true, autoFocus = true } = options;
    const instance = useRef<FocusTrapInstance | null>(null);
    const ref = useRef<HTMLElement | null>(null);

    const trapOptions = useMemo<FocusTrapOptions>(() => {
        return {
            autoFocus,
        };
    }, [autoFocus]);

    useEffect(() => {
        if (instance.current) {
            instance.current.setOptions(trapOptions);
        }
    }, [trapOptions]);

    useLayoutEffect(() => {
        if (ref.current === scopeRef.current) {
            return;
        }

        ref.current = scopeRef.current;

        if (instance.current) {
            instance.current.deactivate();
            instance.current = null;
        }

        if (ref.current) {
            instance.current = createFocusTrap(ref.current, trapOptions);

            if (enabled) {
                instance.current.activate();
            }
        }
    });

    useLayoutEffect(() => {
        if (!enabled || !instance.current) {
            return;
        }

        instance.current.activate();

        return () => {
            if (instance.current) {
                instance.current.deactivate();
            }
        };
    }, [enabled]);

    useRestoreFocus({ enabled: enabled && restoreFocus, restoreFocusRef });
}
