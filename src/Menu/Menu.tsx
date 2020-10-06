import React, {
    ReactNode,
    RefObject,
    PureComponent,
    createRef,
    CSSProperties,
} from 'react';
import { cn } from '@bem-react/classname';
import { ComponentRegistryConsumer } from '@bem-react/di';

import { IS_TESTING } from '../lib/env';
import { Keys, isKeyCode } from '../lib/keyboard';
import { mergeRefs } from '../lib/mergeRefs';
import { flatMap } from '../lib/flatMap';
import { IMenuRegistry } from './Menu.registry';
import './Menu.css';

export type ItemSimple = {
    /**
     * Значение, которое соответствует пункту меню. Это значение передается в обработчик, который указан в `onChange`
     */
    value: any;

    /**
     * Содержимое пункта меню. Например: строка с названием пункта меню или иконка
     */
    content: ReactNode;

    /**
     * Неактивное состояние элемента
     */
    disabled?: boolean;

    /**
     * Идентификатор компонента
     */
    id?: string
};

export type ItemGroup = {
    /**
     * Заголовок группы
     */
    title?: string;

    /**
     * Набор элементов в группе
     */
    items: ItemSimple[];
};

export type MixedItem = ItemSimple | ItemGroup;
export type ChangeEvent<T> = React.ChangeEvent<T & { name?: string; value: any }>;
export type ChangeEventHandler<T> = (event: ChangeEvent<T>) => void;

const getFlattenItems = (items: MixedItem[]): ItemSimple[] =>
    flatMap((item) => (item.items ? item.items : item), items);

const isGroup = (value: any): value is ItemGroup => value.items !== undefined;

const createCounter = (count = 0) => () => count++;

export interface IMenuProps {
    /**
     * Состояние фокуса на меню. Необходимо для активации клавиатурной навигации
     */
    focused?: boolean;

    /**
     * Список пунктов меню
     */
    items: MixedItem[];

    /**
     * Обработчик изменения значения
     */
    onChange?: ChangeEventHandler<HTMLElement>;

    /**
     * Обработчик изменения активного значения в меню
     */
    onActiveItemChange?: (id: string) => void;

    /**
     * Пункт меню или список пунктов, которые выбраны по умолчанию.
     * Значения должны совпадать со значениями `value`, которые указаны в `items`
     */
    value?: any;

    /**
     * Стилевое оформление меню
     *
     * @internal
     */
    view?: string;

    /**
     * Неактивное состояние компонента.
     * Состояние, при котором меню отображается, но недоступно для действий пользователя
     */
    disabled?: boolean;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: React.RefObject<HTMLElement>;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Html атрибут `style`
     */
    style?: CSSProperties;
}

export const cnMenu = cn('Menu');

type MapChildrenProps = {
    getNextItemCount: () => number;
    getNextGroupCount: () => number;
    disabled?: boolean;
};

/**
 * Компонент для создания меню.
 * @param {IMenuProps} props
 */
export class Menu extends PureComponent<IMenuProps> {
    static displayName = cnMenu();

    readonly state = { hoveredIndex: this.props.focused ? 0 : -1 };

    /**
     * Контейнер с ссылкой на корневой DOM элемент меню.
     */
    private readonly innerRef = createRef<HTMLDivElement>();

    /**
     * Массив ссылок на пункты меню для правильного подскролла.
     */
    private itemsRef: Array<RefObject<HTMLDivElement>> = [];

    private uniqId = IS_TESTING ? '0' : String(Date.now()) + Math.floor(Math.random() * 10000);

    componentDidMount() {
        this.forwardRefs();

        if (this.props.focused) {
            this.subscribeToEvents();
            this.hoverAndScrollToFirstSelectedElement();
        }
    }

    componentDidUpdate(prevProps: IMenuProps) {
        this.forwardRefs();

        if (!prevProps.focused && this.props.focused) {
            this.subscribeToEvents();
            this.hoverAndScrollToFirstSelectedElement();
        } else if (prevProps.focused && !this.props.focused) {
            this.setState({ hoveredIndex: -1 });
            this.unsubscribeFromEvents();
        } else if (this.props.focused && prevProps.items !== this.props.items) {
            this.hoverAndScrollToFirstSelectedElement();
        }
    }

    componentWillUnmount() {
        this.unsubscribeFromEvents();
    }

    render() {
        const {
            className,
            disabled,
            focused,
            items,
            onChange,
            onActiveItemChange,
            value,
            innerRef,
            ...props
        } = this.props;

        return (
            <ComponentRegistryConsumer id={cnMenu()}>
                {({ Item, Group }: IMenuRegistry) => {
                    const getNextItemCount = createCounter();
                    const getNextGroupCount = createCounter();
                    return (
                        <div
                            {...props}
                            ref={this.innerRef}
                            aria-disabled={disabled}
                            aria-multiselectable={Array.isArray(value)}
                            role={value !== undefined ? 'listbox' : undefined}
                            className={cnMenu(null, [className])}
                        >
                            {items.map(
                                this.mapChildren({ Item, Group }, { getNextItemCount, getNextGroupCount, disabled }),
                            )}
                        </div>
                    );
                }}
            </ComponentRegistryConsumer>
        );
    }

    private forwardRefs() {
        mergeRefs(this.innerRef, this.props.innerRef);
    }

    private mapChildren = (
        { Item, Group }: Pick<IMenuRegistry, 'Item' | 'Group'>,
        { getNextItemCount, getNextGroupCount, disabled }: MapChildrenProps,
    ) => (item: MixedItem) => {
        if (isGroup(item)) {
            const groupIndex = getNextGroupCount();
            return (
                <Group title={item.title} key={`group-${groupIndex}`}>
                    {item.items.map(
                        this.mapChildren({ Item, Group }, { getNextItemCount, getNextGroupCount, disabled }),
                    )}
                </Group>
            );
        }

        const { value, view } = this.props;
        const { hoveredIndex } = this.state;
        const values: any[] = [].concat(value as []);
        const needIconGlyph = view === 'default' && value !== undefined;
        const itemIndex = getNextItemCount();

        this.itemsRef[itemIndex] = createRef();

        return (
            <Item
                id={item.id || `item-${this.uniqId}-${itemIndex}`}
                key={`item-${itemIndex}`}
                data-key={`item-${itemIndex}`}
                needIconGlyph={needIconGlyph}
                checked={values.indexOf(item.value) !== -1}
                disabled={item.disabled || disabled}
                hovered={disabled ? false : hoveredIndex === itemIndex}
                onMouseEnter={this.setHoveredOnMouseEnter(true, itemIndex)}
                onMouseLeave={this.setHoveredOnMouseEnter(false, itemIndex)}
                onClick={this.onMenuItemClick}
                type={value === undefined ? value : 'option'}
                innerRef={this.itemsRef[itemIndex]}
            >
                {item.content}
            </Item>
        );
    };

    private onKeyDown = (event: KeyboardEvent) => {
        if (!event.shiftKey && isKeyCode(event.keyCode, [Keys.UP, Keys.DOWN])) {
            event.preventDefault();

            const direction = event.keyCode - 39;
            const nextActiveIndex = this.getNextNotDisabledIndex(direction);
            this.triggerOnMenuItemChange(nextActiveIndex);

            this.scrollToItem(this.innerRef, this.itemsRef[nextActiveIndex]);
            this.setState({ hoveredIndex: nextActiveIndex });
        }

        if (isKeyCode(event.keyCode, [Keys.ENTER, Keys.SPACE])) {
            event.preventDefault();
            this.triggerOnChange();
        }
    };

    private scrollToItem(menuRef: RefObject<HTMLElement>, itemRef?: RefObject<HTMLElement>) {
        if (menuRef.current === null || itemRef === undefined || itemRef.current === null) {
            return;
        }

        const { top: menuOffsetTop } = menuRef.current.getBoundingClientRect();
        const { top: itemOffsetTop } = itemRef.current.getBoundingClientRect();

        let relativeScroll = 0;

        if (itemOffsetTop < menuOffsetTop) {
            relativeScroll = itemOffsetTop - menuOffsetTop;
        } else {
            relativeScroll =
                itemOffsetTop + itemRef.current.offsetHeight - menuOffsetTop - menuRef.current.offsetHeight;

            if (relativeScroll < 0) {
                relativeScroll = 0;
            }
        }

        menuRef.current.scrollTop = menuRef.current.scrollTop + relativeScroll;
    }

    private onMenuItemClick = () => {
        this.triggerOnChange();
    };

    private subscribeToEvents() {
        document.addEventListener('keydown', this.onKeyDown);
    }

    private unsubscribeFromEvents() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    private setHoveredOnMouseEnter = (hovered: boolean, index: number) => () => {
        this.setState({ hoveredIndex: hovered ? index : -1 });
    };

    private hoverAndScrollToFirstSelectedElement() {
        // TODO: Возможно в метод `getNextNotDisabledIndex` стоит добавить предикат
        // и вызывать его тут, чтобы не дублировать логику по обходу элементов.
        const values: any[] = [].concat(this.props.value as []);
        const items = getFlattenItems(this.props.items);
        const hoveredIndex = items.reduce(
            (prevIndex, item, index) => (prevIndex < 0 && values.indexOf(item.value) !== -1 ? index : prevIndex),
            -1,
        );

        this.scrollToItem(this.innerRef, this.itemsRef[hoveredIndex]);
        this.setState({ hoveredIndex: hoveredIndex < 0 ? 0 : hoveredIndex });
    }

    /**
     * Возвращает следующий индекс активного элемента для выделения в меню.
     *
     * @param direction Направление, может быть `1` — down, либо `-1` — up.
     */
    private getNextNotDisabledIndex(direction: number) {
        let { hoveredIndex } = this.state;
        let itemsChecked = 0;
        const items = getFlattenItems(this.props.items);

        while (itemsChecked < items.length) {
            itemsChecked++;
            hoveredIndex += direction;

            if (hoveredIndex < 0) {
                hoveredIndex = items.length - 1;
            }

            if (hoveredIndex >= items.length) {
                hoveredIndex = 0;
            }

            if (!items[hoveredIndex].disabled) {
                break;
            }
        }

        return hoveredIndex;
    }

    /**
     * Вызывает событие onActiveItemChange.
     */
    private triggerOnMenuItemChange(id: number) {
        const { onActiveItemChange } = this.props;

        if (onActiveItemChange === undefined || this.innerRef.current === null) {
            return;
        }

        const activeNode = this.innerRef.current.querySelector(`[data-key="item-${id}"]`);

        if (activeNode) {
            onActiveItemChange(activeNode.id as string);
        }
    }

    /**
     * Вызывает событие onChange.
     */
    private triggerOnChange() {
        const { onChange, value } = this.props;
        const { hoveredIndex } = this.state;

        if (onChange !== undefined) {
            const items = getFlattenItems(this.props.items);
            let nextValue = hoveredIndex === -1 ? '' : items[hoveredIndex].value;

            // Если value является массивом, то обрабатываем этот случай как multiselect radio или check.
            if (Array.isArray(value)) {
                let prevValues = [...value];

                if (prevValues.indexOf(nextValue) !== -1) {
                    prevValues = prevValues.filter((prevValue) => prevValue !== nextValue);
                } else {
                    prevValues.push(nextValue);
                }

                nextValue = prevValues;
            }

            // Создаем синтетическое событие и кладем туда только значение,
            // возможно в будущем стоит положить настоящий DOM элемент.
            const syntheticEvent: unknown = { target: { value: nextValue } };

            onChange(syntheticEvent as ChangeEvent<HTMLElement>);
        }
    }
}
