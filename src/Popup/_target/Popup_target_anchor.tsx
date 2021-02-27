import React, { FC, RefObject, CSSProperties } from 'react';
import { withBemMod } from '@bem-react/core';

import { PopperAnyModifiers, Direction, Boundary, usePopper } from '../../usePopper';
import { useForkRef } from '../../useForkRef';
import { IPopupProps, cnPopup, directions } from '../index';

export interface IPopupTargetAnchorProps {
    /**
     * Элемент, относительно которого позиционируется попап
     */
    anchor?: RefObject<HTMLElement>;

    /**
     * Направления раскрытия блока
     *
     * @default ['bottom-start', 'bottom', 'bottom-end',
     * 'top-start', 'top', 'top-end', 'right-start',
     * 'right', 'right-end', 'left-start', 'left', 'left-end']
     */
    direction?: Direction | Direction[];

    /**
     * Отступ попапа относительно основного направления
     *
     * @default 0
     */
    mainOffset?: number;

    /**
     * Закрепляет положение попапа после открытия
     */
    motionless?: boolean;

    /**
     * Отступ попапа относительно второстепенного направления
     *
     * @default 0
     */
    secondaryOffset?: number;

    /**
     * Отступ хвостика от края попапа
     *
     * @default 0
     */
    tailOffset?: number;

    /**
     * Позиционирование попапа относительно переданного элемента
     */
    target?: 'anchor';

    /**
     * Отступ от края окна браузера
     *
     * @default 16
     */
    viewportOffset?: number;

    /**
     * Пользовательский набор модификаторов для popperjs
     */
    modifiers?: PopperAnyModifiers;

    /**
     * Ссылка на элемент или ссылки на элементы, в которые должен вписываться попап
     */
    boundary?: Boundary;
}

// Устанавливаем отрицательные координаты для избежания моргания при монтировании попапа.
const initialPosition: CSSProperties = { top: -9999, left: -9999, position: 'fixed' };

/**
 * Позиционирует попап относительно элемента, который указан в свойстве `anchor`.
 * @param {IPopupTargetAnchorProps} props
 */
export const withTargetAnchor = withBemMod<IPopupTargetAnchorProps, IPopupProps>(
    cnPopup(),
    { target: 'anchor' },
    (Popup) => {
        const WithTargetAnchor: FC<IPopupTargetAnchorProps & IPopupProps> = (props) => {
            const {
                anchor,
                direction = directions,
                hasTail,
                mainOffset = hasTail ? 0 : 4,
                modifiers,
                motionless,
                secondaryOffset,
                style,
                tailOffset,
                target,
                viewportOffset,
                visible = false,
                innerRef,
                tailRef,
                boundary,
                ...otherProps
            } = props;

            const { setPopupRef, setArrowRef } = usePopper({
                anchorRef: anchor as RefObject<HTMLElement>,
                children: otherProps.children,
                placement: direction,
                motionless,
                enabled: visible,
                marginThreshold: viewportOffset,
                modifiers,
                offset: [secondaryOffset, mainOffset],
                unsafe_tailOffset: tailOffset,
                boundary,
            });

            return (
                <Popup
                    {...otherProps}
                    hasTail={hasTail}
                    innerRef={useForkRef(setPopupRef, innerRef)}
                    style={{ ...initialPosition, ...style }}
                    tailRef={useForkRef(setArrowRef, tailRef)}
                    unstable_essentialRefs={[anchor as RefObject<HTMLElement>]}
                    visible={visible}
                />
            );
        };

        return WithTargetAnchor;
    },
);
