import React, {
    FC,
    Ref,
    ReactNode,
    ElementType,
    KeyboardEventHandler,
    MouseEventHandler,
    FocusEventHandler,
    useRef,
} from 'react';
import { cn } from '@bem-react/classname';
import { PressEventHandler, useButton, useHover } from 'web-platform-alpha';

import { useForkRef } from '../../useForkRef';
import { IconProvider, ButtonIcon as Icon } from './Icon/Button-Icon';
import { ButtonText as Text } from './Text/Button-Text';
import './Button.css';

export interface IButtonProps {
    /**
     * Дополнительный контент после `children`
     */
    addonAfter?: ReactNode;
    /**
     * Дополнительный контент перед `children`
     */
    addonBefore?: ReactNode;
    /**
     * Кнопка нажата
     */
    checked?: boolean;
    /**
     * Иконка на кнопке
     */
    icon?: IconProvider;
    /**
     * Иконка слева от текста кнопки
     */
    iconLeft?: IconProvider;
    /**
     * Иконка справа от текста кнопки
     */
    iconRight?: IconProvider;
    /**
     * Ссылка на корневой DOM элемент компонента
     */
    innerRef?: Ref<HTMLElement>;
    /**
     * Стилевое оформление для визуального выделения прогресса
     */
    progress?: boolean;
    /**
     * HTML-атрибут для рендера кнопки
     * @default 'button'
     */
    as?: ElementType;
    /**
     * Текст кнопки.
     */
    children?: ReactNode;
    /**
     * Тип кнопки.
     * @default 'button'
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Неактивное состояние кнопки.
     * Состояние, при котором кнопка отображается, но недоступна для действий пользователя
     */
    disabled?: boolean;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Уникальный id компонента
     */
    id?: string;
    /**
     * Обработчик события onKeyDown
     */
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
    /**
     * Обработчик события `onKeyUp`
     */
    onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
    /**
     * Обработчик события `onMouseLeave`
     */
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Обработчик события `onBlur`
     */
    onBlur?: FocusEventHandler<HTMLButtonElement>;
    /**
     * Всплывающая подсказка
     */
    title?: string;
    /**
     * HTML-атрибут `role`
     */
    role?: string;
    /**
     * Обработчик события onPress
     */
    onPress?: PressEventHandler<HTMLButtonElement>;
    /**
     * Обработчик события onPressStartt
     */
    onPressStart?: PressEventHandler<HTMLButtonElement>;
    /**
     * Обработчик события onPressUp
     */
    onPressUp?: PressEventHandler<HTMLButtonElement>;
    /**
     * Обработчик события onPressEnd
     */
    onPressEnd?: PressEventHandler<HTMLButtonElement>;
}

export const cnButton = cn('Button2');

export const Button: FC<IButtonProps> = (props) => {
    const {
        addonAfter,
        addonBefore,
        checked,
        children,
        className,
        disabled,
        icon,
        iconLeft,
        iconRight,
        innerRef,
        progress,
        ...otherProps
    } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { ElementType, buttonProps, isPressed: pressed } = useButton(
        { ...otherProps, disabled: progress || disabled },
        buttonRef,
    );
    const { hoverProps, isHovered: hovered } = useHover({ disabled: progress || disabled });
    const ref = useForkRef(buttonRef, innerRef);

    const iconLeftOrIcon = iconLeft || icon;
    const showChildren = (Boolean(children) && children !== true) || children === 0;

    // TODO: Удалить, после того, как в compose будет поддержан forwardRef,
    // тогда всегда можно будет использовать ref.
    const key = typeof ElementType === 'string' ? 'ref' : 'innerRef';
    Object.assign(buttonProps, { [key]: ref });

    return (
        <ElementType
            {...buttonProps}
            {...hoverProps}
            className={cnButton({ checked, progress, pressed, hovered, disabled }, [className])}
            aria-pressed={checked || undefined}
            aria-busy={progress || undefined}
        >
            {addonBefore}
            {iconLeftOrIcon && <Icon provider={iconLeftOrIcon} side={showChildren && iconLeft ? 'left' : undefined} />}
            {iconRight && <Icon provider={iconRight} side={showChildren ? 'right' : undefined} />}
            {showChildren && <Text>{children}</Text>}
            {addonAfter}
        </ElementType>
    );
};

Button.displayName = 'Button';
