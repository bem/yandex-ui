import React, {
    MouseEvent,
    KeyboardEvent,
    FocusEvent,
    ComponentClass,
    PureComponent,
    createRef,
    RefObject,
    Ref,
} from 'react';
import { withRegistry, ComponentRegistryConsumer } from '@bem-react/di';

import { Defaultize } from '../typings/utility-types';
import { Keys, isKeyCode } from '../lib/keyboard';
import { mergeAllRefs } from '../lib/mergeRefs';
import { RenderOverride, RenderOverrideProvider } from '../lib/render-override';
import { Direction, DrawingParams } from '../Popup/Popup';
import { ChangeEvent } from '../Menu/Menu';
import { ISelectRegistry, selectRegistry } from './Select.registry/desktop';
import { ISelectProps as ISelectCommonProps, Select as SelectCommon, cnSelect } from './Select';
import { toGroupOptions } from './Select.hocs/withNativeControl';

const POPUP_DIRECTIONS: Direction[] = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];

export interface ISelectProps extends ISelectCommonProps {
    /**
     * Максимальная высота меню.
     */
    maxHeight?: number;

    /**
     * Ссылка на DOM-элемент, в котором размещается попап.
     *
     * Важно, чтобы контейнер имел `position: relative` для корректного позициоинирования.
     *
     * @default innerRef
     */
    unsafe_scope?: RefObject<HTMLElement>;

    /**
     * Ссылка на корневой DOM-элемент компонента `Popup`.
     */
    popupRef?: Ref<HTMLDivElement>;

    /**
     * Рисовать ли компонент select рядом с меню
     */
    renderControl?: boolean;

    /**
     * Переопределяет компонент `Menu`
     */
    renderMenu?: RenderOverride;
}

const defaultProps = {
    value: '',
};

type DefaultProps = keyof typeof defaultProps;
type SelectProps = Defaultize<ISelectProps, DefaultProps>;

const SelectPresenter = class extends PureComponent<SelectProps> {
    static displayName = `${cnSelect()}@desktop`;

    readonly state = { popupMinWidth: 0, maxMenuHeight: this.props.maxHeight, activeDescendant: undefined };
    private drawingParams: DrawingParams[] = [];

    /**
     * Контейнер с ссылкой на корневой DOM элемент селекта.
     */
    private readonly innerRef = createRef<HTMLSpanElement>();

    /**
     * Контейнер с ссылкой на корневой DOM элемент меню.
     */
    private readonly menuRef = createRef<HTMLDivElement>();

    /**
     * Контейнер с ссылкой на корневой DOM элемент select.
     */
    private readonly controlRef = createRef<HTMLSelectElement>();

    /**
     * Контейнер с ссылкой на DOM элемент триггера.
     */
    private readonly triggerRef = createRef<HTMLElement>();

    /**
     * Контейнер с ссылкой на DOM элемент попапа.
     */
    private readonly popupRef = createRef<HTMLDivElement>();

    /**
     * Флаг, предотвращающий закрытие меню после клика в скроллбар (нужен исключительно для ie11).
     *
     * @see https://st.yandex-team.ru/ISL-7610
     */
    private preventClosable = false;

    componentDidMount() {
        this.forwardRefs();
    }

    componentWillUnmount() {
        this.unsubscribeFromEvents();
    }

    componentDidUpdate(prevProps: SelectProps) {
        this.forwardRefs();

        if (!prevProps.opened && this.props.opened) {
            this.subscribeToEvents();
        } else if (prevProps.opened && !this.props.opened) {
            this.unsubscribeFromEvents();
        }

        const isChangeOpened = !prevProps.opened && this.props.opened;
        const inChangeValue =
            Array.isArray(this.props.value) &&
            Array.isArray(prevProps.value) &&
            prevProps.value.length !== this.props.value.length;

        if (isChangeOpened || inChangeValue) {
            this.setPopupMinWidth();
        }

        if (this.drawingParams) {
            // нужно для расчета максимальной высоты
            // this.menuRef доступен уже после рендера menu в DOM
            requestAnimationFrame(() => this.setMenuMaxHeight());
        }
    }

    render() {
        const {
            addonAfter,
            maxHeight,
            opened,
            options,
            popupRef,
            size,
            theme,
            unsafe_scope = this.innerRef,
            value,
            view,
            renderControl = false,
            renderMenu,
            ...props
        } = this.props;
        const { popupMinWidth, maxMenuHeight } = this.state;
        const popupMainOffset = view ? 2 : 5;

        return (
            <ComponentRegistryConsumer id={cnSelect()}>
                {({ Popup, Menu: MenuOriginal }: ISelectRegistry) => (
                    <RenderOverrideProvider component={MenuOriginal} render={renderMenu}>
                        {(Menu: typeof MenuOriginal) => (
                            <SelectCommon
                                {...props}
                                triggerRef={this.triggerRef}
                                activeDescendant={this.state.activeDescendant}
                                innerRef={mergeAllRefs(this.innerRef, this.props.innerRef)}
                                onBlur={this.onBlur}
                                onClick={this.onClick}
                                onKeyDown={this.onKeyDown}
                                options={options}
                                size={size}
                                theme={theme}
                                value={value}
                                view={view}
                                opened={opened}
                                addonAfter={
                                    <>
                                        {renderControl && (
                                            <select
                                                {...props}
                                                multiple={Array.isArray(value)}
                                                tabIndex={-1}
                                                value={value}
                                                ref={this.controlRef}
                                                style={{ display: 'none' }}
                                            >
                                                {options.map(toGroupOptions)}
                                            </select>
                                        )}
                                        <Popup
                                            target="anchor"
                                            anchor={this.innerRef}
                                            className={cnSelect('Popup')}
                                            directions={POPUP_DIRECTIONS}
                                            mainOffset={popupMainOffset}
                                            view={view}
                                            style={{ minWidth: popupMinWidth }}
                                            theme={theme}
                                            visible={opened}
                                            innerRef={mergeAllRefs(this.popupRef, this.props.popupRef)}
                                            onClose={this.onClosePopup}
                                            getPossibleDrawingParams={this.onGetPossibleDrawingParams}
                                            scope={unsafe_scope}
                                        >
                                            <Menu
                                                width="max"
                                                className={cnSelect('Menu')}
                                                style={{ maxHeight: maxMenuHeight }}
                                                focused={opened}
                                                items={options}
                                                onChange={this.onMenuChange}
                                                onActiveItemChange={this.onActiveItemChange}
                                                size={size}
                                                theme={theme}
                                                value={value}
                                                view={view}
                                                innerRef={this.menuRef}
                                            />
                                        </Popup>
                                        {addonAfter}
                                    </>
                                }
                            />
                        )}
                    </RenderOverrideProvider>
                )}
            </ComponentRegistryConsumer>
        );
    }

    /**
     * Копирует ссылки на DOM узлы для дальнейшего использования.
     */
    private forwardRefs() {
        mergeAllRefs(this.props.triggerRef)(this.triggerRef.current);
    }

    private subscribeToEvents = () => {
        document.addEventListener('mousedown', this.onDocumentMouseDown);
        window.addEventListener('resize', this.onWindowChange);
        window.addEventListener('orientationchange', this.onWindowChange);
    };

    private unsubscribeFromEvents = () => {
        document.removeEventListener('mousedown', this.onDocumentMouseDown);
        window.removeEventListener('resize', this.onWindowChange);
        window.removeEventListener('orientationchange', this.onWindowChange);
    };

    private onDocumentMouseDown = (event: DocumentEventMap['mousedown']) => {
        const popupNode = this.popupRef.current;

        if (popupNode !== null && popupNode.contains(event.target as HTMLElement)) {
            this.preventClosable = true;
            event.preventDefault();
        }
    };

    private onClosePopup = () => {
        if (this.props.setOpened !== undefined) {
            this.props.setOpened(false);
        }
    };

    private onWindowChange = () => {
        if (this.props.setOpened !== undefined) {
            this.props.setOpened(false);
        }
    };

    private onBlur = (event: FocusEvent<HTMLElement>) => {
        if (this.preventClosable) {
            this.preventClosable = false;
            return;
        }

        // Закрыть попап только, если внутри него нет элемента с фокусом.
        // (Внутри попапа может быть текстовое поле для поиска опций.)
        requestAnimationFrame(() => {
            const popupNode = this.popupRef.current;

            if (this.props.setOpened && popupNode && !popupNode.contains(document.activeElement)) {
                this.props.setOpened(false);
            }
        });

        if (this.props.onBlur !== undefined) {
            this.props.onBlur(event);
        }
    };

    private onClick = (event: MouseEvent<HTMLElement>) => {
        if (this.props.setOpened !== undefined) {
            this.props.setOpened(!this.props.opened);
        }

        if (this.props.onClick !== undefined) {
            this.props.onClick(event);
        }
    };

    private onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (isKeyCode(event.keyCode, [Keys.ENTER])) {
            // Делаем поведение как у нативного селекта,
            // он открывается только по клавишам space, up, down.
            event.preventDefault();
        }

        if (isKeyCode(event.keyCode, [Keys.UP, Keys.DOWN])) {
            event.preventDefault();

            if (this.props.setOpened !== undefined) {
                this.props.setOpened(true);
            }
        }

        if (isKeyCode(event.keyCode, [Keys.SPACE])) {
            if (this.props.setOpened !== undefined) {
                event.preventDefault();

                if (!this.props.opened) {
                    this.props.setOpened(true);
                }
            }
        }

        if (this.props.opened && this.props.onKeyDown !== undefined) {
            this.props.onKeyDown(event);
        }
    };

    private onActiveItemChange = (id: string) => {
        this.setState({ activeDescendant: id });
    }

    private onMenuChange = (event: ChangeEvent<HTMLElement>) => {
        // Сюда приходит событие из Menu
        // Дополняем его знаниями о селекте
        if (this.controlRef.current) {
            const value = event.target.value;
            event.target = this.controlRef.current;
            event.target.value = value;
        }
        if (this.props.onChange !== undefined) {
            this.props.onChange(event as ChangeEvent<HTMLSelectElement>);
        }

        if (this.props.setOpened !== undefined) {
            if (!Array.isArray(this.props.value)) {
                this.props.setOpened(false);
            }
        }

        if (this.preventClosable) {
            this.preventClosable = false;
        }
    };

    private setPopupMinWidth() {
        const triggerNode = this.triggerRef.current;

        if (triggerNode !== null) {
            // Получаем размеры триггера в следующем тике,
            // т.к. в нем могут быть изменения влияющие на его размер.
            requestAnimationFrame(() => {
                this.setState({ popupMinWidth: triggerNode.clientWidth });
            });
        }
    }

    private setMenuMaxHeight = () => {
        if (this.menuRef.current === null) {
            return;
        }

        let bestHeight = 0;
        const { width: menuWidth } = this.menuRef.current.getBoundingClientRect();

        this.drawingParams.forEach((params) => {
            if (params.width >= menuWidth && params.height > bestHeight) {
                bestHeight = params.height;
            }
        });

        if (bestHeight > 0) {
            this.setState({
                maxMenuHeight: this.props.maxHeight ? Math.min(this.props.maxHeight, bestHeight) : bestHeight,
            });
        }
    };

    private onGetPossibleDrawingParams = (drawingParams: DrawingParams[]) => {
        this.drawingParams = drawingParams;
    };
} as ComponentClass<ISelectProps>;

export * from './Select';

export const Select = withRegistry(selectRegistry)(SelectPresenter);
