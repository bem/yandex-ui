import React, {
    FC,
    ChangeEventHandler,
    useCallback,
    useRef,
    RefObject,
    MouseEventHandler,
    useMemo,
    KeyboardEventHandler,
    KeyboardEvent,
    ReactNode,
    FocusEventHandler,
    useEffect,
} from 'react';
import { cn } from '@bem-react/classname';

import { Keys, isKeyCode } from '../lib/keyboard';
import { mergeRefs } from '../lib/mergeRefs';
import { useUniqId } from '../useUniqId';
import { TumblerLabel as Label } from './Label/Tumbler-Label';
import { TumblerButton as Button } from './Button/Tumbler-Button';
import { TumblerControl as Control } from './Control/Tumbler-Control';
import './Tumbler.css';

export const CHECKED_KEYS = [Keys.RIGHT, Keys.UP];
export const UNCHECKED_KEYS = [Keys.LEFT, Keys.DOWN];

export type TumblerProps = {
    /**
     * Состояние переключателя
     */
    checked: boolean;

    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;

    /**
     * Ссылка на нативный DOM-элемент нативного инпута
     */
    controlRef?: RefObject<HTMLInputElement>;

    /**
     * Неактивное состояние переключателя
     */
    disabled?: boolean;

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLSpanElement>;

    /**
     * Подпись после переключателя
     */
    labelAfter?: ReactNode;

    /**
     * Подпись перед переключателем
     */
    labelBefore?: ReactNode;

    /**
     * Имя переключателя в форме
     */
    name?: string;

    /**
     * Обработчик, который вызывается при потере фокуса переключателем
     */
    onBlur?: FocusEventHandler<HTMLButtonElement>;

    /**
     * Обработчик, который вызывается при изменении состояния
     */
    onChange: ChangeEventHandler<HTMLInputElement>;

    /**
     * Обработчик, который вызывается при нажатии на переключатель
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;

    /**
     * Обработчик, который вызывается при получении фокуса переключателем
     */
    onFocus?: FocusEventHandler<HTMLButtonElement>;

    /**
     * Обработчик, который вызывается при нажатии клавиши на клавиатуре (при этом переключатель должен быть в фокусе)
     */
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;

    /**
     * Обработчик, который вызывается при отжатии клавиши на клавиатуре (при этом переключатель должен быть в фокусе)
     */
    onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;

    /**
     * Целое число, определяющее должен ли переключатель участвовать
     * в последовательной навигации по всей странице с помощью клавиатуры
     */
    tabIndex?: number;

    /**
     * Всплывающая подсказка
     */
    title?: string;

    /**
     * Устанавливает фокус в компонент при монтировании
     */
    autoFocus?: boolean;

    /**
     * Устанавливает в компоненте обязательное состояние
     */
    required?: boolean;
};

export const cnTumbler = cn('Tumbler');

/**
 * Компонент, предназначенный для создания переключателя.
 *
 * @param {TumblerProps} props Свойства компонента.
 */
export const Tumbler: FC<TumblerProps> = ({
    checked,
    className,
    controlRef: htmlControlRef,
    disabled,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useUniqId(),
    innerRef,
    labelAfter,
    labelBefore,
    name,
    onBlur,
    onChange,
    onClick: htmlOnClick,
    onFocus,
    onKeyDown: htmlOnKeyDown,
    onKeyUp,
    tabIndex,
    title,
    autoFocus,
    required,
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const controlRef = useRef<HTMLInputElement>(null);

    const controlId = `control-${id}`;
    const beforeLabelId = `before-label-${id}`;
    const afterLabelId = `after-label-${id}`;

    useEffect(() => {
        if (autoFocus && buttonRef.current !== null) {
            buttonRef.current.focus();
        }
        // TODO ISL-10952: разобраться почему не все необходимые переменные указаны в deps и убрать игнор
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const labelledById = useMemo(() => {
        if (labelBefore && labelAfter) return checked ? beforeLabelId : afterLabelId;
        if (labelBefore) return beforeLabelId;
        if (labelAfter) return afterLabelId;
        return undefined;
    }, [checked, labelBefore, labelAfter, beforeLabelId, afterLabelId]);

    // prettier-ignore
    const onButtonClick = useCallback((event) => {
        if (controlRef.current !== null) {
            controlRef.current.click();
        }
        if (buttonRef.current !== null) {
            buttonRef.current.focus();
        }
        if (htmlOnClick !== undefined) {
            htmlOnClick(event);
        }
    }, [htmlOnClick]);

    // prettier-ignore
    const onLabelClick = useCallback(() => {
        if (buttonRef.current !== null) {
            buttonRef.current.focus();
        }
    }, []);

    // prettier-ignore
    const onKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
        if (isKeyCode(event.keyCode, [Keys.ENTER, ...UNCHECKED_KEYS, ...CHECKED_KEYS])) {
            event.preventDefault();
        }
        const shouldForceChange =
            (checked && isKeyCode(event.keyCode, UNCHECKED_KEYS)) ||
            (!checked && isKeyCode(event.keyCode, CHECKED_KEYS));
        if (shouldForceChange && controlRef.current !== null) {
            controlRef.current.click();
        }
        if (htmlOnKeyDown !== undefined) {
            htmlOnKeyDown(event);
        }
    }, [checked, htmlOnKeyDown]);

    return (
        <span ref={innerRef} className={cnTumbler(null, [className])} id={id} title={title} aria-disabled={disabled}>
            {labelBefore && (
                <Label
                    disabled={Boolean(!checked && labelBefore && labelAfter)}
                    htmlFor={controlId}
                    id={beforeLabelId}
                    onClick={onLabelClick}
                >
                    {labelBefore}
                </Label>
            )}
            <Button
                tabIndex={disabled ? -1 : tabIndex}
                innerRef={buttonRef}
                checked={checked}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onBlur={onBlur}
                onFocus={onFocus}
                onClick={onButtonClick}
                labelledBy={labelledById}
                required={required}
            />
            <Control
                id={controlId}
                name={name}
                checked={checked}
                innerRef={mergeRefs(controlRef, htmlControlRef)}
                onChange={onChange}
                required={required}
            />
            {labelAfter && (
                <Label
                    disabled={Boolean(checked && labelBefore && labelAfter)}
                    htmlFor={controlId}
                    id={afterLabelId}
                    onClick={onLabelClick}
                >
                    {labelAfter}
                </Label>
            )}
        </span>
    );
};

Tumbler.displayName = 'Tumbler';
