import React, {
    KeyboardEvent,
    FC,
    useCallback,
    useEffect,
    useRef,
    useState,
    Ref,
    FocusEventHandler,
    MouseEventHandler,
    ReactNode,
} from 'react';
import { cn } from '@bem-react/classname';
import { useComponentRegistry } from '@bem-react/di';

import { Omit } from '../typings/utility-types';
import { isKeyCode, Keys } from '../lib/keyboard';
import { omit } from '../lib/omit';
import { mergeAllRefs } from '../lib/mergeRefs';
import { useUniqId } from '../useUniqId';
import { IWithControlProps, withControl } from '../withControl/withControl';
import { IWithControlProps as IWithControlDesktopProps } from '../withControl/withControl@desktop';
import { ICheckboxControlProps } from './Control/Checkbox-Control';
import { ICheckboxRegistry } from './Checkbox.registry/interface';
import './Checkbox.css';

export const cnCheckbox = cn('Checkbox');

export type CheckboxControlProps = Omit<ICheckboxControlProps, 'size'>;

export interface ICheckboxProps
    extends IWithControlProps<HTMLInputElement>,
        IWithControlDesktopProps<HTMLInputElement>,
        CheckboxControlProps {
    /**
     * Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана
     */
    onBlur?: FocusEventHandler<HTMLElement>;

    /**
     * Событие, которое вызывается при нажатии на компонент
     */
    onClick?: MouseEventHandler<HTMLElement>;

    /**
     * Событие, которое возникает при получении компонентом фокуса
     */
    onFocus?: FocusEventHandler<HTMLElement>;

    /**
     * Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши.
     * `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`
     */
    onMouseDown?: MouseEventHandler<HTMLElement>;

    /**
     * Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши.
     * Курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup`
     */
    onMouseUp?: MouseEventHandler<HTMLElement>;

    /**
     * Обработчик события `onMouseLeave`
     */
    onMouseLeave?: MouseEventHandler<HTMLElement>;

    /**
     * Обработчик события `onMouseEnter`
     */
    onMouseEnter?: MouseEventHandler<HTMLElement>;

    /**
     * Состояние фокуса на компоненте
     */
    focused?: boolean;

    /**
     * Неактивное состояние компонента.
     * Состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;

    /**
     * Состояние нажатия на компоненте
     */
    pressed?: boolean;

    /**
     * Состояние, которое возникает при наведении на компонент курсором
     */
    hovered?: boolean;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: Ref<HTMLElement>;

    /**
     * Текст подписи к чекбоксу
     */
    label?: ReactNode;

    /**
     * Внешний вид чекбокса
     * @internal
     */
    view?: string;

    /**
     * Визуально переводит чекбокс в неопределенное состояние. Не влияет на состояние, указанное в `checked`.
     *
     * Может использоваться в дереве чекбоксов, чтобы показать состояние родительского чекбокса,
     * когда хотя бы один вложенный чекбокс отмечен, но не все.
     *
     * Если свойство задано родительскому чекбоксу,
     * то в `aria-controls` необходимо добавить `id` всех вложенных чекбоксов
     */
    indeterminate?: boolean;

    /**
     * Состояние переключателя: включен или выключен
     */
    checked?: boolean;

    /**
     * Всплывающая подсказка
     */
    title?: string;

    /**
     * Устанавливает фокус в компонент при монтировании
     */
    autoFocus?: boolean;
}

/**
 * Компонент для создания чекбоксов различных типов.
 *
 * @param {ICheckboxProps} props
 */
const CheckboxPresenter: FC<ICheckboxProps> = ({
    checked,
    className,
    controlRef: htmlControlRef = null,
    disabled,
    focused,
    hovered,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useUniqId(),
    indeterminate,
    innerRef,
    label,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    onMouseLeave,
    onKeyDown: htmlOnKeyDown,
    onKeyUp: htmlOnKeyUp,
    tabIndex,
    title,
    required,
    autoFocus,
    view,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    size: _size,
    // @ts-ignore
    theme: _theme,
    ...props
}) => {
    const [pressed, setPressed] = useState(props.pressed || false);
    const controlRef = useRef<HTMLInputElement>(null);
    const { Box, Control, Label, Tick } = useComponentRegistry<ICheckboxRegistry>(cnCheckbox());

    useEffect(() => {
        if (autoFocus && controlRef.current !== null) {
            controlRef.current.focus();
        }
        // TODO ISL-10952: разобраться почему не все необходимые переменные указаны в deps и убрать игнор
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (controlRef.current !== null && indeterminate !== undefined) {
            controlRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    useEffect(() => {
        setPressed(props.pressed || false);
    }, [props.pressed]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (isKeyCode(event.keyCode, [Keys.SPACE])) {
                setPressed(true);
            }
            if (htmlOnKeyDown !== undefined) {
                htmlOnKeyDown(event);
            }
        },
        [htmlOnKeyDown],
    );

    const onKeyUp = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (isKeyCode(event.keyCode, [Keys.SPACE])) {
                setPressed(false);
            }
            if (htmlOnKeyUp !== undefined) {
                htmlOnKeyUp(event);
            }
        },
        [htmlOnKeyUp],
    );

    const labelId = `label-${id}`;
    // FIXME: https://github.com/bem/bem-react/issues/381
    const nextProps = omit(props as any, ['pressed', 'lines', 'theme', 'size']);

    return (
        <span
            className={cnCheckbox(
                { checked: indeterminate || checked, pressed, focused, disabled, hovered, indeterminate },
                [className],
            )}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            ref={innerRef}
            title={title}
        >
            <Box>
                <Control
                    {...nextProps}
                    aria-checked={indeterminate ? 'mixed' : checked}
                    aria-labelledby={labelId}
                    checked={indeterminate || checked}
                    controlRef={mergeAllRefs(controlRef, htmlControlRef)}
                    disabled={disabled}
                    id={id}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    tabIndex={tabIndex}
                    required={required}
                />
                <Tick view={view} indeterminate={indeterminate} />
            </Box>
            {label && (
                <Label id={labelId} htmlFor={id}>
                    {label}
                </Label>
            )}
        </span>
    );
};

CheckboxPresenter.displayName = cnCheckbox();

export const Checkbox = withControl(CheckboxPresenter);
