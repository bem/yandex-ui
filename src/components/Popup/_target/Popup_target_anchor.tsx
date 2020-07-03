import React, { RefObject, ComponentClass, PureComponent, createRef } from 'react';
import { withBemMod } from '@bem-react/core';

import { Defaultize } from '../../../typings/utility-types';
import { canUseDOM } from '../../../lib/canUseDOM';
import { mergeAllRefs } from '../../../lib/mergeRefs';
import { Direction, IPopupProps, Position, cnPopup, DrawingParams as CalcDrawingParams } from '../Popup';

const VIEWPORT_ACCURACY_FACTOR = 0.99;

const checkMainDirection = (direction: string, mainFirstDirection: string, mainSecondDirection?: string) =>
    direction.indexOf(mainFirstDirection) === 0 ||
    (mainSecondDirection && direction.indexOf(mainSecondDirection) === 0);

const checkSecondaryDirection = (direction: string, secondaryDirection: string) =>
    direction.indexOf('-' + secondaryDirection) > 0;

const defaultProps = {
    directions: [
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'top-left',
        'top-center',
        'top-right',
        'right-top',
        'right-center',
        'right-bottom',
        'left-top',
        'left-center',
        'left-bottom',
    ],
    mainOffset: 0,
    secondaryOffset: 0,
    tailOffset: 0,
    viewportOffset: 0,
    scope: { current: canUseDOM() ? document.body : null },
};

const initialPosition = { top: -9999, left: -9999 };

type PopupDimensions = {
    area: number;
    height: number;
    width: number;
    popupHeight: number;
    popupWidth: number;
};

type AnchorDimensions = {
    left: number;
    top: number;
    height: number;
    width: number;
};

type ViewportDimensions = {
    top: number;
    left: number;
    bottom: number;
    right: number;
};

type DrawingParams = {
    direction: Direction;
    popupPosition: Position;
    tailPosition: Position;
};

export interface IPopupTargetAnchorProps {
    /**
     * Элемент, относительно которого позиционируется попап
     */
    anchor?: RefObject<HTMLElement>;

    /**
     * Направления раскрытия блока
     *
     * @default ['bottom-left', 'bottom-center', 'bottom-right',
     * 'top-left', 'top-center', 'top-right', 'right-top',
     * 'right-center', 'right-bottom', 'left-top', 'left-center', 'left-bottom']
     */
    directions?: Direction[];

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
     * @default 0
     */
    viewportOffset?: number;

    /**
     * Расчет параметров для отрисовки
     */
    getPossibleDrawingParams?: (drawingParams: CalcDrawingParams[]) => void;
}

type DefaultPropKeys = keyof typeof defaultProps;
type WithTargetAnchorProps = Defaultize<IPopupTargetAnchorProps & IPopupProps, DefaultPropKeys>;
type WithTargetAnchorState = { direction: Direction; forwarded: {} };

/**
 * Позиционирует попап относительно элемента, который указан в свойстве `anchor`.
 * @param {IPopupTargetAnchorProps} props
 */
export const withTargetAnchor = withBemMod<IPopupTargetAnchorProps, IPopupProps>(
    cnPopup(),
    { target: 'anchor' },
    (Popup) =>
        class WithTargetAnchor extends PureComponent<WithTargetAnchorProps, WithTargetAnchorState> {
            static readonly defaultProps = defaultProps;

            readonly state: WithTargetAnchorState = {
                direction: 'bottom-left',
                forwarded: {},
            };

            /**
             * Контейнер с ссылкой на DOM элемент попапа.
             */
            private readonly popupRef = createRef<HTMLDivElement>();

            /**
             * Контейнер с ссылкой на DOM элемент хвостика попапа.
             */
            private readonly tailRef = createRef<HTMLDivElement>();

            constructor(props: WithTargetAnchorProps) {
                super(props);

                console.assert(
                    props.anchor !== undefined,
                    'Для работы "withTargetAnchor" требуется наличие свойства "anchor".',
                );

                console.assert(
                    props.directions.length !== 0,
                    'Для работы "withTargetAnchor" требуется наличие хотя бы одного направления для раскрытия.',
                );
            }

            componentDidMount() {
                if (this.props.visible) {
                    this.setState({ forwarded: {} });
                }

                if (this.shouldSubscribeToEvents()) {
                    this.subscribeToEvents();
                }
            }

            componentDidUpdate(prevProps: WithTargetAnchorProps, prevState: WithTargetAnchorState) {
                // При ленивой инициализации на первом рендере не проставляются ссылки на контейнер.
                if (this.popupRef.current === null && this.props.visible) {
                    requestAnimationFrame(() => {
                        this.setState({ forwarded: {} });
                    });
                }

                if (
                    prevProps.visible !== this.props.visible ||
                    prevProps.anchor !== this.props.anchor ||
                    prevState.forwarded !== this.state.forwarded
                ) {
                    this.updateRefsPosition();
                }

                if (this.shouldSubscribeToEvents()) {
                    this.subscribeToEvents();
                } else {
                    this.unsubscribeFromEvents();
                }
            }

            componentWillUnmount() {
                this.unsubscribeFromEvents();
            }

            render() {
                const {
                    anchor,
                    directions,
                    mainOffset,
                    motionless,
                    secondaryOffset,
                    tailOffset,
                    target,
                    viewportOffset,
                    getPossibleDrawingParams,
                    ...props
                } = this.props;

                if (canUseDOM() && getPossibleDrawingParams !== undefined) {
                    getPossibleDrawingParams(this.getPossibleDrawingParams());
                }

                return (
                    <Popup
                        {...props}
                        direction={this.state.direction}
                        innerRef={mergeAllRefs(this.popupRef, this.props.innerRef)}
                        tailRef={mergeAllRefs(this.tailRef, this.props.tailRef)}
                        // Выставляем отрицательные координаты при первой отрисовке,
                        // для того, чтобы не было морганий при монтировании компонента,
                        // в дальнейшем позиция будет обновляться напрямую в DOM узле.
                        position={initialPosition}
                    />
                );
            }

            private shouldSubscribeToEvents() {
                return this.props.visible && !this.props.motionless;
            }

            private subscribeToEvents = () => {
                window.addEventListener('scroll', this.updateRefsPosition);
                window.addEventListener('resize', this.updateRefsPosition);
                document.addEventListener('documentchange', this.updateRefsPosition);
            };

            private unsubscribeFromEvents = () => {
                window.removeEventListener('scroll', this.updateRefsPosition);
                window.removeEventListener('resize', this.updateRefsPosition);
                document.removeEventListener('documentchange', this.updateRefsPosition);
            };

            /**
             * Обновлять стили, отвечающие за позиционирование у DOM элемента попапа и хвостика.
             */
            private updateRefsPosition = () => {
                requestAnimationFrame(() => {
                    const { directions } = this.props;
                    const { direction, popupPosition, tailPosition } = this.getDrawingParams(directions);

                    if (this.state.direction !== direction) {
                        this.setState({ direction });
                    }

                    // Обновляем стили сразу у DOM узла, а не через setState,
                    // т.к. это не вызывает лишний раз re-render и повышает производительность.
                    if (this.popupRef.current !== null) {
                        this.popupRef.current.style.top = `${popupPosition.top}px`;
                        this.popupRef.current.style.left = `${popupPosition.left}px`;
                    }
                    if (this.tailRef.current !== null) {
                        this.tailRef.current.style.top = `${tailPosition.top}px`;
                        this.tailRef.current.style.left = `${tailPosition.left}px`;
                    }
                });
            };

            /* eslint-disable max-len */
            /**
             * Вычисляет лучшие параметры отображения. Под лучшими параметрами понимаются параметры для первого подходящего
             * направления из directions, которое может обеспечить размещение 99% (VIEWPORT_ACCURACY_FACTOR) площади попапа.
             * Если подходящего направления не найдено, то предпочтение отдается направлению, в котором попап открывался
             * последний раз, или первому направлению из списка.
             *
             * @param directions Массив направлений
             */
            /* eslint-enable max-len */
            private getDrawingParams(directions: Direction[]): DrawingParams {
                const params: DrawingParams = {
                    direction: 'bottom-left',
                    popupPosition: { top: 0, left: 0 },
                    tailPosition: { top: 0, left: 0 },
                };

                const popupDimensions = this.getPopupDimensions(this.popupRef);
                const anchorDimensions = this.getAnchorDimensions(this.props.anchor);
                const viewportDimensions = this.getViewportDimensions();
                const scopeDimensions = this.getScopeDimensions(this.props.scope);

                let viewportFactor = 0;

                for (const nextDirection of directions) {
                    const popupPosition = this.getPopupPosition(nextDirection, anchorDimensions, popupDimensions);
                    const nextViewportFactor = this.getViewportFactor(
                        popupPosition,
                        viewportDimensions,
                        popupDimensions,
                    );

                    if (nextViewportFactor > viewportFactor || this.state.direction === nextDirection) {
                        params.popupPosition = {
                            top: popupPosition.top - (scopeDimensions.top + window.pageYOffset),
                            left: popupPosition.left - (scopeDimensions.left + window.pageXOffset),
                        };
                        params.direction = nextDirection;
                        viewportFactor = nextViewportFactor;
                    }

                    if (viewportFactor > VIEWPORT_ACCURACY_FACTOR) {
                        break;
                    }
                }

                if (this.tailRef.current !== null) {
                    params.tailPosition = this.getTailPosition(params.direction, anchorDimensions, popupDimensions);
                }

                return params;
            }

            /**
             * Вычисляет размеры попапа.
             *
             * @param popupRef Ссылка на DOM элемент попапа.
             */
            private getPopupDimensions(popupRef?: RefObject<HTMLElement>): PopupDimensions {
                const dimensions = {
                    area: 0,
                    height: 0,
                    width: 0,
                    popupHeight: 0,
                    popupWidth: 0,
                };

                if (popupRef !== undefined && popupRef.current !== null) {
                    const { clientWidth, clientHeight } = popupRef.current;
                    const { width, height } = popupRef.current.getBoundingClientRect();

                    dimensions.area = clientWidth * clientHeight;
                    // Погрешность расчета при рендеринге ie11
                    dimensions.height = Math.round(height);
                    // Погрешность при расчете offsetWidth при рендеринге в chrome
                    dimensions.width = Math.round(width);
                    dimensions.popupHeight = clientHeight;
                    dimensions.popupWidth = clientWidth;
                }

                return dimensions;
            }

            /**
             * Вычисляет размеры анкора.
             *
             * @param anchorRef Ссылка на DOM элемент анкора.
             */
            private getAnchorDimensions(anchorRef?: RefObject<HTMLElement>): AnchorDimensions {
                const dimensions = {
                    left: 0,
                    top: 0,
                    height: 0,
                    width: 0,
                };

                // Рассчитываем позицию анкора относительно его родителя чтобы не было
                // неточностей в координатах, например из-за transform scale.
                const anchorNode = anchorRef && anchorRef.current;
                const parentNode = anchorNode && anchorNode.offsetParent;

                if (anchorNode && parentNode) {
                    const { left: parentLeft, top: parentTop } = parentNode.getBoundingClientRect();

                    dimensions.left = parentLeft + anchorNode.offsetLeft + window.pageXOffset;
                    dimensions.top = parentTop + anchorNode.offsetTop + window.pageYOffset;
                    dimensions.height = anchorNode.offsetHeight;
                    dimensions.width = anchorNode.offsetWidth;
                }

                return dimensions;
            }

            /**
             * Вычисляет размеры хвостика.
             */
            private getTailDimensions() {
                const dimensions = { size: 0 };

                if (this.props.tailSize !== undefined) {
                    dimensions.size = this.props.tailSize;
                }

                if (this.tailRef.current !== null) {
                    dimensions.size = this.tailRef.current.offsetWidth;
                }

                return dimensions;
            }

            /**
             * Вычисляет размеры окна.
             */
            private getViewportDimensions(): ViewportDimensions {
                return {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    bottom: window.pageYOffset + window.innerHeight,
                    right: window.pageXOffset + window.innerWidth,
                };
            }

            /**
             * Вычисляет размеры области.
             *
             * @param scopeRef Ссылка на DOM элемент области.
             */
            private getScopeDimensions(scopeRef?: RefObject<HTMLElement>): Position {
                const dimensions = { top: 0, left: 0 };

                if (scopeRef !== undefined && scopeRef.current !== null) {
                    const { left, top } = scopeRef.current.getBoundingClientRect();

                    dimensions.top = top;
                    dimensions.left = left;
                }

                return dimensions;
            }

            /**
             * Вычисляет координаты попапа для заданного направления.
             *
             * @param direction Текущее направление в котором раскрыт попап
             * @param anchorDimensions Размеры анкора
             * @param popupDimensions Размеры попапа
             */
            private getPopupPosition(
                direction: string,
                anchorDimensions: AnchorDimensions,
                popupDimensions: PopupDimensions,
            ) {
                const position = { left: 0, top: 0 };
                const offsets = this.getOffsets();

                if (checkMainDirection(direction, 'bottom')) {
                    position.top = anchorDimensions.top + anchorDimensions.height + offsets.main;
                } else if (checkMainDirection(direction, 'top')) {
                    position.top = anchorDimensions.top - popupDimensions.height - offsets.main;
                } else if (checkMainDirection(direction, 'left')) {
                    position.left = anchorDimensions.left - popupDimensions.width - offsets.main;
                } else if (checkMainDirection(direction, 'right')) {
                    position.left = anchorDimensions.left + anchorDimensions.width + offsets.main;
                }

                if (checkSecondaryDirection(direction, 'right')) {
                    position.left =
                        anchorDimensions.left + anchorDimensions.width - popupDimensions.width - offsets.secondary;
                } else if (checkSecondaryDirection(direction, 'left')) {
                    position.left = anchorDimensions.left + offsets.secondary;
                } else if (checkSecondaryDirection(direction, 'bottom')) {
                    position.top =
                        anchorDimensions.top + anchorDimensions.height - popupDimensions.height - offsets.secondary;
                } else if (checkSecondaryDirection(direction, 'top')) {
                    position.top = anchorDimensions.top + offsets.secondary;
                } else if (checkSecondaryDirection(direction, 'center')) {
                    if (checkMainDirection(direction, 'top', 'bottom')) {
                        position.left = anchorDimensions.left + anchorDimensions.width / 2 - popupDimensions.width / 2;
                    } else if (checkMainDirection(direction, 'left', 'right')) {
                        position.top = anchorDimensions.top + anchorDimensions.height / 2 - popupDimensions.height / 2;
                    }
                }

                return position;
            }

            /**
             * Вычисляет координаты хвостика для заданного направления.
             *
             * @param direction Текущее направление в котором раскрыт попап
             * @param anchorDimensions Размеры анкора
             * @param popupDimensions Размеры попапа
             */
            private getTailPosition(
                direction: string,
                anchorDimensions: AnchorDimensions,
                popupDimensions: PopupDimensions,
            ) {
                const position = { left: 0, top: 0 };
                const tailDimensions = this.getTailDimensions();
                const halfSizeOfTail = tailDimensions.size / 2;
                const offsets = this.getOffsets();

                if (checkMainDirection(direction, 'bottom')) {
                    position.top = -halfSizeOfTail;
                } else if (checkMainDirection(direction, 'top')) {
                    position.top = Math.floor(popupDimensions.popupHeight - halfSizeOfTail);
                } else if (checkMainDirection(direction, 'left')) {
                    position.left = Math.floor(popupDimensions.popupWidth - halfSizeOfTail);
                } else if (checkMainDirection(direction, 'right')) {
                    position.left = -halfSizeOfTail;
                }

                if (checkSecondaryDirection(direction, 'right')) {
                    position.left =
                        popupDimensions.popupWidth -
                        Math.ceil(Math.min(popupDimensions.popupWidth, anchorDimensions.width) / 2) -
                        halfSizeOfTail -
                        offsets.tail;
                } else if (checkSecondaryDirection(direction, 'left')) {
                    position.left =
                        Math.ceil(Math.min(popupDimensions.popupWidth, anchorDimensions.width) / 2) -
                        halfSizeOfTail +
                        offsets.tail;
                } else if (checkSecondaryDirection(direction, 'bottom')) {
                    position.top =
                        popupDimensions.popupHeight -
                        Math.ceil(Math.min(popupDimensions.popupHeight, anchorDimensions.height) / 2) -
                        halfSizeOfTail -
                        offsets.tail;
                } else if (checkSecondaryDirection(direction, 'top')) {
                    position.top =
                        Math.ceil(Math.min(popupDimensions.popupHeight, anchorDimensions.height) / 2) -
                        halfSizeOfTail +
                        offsets.tail;
                } else if (checkSecondaryDirection(direction, 'center')) {
                    if (checkMainDirection(direction, 'top', 'bottom')) {
                        position.left = Math.ceil(popupDimensions.popupWidth / 2) - halfSizeOfTail + offsets.tail;
                    } else {
                        position.top = Math.ceil(popupDimensions.popupHeight / 2) - halfSizeOfTail + offsets.tail;
                    }
                }

                return position;
            }

            private getOffsets() {
                const { mainOffset, secondaryOffset, tailOffset, viewportOffset } = this.props;
                const tailDimensions = this.getTailDimensions();
                const computedMainOffset =
                    mainOffset >= 0 && tailDimensions.size > 0
                        ? Math.max(mainOffset, Math.round(tailDimensions.size * Math.SQRT1_2))
                        : mainOffset;

                return {
                    main: computedMainOffset,
                    secondary: secondaryOffset,
                    tail: tailOffset,
                    viewport: viewportOffset,
                };
            }

            private getPossibleDrawingParams = () => {
                const target = this.getAnchorDimensions(this.props.anchor);
                const viewport = this.getViewportDimensions();
                const offsets = this.getOffsets();

                return this.props.directions.map((direction) => {
                    const res = { direction, width: 0, height: 0, left: 0, top: 0 };

                    if (checkMainDirection(direction, 'bottom')) {
                        res.top = target.top + target.height + offsets.main * 2;
                        res.height = viewport.bottom - res.top - offsets.viewport;
                    } else if (checkMainDirection(direction, 'top')) {
                        res.height = target.top - viewport.top - offsets.main - offsets.viewport;
                        res.top = target.top - res.height - offsets.main;
                    } else {
                        if (checkSecondaryDirection(direction, 'center')) {
                            res.height = viewport.bottom - viewport.top - 2 * offsets.viewport;
                            res.top = target.top + (target.height - res.height) / 2;
                        } else if (checkSecondaryDirection(direction, 'bottom')) {
                            res.height =
                                target.top + target.height - viewport.top - offsets.secondary - offsets.viewport;
                            res.top = target.top + target.height - res.height - offsets.secondary;
                        } else if (checkSecondaryDirection(direction, 'top')) {
                            res.top = target.top + offsets.secondary;
                            res.height = viewport.bottom - res.top - offsets.viewport;
                        }

                        if (checkMainDirection(direction, 'left')) {
                            res.width = target.left - viewport.left - offsets.main - offsets.viewport;
                            res.left = target.left - res.width - offsets.main;
                        } else {
                            res.left = target.left + target.width + offsets.main;
                            res.width = viewport.right - res.left - offsets.viewport;
                        }
                    }

                    if (checkSecondaryDirection(direction, 'right')) {
                        res.width = target.left + target.width - viewport.left - offsets.secondary - offsets.viewport;
                        res.left = target.left + target.width - res.width - offsets.secondary;
                    } else if (checkSecondaryDirection(direction, 'left')) {
                        res.left = target.left + offsets.secondary;
                        res.width = viewport.right - res.left - offsets.viewport;
                    } else if (checkSecondaryDirection(direction, 'center')) {
                        if (checkMainDirection(direction, 'top', 'bottom')) {
                            res.width = viewport.right - viewport.left - 2 * offsets.viewport;
                            res.left = target.left + target.width / 2 - res.width / 2;
                        }
                    }

                    return res;
                });
            };

            /**
             * Вычисляет коэффициент пересечения доступной площади для открытия попапа и собственной площади попапа.
             *
             * @param popupPosition Позиция попапа
             * @param viewportDimensions Размеры окна
             * @param popupDimensions Размеры попапа
             */
            private getViewportFactor(
                popupPosition: Position,
                viewportDimensions: ViewportDimensions,
                popupDimensions: PopupDimensions,
            ) {
                let viewportFactor = 0;
                const offsets = this.getOffsets();
                const intersectionLeft = Math.max(popupPosition.left, viewportDimensions.left + offsets.viewport);
                const intersectionRight = Math.min(
                    popupPosition.left + popupDimensions.width,
                    viewportDimensions.right - offsets.viewport,
                );
                const intersectionTop = Math.max(popupPosition.top, viewportDimensions.top + offsets.viewport);
                const intersectionBottom = Math.min(
                    popupPosition.top + popupDimensions.height,
                    viewportDimensions.bottom - offsets.viewport,
                );

                if (intersectionLeft < intersectionRight && intersectionTop < intersectionBottom) {
                    viewportFactor =
                        ((intersectionRight - intersectionLeft) * (intersectionBottom - intersectionTop)) /
                        popupDimensions.area;
                }

                return viewportFactor;
            }
        } as ComponentClass<IPopupTargetAnchorProps & IPopupProps>,
);
