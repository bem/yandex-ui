import React, { RefObject, ReactNode, FC, CSSProperties, ReactElement, Ref, useRef, MouseEventHandler } from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { useForkRef } from '../useForkRef';
import { PortalExtendableProps, Portal } from '../Portal';
import { useOverlay, OnClose } from '../useOverlay';
import { IPopupRegistry } from './Popup.registry';
import './Popup.css';

export interface IPopupProps extends PortalExtendableProps {
    /**
     * Дополнительный контент после содержимого попапа
     */
    addonAfter?: ReactNode;

    /**
     * Дополнительный контент перед содержимым попапа
     */
    addonBefore?: ReactNode;

    /**
     * Включает/отключает хвостик у попапа
     */
    hasTail?: boolean;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: Ref<HTMLDivElement>;

    /**
     * Ссылка на DOM-элемент хвостика
     */
    tailRef?: Ref<HTMLDivElement>;

    /**
     * Задает размер хвостика
     */
    tailSize?: number;

    /**
     * Делает попап видимым
     */
    visible?: boolean;

    /**
     * Задает слой `z-index`
     */
    zIndex?: number;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Html атрибут `style`
     */
    style?: CSSProperties;

    /**
     * Функция, вызывающаяся при отрисовке хвостика.
     * Вызывается вне зависимости от наличия флага `hasTail`.
     */
    unstable_onRenderTail?: (tail: ReactElement) => ReactElement;

    /**
     * Содержимое попапа
     */
    children?: ReactNode | ((props: { tailRef?: Ref<HTMLDivElement> }) => ReactNode);

    /**
     * Обработчик, вызывающийся после нажатия на клавишу esc,
     * либо мышкой на область вне контейнера
     */
    onClose?: OnClose;

    /**
     * Список ссылок на DOM-узлы в рамках которых не нужно отслеживать нажатия
     *
     * @internal
     */
    unstable_essentialRefs?: RefObject<HTMLElement>[];

    /**
     * Обработчик, вызываемый при срабатывании события click
     */
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const cnPopup = cn('Popup2');

/**
 * Компонент для создания всплывающего окна (попапа).
 * @param {IPopupProps} props
 */
export const Popup: FC<IPopupProps> = ({
    addonAfter,
    addonBefore,
    children,
    className,
    hasTail,
    innerRef,
    keepMounted,
    scope,
    style,
    tailRef,
    tailSize,
    visible,
    zIndex,
    unstable_onRenderTail,
    onClose,
    unstable_essentialRefs = [],
    onClick,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    theme: _theme,
    // @ts-ignore
    view: _view,
    // @ts-ignore
    nonvisual: _nonvisual,
    ...props
}: IPopupProps) => {
    const containerRef = useRef(null);
    const { Tail } = useComponentRegistry<IPopupRegistry>(cnPopup());

    useOverlay({ visible, onClose, essentialRefs: [containerRef, ...unstable_essentialRefs] });

    return (
        <Portal scope={scope} visible={visible} keepMounted={keepMounted}>
            <div
                {...props}
                className={cnPopup({ visible }, [className])}
                ref={useForkRef(containerRef, innerRef)}
                style={{ ...style, zIndex }}
                onClick={onClick}
            >
                {addonBefore}
                {typeof children === 'function' ? children({ tailRef }) : children}
                {addonAfter}
                {unstable_onRenderTail &&
                    unstable_onRenderTail(<Tail ref={tailRef} style={{ height: tailSize, width: tailSize }} />)}
                {!unstable_onRenderTail && hasTail && (
                    <Tail ref={tailRef} style={{ height: tailSize, width: tailSize }} />
                )}
            </div>
        </Portal>
    );
};

Popup.displayName = cnPopup();
