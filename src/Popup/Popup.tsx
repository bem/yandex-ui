import React, {
    RefObject,
    ReactNode,
    FC,
    CSSProperties,
    useEffect,
    useState,
    ReactElement,
    Ref,
    useRef,
    useCallback,
    MouseEventHandler,
} from 'react';
import { createPortal } from 'react-dom';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { canUseDOM } from '../lib/canUseDOM';
import { mergeAllRefs } from '../lib/mergeRefs';
import { IPopupRegistry } from './Popup.registry';

import './Popup.css';
import { useUpdateEffect } from '../useUpdateEffect';
import { OnClose, LayerManager } from '../LayerManager/LayerManager';

export type Direction =
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'right-top'
    | 'right-center'
    | 'right-bottom'
    | 'left-top'
    | 'left-center'
    | 'left-bottom';

export type Position = {
    top: number;
    left: number;
};

export type OptionalPosition = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
};

export type DrawingParams = {
    direction: Direction;
    height: number;
    left: number;
    top: number;
    width: number;
};

export interface IPopupProps {
    /**
     * Дополнительный контент после содержимого попапа
     */
    addonAfter?: ReactNode;

    /**
     * Дополнительный контент перед содержимым попапа
     */
    addonBefore?: ReactNode;

    /**
     * Задает направление хвостика. Например, если указано значение `bottom-center` — хвостик выходит из центра снизу.
     *
     * Свойство `direction` необходимо использовать без модификатора `target_anchor`.
     * Чтобы задать направление раскрытия для попапа с модификатором `target_anchor`,
     * установите свойство `directions`
     */
    direction?: Direction;

    /**
     * Вызывает дополнительный рендер после создания
     * @deprecated Используйте `visible`
     */
    forceRender?: boolean;

    /**
     * Включает/отключает хвостик у попапа
     */
    hasTail?: boolean;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: Ref<HTMLDivElement>;

    /**
     * Сохраняет контейнер в DOM после создания
     *
     * @default true
     */
    keepMounted?: boolean;

    /**
     * Задает позицию попапа. Свойство `position` необходимо использовать без модификатора `target_anchor`
     */
    position?: OptionalPosition;

    /**
     * Ссылка на DOM-элемент, в котором размещается попап
     *
     * Важно, чтобы контейнер имел `position: relative` для корректного позициоинирования.
     *
     * @default document.body
     */
    scope?: RefObject<HTMLElement>;

    /**
     * Задает позицию хвостика. Свойство `tailPosition` необходимо использовать без модификатора `target_anchor`.
     */
    tailPosition?: Position;

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
     * Обработчик, вызывающийся после нажатия на клавишу esc либо мышкой на область вне контейнера
     */
    onClose?: OnClose;

    /**
     * Список ссылок на DOM-узлы в рамках которых не нужно отслеживать нажатия
     *
     * @internal
     */
    unstable_essentialRefs?: RefObject<HTMLElement>[];

    /**
     * DOM-узел в рамках которого не нужно отслеживать нажатие
     *
     * @internal
     */
    unstable_hostRef?: RefObject<HTMLElement>;

    /**
     * Обработчик, вызываемый при срабатывании события click
     */
    onClick?: MouseEventHandler<HTMLDivElement>;
}

type PopupInternalProps = IPopupProps & {
    onOutsideClick?: (event: any) => void;
    onEscapeKeyDown?: (event: any) => void;
};

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
    direction,
    forceRender,
    hasTail,
    innerRef,
    keepMounted = true,
    position,
    scope = { current: canUseDOM() ? document.body : null },
    style,
    tailPosition,
    tailRef,
    tailSize,
    visible,
    zIndex,
    unstable_onRenderTail,
    onClose,
    unstable_essentialRefs = [],
    unstable_hostRef,
    // TODO: https://st.yandex-team.ru/ISL-8670
    onOutsideClick,
    onEscapeKeyDown,
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
}: PopupInternalProps) => {
    const [isFirstRender, forceUpdate] = useState(true);
    const containerRef = useRef(null);

    useUpdateEffect(() => {
        if (isFirstRender && visible) {
            forceUpdate(false);
        }
    }, []);

    useEffect(() => {
        console.assert(
            onOutsideClick === undefined || onEscapeKeyDown === undefined,
            'Использование функции "withOutsideClick" является устаревшим API. ' +
                'Для закрытия используйте свойство "onClose" без использования "withOutsideClick".',
        );

        if (isFirstRender && (forceRender || visible)) {
            forceUpdate(false);
        }
    }, []);

    const onCloseRequest = useCallback((event, source) => {
        if (source === 'esc') {
            if (onEscapeKeyDown !== undefined) {
                onEscapeKeyDown(event);
            }
        } else if (onOutsideClick !== undefined) {
            onOutsideClick(event);
        }
        if (onClose !== undefined) {
            onClose(event, source);
        }
    }, [onEscapeKeyDown, onOutsideClick, onClose]);

    const { Tail } = useComponentRegistry<IPopupRegistry>(cnPopup());
    const hostRef = unstable_hostRef || containerRef;

    if ((!visible && !keepMounted) || !canUseDOM() || scope.current === null || isFirstRender) {
        return null;
    }

    return createPortal(
        <LayerManager visible={visible} onClose={onCloseRequest} essentialRefs={[hostRef, ...unstable_essentialRefs]}>
            <div
                {...props}
                className={cnPopup({ visible, direction }, [className])}
                ref={mergeAllRefs(containerRef, innerRef)}
                style={{ ...style, ...position, zIndex }}
                onClick={onClick}
            >
                {addonBefore}
                {typeof children === 'function' ? children({ tailRef }) : children}
                {addonAfter}
                {unstable_onRenderTail &&
                    unstable_onRenderTail(
                        <Tail innerRef={tailRef} style={{ ...tailPosition, height: tailSize, width: tailSize }} />,
                    )}
                {!unstable_onRenderTail && hasTail && (
                    <Tail innerRef={tailRef} style={{ ...tailPosition, height: tailSize, width: tailSize }} />
                )}
            </div>
        </LayerManager>,
        scope.current,
    );
};

Popup.displayName = cnPopup();
