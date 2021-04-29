import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseTooltipStateProps {
    /**
     * Показывает подсказку сразу видимой
     *
     * @default false
     */
    defaultVisible?: boolean;

    /**
     * Задержка в `ms` перед открытием подсказки
     *
     * @default 0
     */
    openDelay?: number;

    /**
     * Задержка в `ms` перед закрытием подсказки
     *
     * @default 0
     */
    closeDelay?: number;
}

export interface UseTooltipStateResult {
    visible: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export function useTooltipState(props: UseTooltipStateProps): UseTooltipStateResult {
    const { defaultVisible = false, openDelay = 0, closeDelay = 0 } = props;
    const [visible, setVisible] = useState(defaultVisible);
    const openTimeoutRef = useRef<number>();
    const closeTimeoutRef = useRef<number>();

    const changeVisibility = useCallback(
        (value: boolean) => {
            const resetRef = value ? closeTimeoutRef : openTimeoutRef;
            const timeoutRef = value ? openTimeoutRef : closeTimeoutRef;
            const delay = value ? openDelay : closeDelay;

            if (resetRef.current) {
                clearTimeout(resetRef.current);
                resetRef.current = undefined;
            }

            if (delay > 0) {
                if (!timeoutRef.current) {
                    timeoutRef.current = window.setTimeout(() => {
                        timeoutRef.current = undefined;
                        setVisible(value);
                    }, delay);
                }
            } else {
                setVisible(value);
            }
        },
        [openDelay, closeDelay],
    );

    const showTooltip = useCallback(() => changeVisibility(true), [changeVisibility]);
    const hideTooltip = useCallback(() => changeVisibility(false), [changeVisibility]);
    const toggleTooltip = useCallback(() => changeVisibility(!visible), [visible, changeVisibility]);

    useEffect(() => {
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            clearTimeout(openTimeoutRef.current);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    return {
        visible,
        open: showTooltip,
        close: hideTooltip,
        toggle: toggleTooltip,
    };
}
