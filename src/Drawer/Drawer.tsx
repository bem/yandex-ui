import React, { FC, PropsWithChildren, ReactNode, useEffect, useMemo, useState } from 'react';
import { useComponentRegistry } from '@bem-react/di';

import { IPopupProps } from '../Popup/Popup';
import { usePreventScroll } from '../usePreventScroll';

import { IDrawerRegistry } from './Drawer.registry';
import { useSpring, useClientHeight, noop } from './Drawer.utils';
import { DrawerContent } from './Content/Drawer-Content';
import { cnDrawer } from './Drawer.const';
import './Drawer.css';

type PartialPopupProps = Pick<IPopupProps, 'keepMounted' | 'className' | 'innerRef' | 'zIndex' | 'visible' | 'scope'>;

export interface IDrawerAnimationParams {
    /**
     * Основные параметры анимации для rebound
     * @see https://github.com/facebook/rebound-js
     *
     * @default 230
     */
    tension: number;
    /**
     * @default 24
     */
    friction: number;

    /**
     * Отключает спринговые анимации (напр. для прогонов автотестов)
     */
    disabled?: boolean;

    /**
     * Отключает анимации на момент перетаскивания шторки пальцем (таким образом делая их отзывчивее)
     */
    dragImmediate?: boolean;
}

export interface IDrawerProps extends PropsWithChildren<PartialPopupProps> {
    /**
     * Функция, которая будет вызвана при попытке закрытия шторки.
     */
    onClose?: () => void;

    /**
     * Функция, которая будет вызвана при завершении анимации закрытия шторки.
     */
    onCloseEnd?: () => void;

    /**
     * Функция, которая будет вызвана при завершении анимации открытия шторки.
     */
    onOpenEnd?: () => void;

    /**
     * Компонент шапки шторки.
     */
    titleComponent?: ReactNode;

    /**
     * Делает шторку "статичной"
     */
    dragDisabled?: boolean;

    /**
     * Меняет внешний вид для режима "шторка внутри шторки".
     */
    nested?: boolean;

    /**
     * Направление, откуда появляется шторка.
     *
     * @default 'bottom'
     */
    direction?: 'bottom' | 'left' | 'right';

    /**
     * Максимальный размер шторки (ширина или высота в зависимости от direction).
     * Принимает любое валидное CSS значение.
     */
    maxSize?: string;

    /**
     * Параметры анимации шторки.
     */
    animation?: IDrawerAnimationParams;

    /**
     * Блокировка скролла до полного закрытия шторки
     */
    preventScrollOnClose?: boolean;

    /**
     * Выставить фокус на первый интерактивный элемент
     * в пределах шторки
     *
     * @default false
     * @deprecated в следующей мажорной версии будет true по умолчанию
     */
    autoFocus?: boolean;

    /**
     * Атрибут aria-hidden на корневом элементе
     */
    ariaHidden?: boolean
}

const defaultAnimation: IDrawerAnimationParams = {
    dragImmediate: false,
    disabled: false,
    tension: 230,
    friction: 24,
};

/**
 * Используется для создания шторки.
 * @param {IDrawerProps} props
 */
export const Drawer: FC<IDrawerProps> = (props) => {
    const { Popup } = useComponentRegistry<IDrawerRegistry>(cnDrawer());

    const {
        onOpenEnd = noop,
        className,
        visible,
        nested,
        direction = 'bottom',
        innerRef,
        preventScrollOnClose,
        animation = defaultAnimation,
        ariaHidden,
    } = props;

    // прогресс открытия шторки от 0 до 1
    const [progress, setProgress] = useState(0);

    // признак того, что анимация временно отключена (напр. на время drag жеста)
    const [springDisabled, setSpringDisabled] = useState(false);

    // спринговое значение прогресса и его производные
    const springImmediate = (animation.dragImmediate && springDisabled) || animation.disabled;
    const springValue = useSpring(progress, animation.tension, animation.friction, springImmediate);
    const springVisible = springValue > 0;

    // Эмитит событие при открытии шторки
    useEffect(() => {
        if (springValue !== 1) return;

        onOpenEnd();
    }, [springValue]);

    // решает баг в iOS: в альбомной ориентации fixed элементы с
    // height: 100% показываются некорректно если виден navigation bar
    const clientHeight = useClientHeight();
    const popupStyle = useMemo(() => ({ height: clientHeight && clientHeight + 'px' }), [clientHeight]);

    usePreventScroll({ enabled: preventScrollOnClose ? springVisible : visible });

    useEffect(() => {
        setSpringDisabled(false);
        setProgress(visible ? 1 : 0);
    }, [visible, animation]);

    return (
        <Popup
            className={cnDrawer({ visible: springVisible, direction, nested }, [className])}
            visible={springVisible}
            innerRef={innerRef}
            style={popupStyle}
            keepMounted={props.keepMounted}
            zIndex={props.zIndex}
            scope={props.scope}
            aria-hidden={ariaHidden}
        >
            <DrawerContent
                {...props}
                springValue={springValue}
                setProgress={setProgress}
                setSpringDisabled={setSpringDisabled}
            />
        </Popup>
    );
};

Drawer.displayName = cnDrawer();
