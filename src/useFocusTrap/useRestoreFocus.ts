import { RefObject, useEffect, useRef } from 'react';

import { canUseDOM } from '../lib/canUseDOM';

export interface UseRestoreFocusOptions {
    /**
     * При включении запоминает элемент, на котором находится фокус.
     */
    enabled: boolean | undefined;

    /**
     * Ссылка на элемент, на который нужно вернуть фокус.
     *
     * @default {document.activeElement}
     */
    restoreFocusRef?: RefObject<HTMLElement>;
}

/**
 * Реакт-хук, позволяющий вернуть фокус на последний фокусируемый элемент.
 *
 * @example
 * const Modal: FC<ModalProps> = (props) => {
 *   const { visible, nodeToRestore } = props;
 *
 *   useRestoreFocus({ enabled: visible, nodeToRestore });
 *   ...
 * }
 */
export function useRestoreFocus(options: UseRestoreFocusOptions) {
    const { enabled, restoreFocusRef } = options;
    const initialActiveElement = useRef<HTMLElement | null>(null);
    const ref = useRef<HTMLElement | null>(null);

    if (enabled && !initialActiveElement.current) {
        // React программно вызывает фокус для элементов, у которых есть свойство `autoFocus`
        // поэтому нам важно перехватить активный элемент на этапе рендера
        initialActiveElement.current = canUseDOM() ? (document.activeElement as HTMLElement | null) : null;
    }

    useEffect(() => {
        ref.current = restoreFocusRef ? restoreFocusRef.current : null;
    });

    useEffect(() => {
        if (!enabled) {
            return;
        }

        return () => {
            const element = ref.current || initialActiveElement.current;
            initialActiveElement.current = null;
            ref.current = null;

            if (element && element.focus && document.body.contains(element) && element !== document.activeElement) {
                element.focus();
            }
        };
    }, [enabled]);
}
