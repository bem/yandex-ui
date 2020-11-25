import React, {
    ReactNode,
    RefObject,
    SelectHTMLAttributes,
    FocusEventHandler,
    MouseEventHandler,
    KeyboardEventHandler,
    ComponentClass,
    PureComponent,
    createRef,
    Ref,
} from 'react';
import { cn } from '@bem-react/classname';
import { ComponentRegistryConsumer } from '@bem-react/di';

import { Omit, Defaultize } from '../typings/utility-types';
import { flatMap } from '../lib/flatMap';
import { mergeAllRefs } from '../lib/mergeRefs';
import { Keys } from '../lib/keyboard';
import { RenderOverride, MultiRenderOverrideProvider } from '../lib/render-override';
import { ItemSimple, ChangeEventHandler } from '../Menu/Menu';
import { IWithTogglableProps } from '../withTogglable/withTogglable';
import { ISelectRegistry, IIconEnhancedProps } from './Select.registry';
import './Button/Select-Button.css';
import './Menu/Select-Menu.css';
import './Select.css';

export type OptionSimple = ItemSimple & {
    /**
     * Текст, который будет отображен в компоненте `Trigger` когда пункт будет выбран.
     */
    checkedText?: string;
};

/**
 * Набор пунктов объединенных в группу.
 */
export type OptionGroup = {
    /**
     * Заголовок группы
     */
    title?: string;

    /**
     * Набор элементов в группе
     */
    items: OptionSimple[];
};

/**
 * Пункт списка.
 *
 * В touch-реализациях поле `content` не поддерживает JSX.
 */
export type Option = OptionSimple | OptionGroup;

type SelectAllHTMLAttributes = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'value'>;

export interface ISelectProps extends IWithTogglableProps, SelectAllHTMLAttributes {
    /**
     * Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана.
     */
    onBlur?: FocusEventHandler<HTMLElement>;

    /**
     * Событие, которое вызывается при нажатии на компонент.
     */
    onClick?: MouseEventHandler<HTMLElement>;

    /**
     * Событие, которое вызывается при нажатии клавиш клавиатуры.
     */
    onKeyDown?: KeyboardEventHandler<HTMLElement>;

    /**
     * Дополнительный контент после компонента `Trigger`.
     */
    addonAfter?: ReactNode;

    /**
     * Дополнительный контент перед компонентом `Trigger`.
     */
    addonBefore?: ReactNode;

    /**
     * Ссылка на корневой DOM элемент компонента.
     */
    innerRef?: Ref<HTMLElement>;

    /**
     * Набор опций.
     */
    options: Option[];

    /**
     * Вспомогательный текст внутри компонента. Отображается, когда значение не выбрано.
     *
     * @default —
     */
    placeholder?: string;

    /**
     * Размер компонента.
     */
    size?: string;

    /**
     * Стилевое оформление компонента.
     */
    theme?: string;

    /**
     * Ссылка на корневой DOM элемент компонента `Trigger`.
     */
    triggerRef?: RefObject<HTMLElement>;

    /**
     * Значение, выбранное в компоненте по умолчанию.
     *
     * Если передана строка или число, то компонент будет работать в режиме `radio` — выбрать можно только один пункт.
     * Если передан массив,
     * то компонент будет работать в режиме `check` — выбрать можно произвольное количество пунктов.
     *
     * @default ''
     */
    value?: any;

    /**
     * Внешний вид компонента.
     */
    view?: string;

    /**
     * Показывать всегда значение из свойства `placeholder` вне зависимости от выбранного значения.
     */
    showAlwaysPlaceholder?: boolean;

    /**
     * Включает/отключает модификатор `checked` на кнопке селекта.
     */
    checkable?: boolean;

    /**
     * Дополнительные свойства для иконки.
     */
    iconProps?: IIconEnhancedProps;

    /**
     * Обработчик изменения значения.
     */
    onChange?: ChangeEventHandler<HTMLSelectElement>;

    /**
     * Переопределяет компонент `Trigger`
     */
    renderTrigger?: RenderOverride;

    /**
     * Переопределяет компонент `TriggerIcon`
     */
    renderTriggerIcon?: RenderOverride;

    /**
     * id активного элемента меню.
     */
    activeDescendant?: string;
}

export const cnSelect = cn('Select2');

const defaultProps = {
    placeholder: '—',
    value: '',
};

type DefaultProps = keyof typeof defaultProps;
type SelectProps = Defaultize<ISelectProps, DefaultProps>;

/**
 * Компонент для создания раскрывающегося списка с меню.
 * @param {ISelectProps} props
 */
export const Select = class extends PureComponent<SelectProps> {
    static displayName = cnSelect();

    static defaultProps = defaultProps;

    /**
     * Контейнер с ссылкой на корневой DOM элемент селекта.
     */
    private readonly innerRef = createRef<HTMLSpanElement>();

    /**
     * Контейнер с ссылкой на DOM элемент триггера.
     */
    private readonly triggerRef = createRef<HTMLElement>();
    componentDidMount() {
        this.forwardRefs();
    }

    componentDidUpdate() {
        this.forwardRefs();
    }

    render() {
        const {
            addonAfter,
            addonBefore,
            className,
            disabled,
            onBlur,
            onClick,
            onKeyDown,
            opened,
            size,
            theme,
            value,
            view,
            style,
            checkable = true,
            iconProps,
            renderTrigger,
            renderTriggerIcon,
            activeDescendant,
        } = this.props;
        // Проставляем состояние `checked` только для типа `check`.
        const checked = checkable && Array.isArray(value) ? value.length > 0 : false;
        const iconType = view || (iconProps && iconProps.glyph) ? undefined : 'arrow';
        const iconGlyph = view && !(iconProps && iconProps.type) ? 'carets-v' : undefined;

        return (
            <ComponentRegistryConsumer id={cnSelect()}>
                {({ Trigger: TriggerOriginal, Icon: TriggerIconOriginal }: ISelectRegistry) => (
                    <MultiRenderOverrideProvider
                        // prettier-ignore
                        components={[
                            [TriggerOriginal, renderTrigger],
                            [TriggerIconOriginal, renderTriggerIcon],
                        ]}
                    >
                        {(Trigger: typeof TriggerOriginal, TriggerIcon: typeof TriggerIconOriginal) => (
                            <span
                                ref={mergeAllRefs(this.innerRef, this.props.innerRef)}
                                className={cnSelect({ disabled }, [className])}
                            >
                                {addonBefore}
                                <Trigger
                                    width="max"
                                    role="listbox"
                                    aria-haspopup="true"
                                    disabled={disabled}
                                    className={cnSelect('Button')}
                                    innerRef={this.triggerRef}
                                    style={style}
                                    size={size}
                                    theme={theme}
                                    checked={checked}
                                    view={view}
                                    onClick={onClick}
                                    onKeyDown={onKeyDown}
                                    onBlur={onBlur}
                                    pressKeys={[Keys.SPACE]}
                                    iconRight={(iconClassName: string) => (
                                        <TriggerIcon
                                            size={size as any}
                                            className={iconClassName}
                                            direction={opened ? 'top' : 'bottom'}
                                            type={iconType}
                                            glyph={iconGlyph}
                                            {...iconProps}
                                        />
                                    )}
                                    aria-activedescendant={activeDescendant}
                                    aria-expanded={opened}
                                    aria-multiselectable={Array.isArray(value)}
                                >
                                    {this.getButtonText()}
                                </Trigger>
                                {addonAfter}
                            </span>
                        )}
                    </MultiRenderOverrideProvider>
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

    private getButtonText() {
        const { value, options, showAlwaysPlaceholder, placeholder } = this.props;
        const values: any[] = [].concat(value as []).filter((value: any) => value !== undefined);

        if (!showAlwaysPlaceholder && values.length > 0) {
            const text = this.getOptionsText(options, values);
            if (text.length > 0) {
                return text;
            }
        }

        return placeholder;
    }

    private getOptionsText(options: Option[], values: any[]) {
        return flatMap((option) => (option.items ? option.items : option), options)
            .filter((option: OptionSimple) => values.indexOf(option.value) !== -1)
            .map((option: OptionSimple) => option.checkedText || option.content)
            .join(', ');
    }
} as ComponentClass<ISelectProps>;
