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

import { Omit, Defaultize } from '../../typings/utility-types';
import { flatMap } from '../../lib/flatMap';
import { mergeAllRefs } from '../../lib/mergeRefs';
import { Keys } from '../../lib/keyboard';
import { ItemSimple } from '../Menu/Menu';
import { IWithTogglableProps } from '../../hocs/withTogglable/withTogglable';
import { ISelectRegistry } from './Select.registry';
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

export interface ISelectProps extends IWithTogglableProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
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
     * Если передана строка, то компонент будет работать в режиме `radio` — выбрать можно только один пункт.
     * Если передан массив,
     * то компонент будет работать в режиме `check` — выбрать можно произвольное количество пунктов.
     *
     * @default ''
     */
    value?: string | string[];

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

    readonly state = { buttonText: this.getButtonText() };

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

    componentDidUpdate(prevProps: SelectProps) {
        this.forwardRefs();

        if (prevProps.value !== this.props.value || prevProps.options !== this.props.options) {
            this.setState({ buttonText: this.getButtonText() });
        }
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
        } = this.props;
        const { buttonText } = this.state;
        // Проставляем состояние `checked` только для типа `check`.
        const checked = checkable && Array.isArray(value) ? value.length > 0 : false;

        return (
            <ComponentRegistryConsumer id={cnSelect()}>
                {({ Trigger, Icon }: ISelectRegistry) => (
                    <span
                        ref={mergeAllRefs(this.innerRef, this.props.innerRef)}
                        className={cnSelect({ disabled }, [className])}
                    >
                        {addonBefore}
                        <Trigger
                            width="max"
                            role="listbox"
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
                                <Icon
                                    size={size as any}
                                    className={iconClassName}
                                    direction={opened ? 'top' : 'bottom'}
                                    type={view ? undefined : 'arrow'}
                                    glyph={view ? 'carets-v' : undefined}
                                />
                            )}
                            aria-expanded={opened}
                            aria-multiselectable={Array.isArray(value)}
                        >
                            {buttonText}
                        </Trigger>
                        {addonAfter}
                    </span>
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
        const values: string[] = [].concat(value as []).filter(Boolean);

        if (!showAlwaysPlaceholder && values.length > 0) {
            const text = this.getOptionsText(options, values);
            if (text.length > 0) {
                return text;
            }
        }

        return placeholder;
    }

    private getOptionsText(options: Option[], values: string[]) {
        return flatMap((option) => (option.items ? option.items : option), options)
            .filter((option: OptionSimple) => values.indexOf(option.value) !== -1)
            .map((option: OptionSimple) => option.checkedText || option.content)
            .join(', ');
    }
} as ComponentClass<ISelectProps>;
