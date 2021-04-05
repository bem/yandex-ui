import React, { Dispatch, FC, SetStateAction, useMemo, useRef } from 'react';

import { IDrawerProps } from '../Drawer';
import { noop, useDrag } from '../Drawer.utils';
import {
    cnDrawerContent,
    cnDrawerCurtain,
    cnDrawerDragObserver,
    cnDrawerHandle,
    cnDrawerOverlay,
    cnDrawerTitle,
} from '../Drawer.const';

/**
 * Промежуточное состояние компонента между событиями touchstart и touchend
 */
interface IDragStateData {
    isTargetUnderContent: boolean;
    initialScrollPosition: number;
    isScrolled: boolean;
}

/**
 * Пропы наследуются из основного компонента
 */
interface IDrawerContentProps extends IDrawerProps {
    springValue: number;
    setProgress: Dispatch<SetStateAction<number>>;
    setSpringDisabled: Dispatch<SetStateAction<boolean>>;
}

/**
 * Компонент содержимого шторки.
 *
 * При использовании Popup мы не знаем в какой конкретно
 * момент содержимое монтируется/размонтируется, если
 * прокидывать его напрямую без обёрток.
 */
export const DrawerContent: FC<IDrawerContentProps> = ({
    dragDisabled,
    visible,
    onClose = noop,
    springValue,
    direction = 'bottom',
    maxSize,
    titleComponent,
    children,
    setSpringDisabled,
    setProgress,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const axis = direction === 'bottom' ? 'y' : 'x';
    const inverted = direction === 'left' ? -1 : 1;

    const springOpacity = Math.max(springValue, 0);
    const springTransform =
        axis === 'x'
            ? `translate3d(${(1 - springValue) * 100 * inverted}%,0,0)`
            : `translate3d(0,${(1 - springValue) * 100 * inverted}%,0)`;

    const curtainStyle = useMemo(
        () => ({ transform: springTransform, ...(maxSize && { [axis === 'x' ? 'maxWidth' : 'maxHeight']: maxSize }) }),
        [springTransform, maxSize, axis],
    );

    /**
     * Обработчик drag событий с корневого DOM элемента шторки
     */
    const { dragProps } = useDrag<IDragStateData>((dragState) => {
        if (!visible || !contentRef.current) return;

        const {
            velocity: { x: vx, y: vy },
            movement: { x: mx, y: my },
            first,
            last,
            data,
            event,
        } = dragState;

        const drawerSize = axis === 'x' ? contentRef.current.clientWidth : contentRef.current.clientHeight;
        const movement = inverted * (axis === 'x' ? mx : my);
        const velocity = inverted * (axis === 'x' ? vx : vy);

        if (first) {
            data.isTargetUnderContent = contentRef.current.contains(event.target as HTMLElement);
            data.initialScrollPosition = contentRef.current.scrollTop;
            data.isScrolled = data.initialScrollPosition !== 0;
        } else {
            data.isScrolled = data.isScrolled || data.initialScrollPosition - contentRef.current.scrollTop < 0;
        }

        // предотвращает инерционный проскролл родительских элементов, если это возможно
        if (event.cancelable && event.type === 'touchmove') {
            if (data.isTargetUnderContent) {
                // элемент проскроллен до верхней границы
                if (contentRef.current.scrollTop <= 0 && my > 0) {
                    event.preventDefault();
                }

                // элемент проскроллен до нижней границы
                if (
                    contentRef.current.scrollHeight - contentRef.current.scrollTop <= contentRef.current.clientHeight &&
                    my < 0
                ) {
                    event.preventDefault();
                }
            } else {
                event.preventDefault();
            }
        }

        // ничего не делаем когда жест происходит одновременно с проскроллом
        // или если шторка в статичном состоянии
        // @see SERP-107544
        if (dragDisabled || (data.isTargetUnderContent && data.isScrolled)) {
            return;
        }

        // жест завершен, возвращаем шторку в открытое положение, если
        // скорость была недостаточной и, закрываем если наоборот
        if (last) {
            setSpringDisabled(false);

            if (Math.abs(velocity) >= 0.1) {
                return velocity > 0 ? onClose() : setProgress(1);
            } else if (movement / drawerSize >= 0.3) {
                return onClose();
            }

            return setProgress(1);
        }

        if (movement > 0) {
            setSpringDisabled(true);

            const progress = Math.max(0, 1 - movement / drawerSize);

            if (progress === 0) {
                return onClose();
            }

            return setProgress(progress);
        }
    });

    return (
        <div className={cnDrawerDragObserver} {...dragProps}>
            <div className={cnDrawerOverlay} style={{ opacity: springOpacity }} onClick={onClose} />
            <div className={cnDrawerCurtain} style={curtainStyle}>
                <div className={cnDrawerHandle} style={{ opacity: springOpacity }} />
                {titleComponent && <div className={cnDrawerTitle}>{titleComponent}</div>}
                <div className={cnDrawerContent} ref={contentRef}>
                    {children}
                </div>
            </div>
        </div>
    );
};
