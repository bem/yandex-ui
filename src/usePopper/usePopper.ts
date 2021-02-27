import { ReactNode, RefObject, useMemo, useRef, useState } from 'react';
import { Instance, Modifier, VirtualElement } from '@popperjs/core';

import { isEqual } from '../lib/isEqual';
import { useIsomorphicLayoutEffect as useLayoutEffect } from '../useIsomorphicLayoutEffect';
import { Options, createPopper } from './createPopper';
import { Direction } from './directions';
import { Boundary } from './types';
import { getElementsFromRefs } from './utils';

export type PopupHookProps = {
    /**
     * Ссылка на DOM-элемент относительно которого нужно показать попап
     */
    anchorRef: RefObject<HTMLElement | VirtualElement>;
    /**
     * Содержимое попапа
     */
    children?: ReactNode;
    /**
     * Значение относительно краев попапа за которое хвостик не должен вылезать
     */
    arrowMarginThreshold?: number;
    /**
     * Направление для раскрытия попапа
     */
    placement?: Direction | Direction[];
    /**
     * Включает логику расчетов
     */
    enabled?: boolean;
    /**
     * Значение относительно краев контейнера при котором нужно сменить направление
     */
    marginThreshold?: number;
    /**
     * Пользовательский набор модификаторов
     */
    modifiers?: Partial<Modifier<any, any>>[];
    /**
     * Отступы попапа относительно двух направлений
     */
    offset?: [number | undefined, number | undefined];
    /**
     * Отступ хвостика относительно основного направления
     */
    unsafe_tailOffset?: number;
    /**
     * Закрепляет положение попапа после открытия
     */
    motionless?: boolean;
    /**
     * Ссылка на элемент или ссылки на элементы, в которые должен вписываться попап
     */
    boundary?: Boundary;
};

export type PopupHookResult = {
    /**
     * Инстанс popper
     */
    popper: Instance | null;
    /**
     * Функция устанавливающая ссылку на хвостик
     */
    setArrowRef: (node: HTMLElement | null) => void;
    /**
     * Функция устанавливающая ссылку на попап
     */
    setPopupRef: (node: HTMLElement | null) => void;
};

/**
 * Реакт-хук, реализующий позиционирование попапа при помощи popper.
 */
export function usePopper(props: PopupHookProps): PopupHookResult {
    const {
        anchorRef,
        arrowMarginThreshold = 4,
        placement = 'bottom',
        enabled = true,
        marginThreshold = 16,
        modifiers = [],
        motionless,
        offset,
        unsafe_tailOffset,
        children,
        boundary,
    } = props;
    const placements = Array.isArray(placement) ? placement : ([placement] as Direction[]);

    const popperRef = useRef<Instance | null>(null);
    const prevPopperOptions = useRef<Options | null>(null);

    // Используем useState вместо useRef для установки ссылок, т.к. нам
    // важно выполнить обновление в момент установки, а не на следующем тике.
    const [popupNode, setPopupNode] = useState<HTMLElement>();
    const [arrowNode, setArrowNode] = useState<HTMLElement>();

    const popperOptions = useMemo(() => {
        const [placement, ...fallbackPlacements] = placements;
        const popperBoundary = getElementsFromRefs(boundary);

        const options: Options = {
            // Добавляем children в опции popper для того,
            // чтобы обновить координаты при изменении контента.
            children,
            // При инициализации указываем единственное направление,
            // все остальные направления применяются в модификаторе flip.
            placement,
            modifiers: [
                {
                    name: 'eventListeners',
                    enabled: !motionless,
                },
                {
                    name: 'offset',
                    options: {
                        offset,
                        tailOffset: unsafe_tailOffset,
                    },
                },
                {
                    name: 'computeStyles',
                    options: {
                        gpuAcceleration: false,
                    },
                },
                {
                    name: 'preventOverflow',
                    options: {
                        // Свойство позволяет учитывать границы в overflow контейнере.
                        altBoundary: true,
                        boundary: popperBoundary,
                    },
                },
                {
                    name: 'arrow',
                    enabled: Boolean(arrowNode),
                    options: {
                        element: arrowNode,
                        padding: arrowMarginThreshold,
                    },
                },
                {
                    name: 'flip',
                    options: {
                        padding: marginThreshold,
                        fallbackPlacements,
                        // Свойство позволяет учитывать границы в overflow контейнере.
                        altBoundary: true,
                        boundary: popperBoundary,
                    },
                },
                {
                    name: 'hide',
                    options: {
                        boundary: popperBoundary,
                    },
                },
                ...modifiers,
            ],
        };

        // Отдаем объект из кэша если значения в опциях не изменились,
        // это позволяет более эффективно производить обновления и не требовать
        // от пользователей кэшировать устанавливаемые свойства.
        if (isEqual(prevPopperOptions.current, options)) {
            return prevPopperOptions.current || options;
        }

        return (prevPopperOptions.current = options);
    }, [
        placements,
        offset,
        arrowNode,
        arrowMarginThreshold,
        motionless,
        marginThreshold,
        unsafe_tailOffset,
        modifiers,
        children,
        boundary,
    ]);

    useLayoutEffect(() => {
        if (popperRef.current !== null) {
            popperRef.current.setOptions(popperOptions);
        }
    }, [popperOptions]);

    useLayoutEffect(() => {
        // NOTE: В данный момент не реализован cleanup для случая, когда якорь был удален из документа,
        // т.к. мы используем ref-объект, а не прямую ссылку на DOM-элемент.
        if (anchorRef.current && popupNode && enabled) {
            popperRef.current = createPopper(anchorRef.current, popupNode, popperOptions);
            popperRef.current.forceUpdate();
        }

        return () => {
            if (popperRef.current !== null) {
                popperRef.current.destroy();
                popperRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorRef, popupNode, enabled]);

    return {
        popper: popperRef.current,
        setArrowRef: setArrowNode as any,
        setPopupRef: setPopupNode as any,
    };
}
