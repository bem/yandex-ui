import React, {
    ElementType,
    FC,
    ReactNode,
    cloneElement,
    Children,
    isValidElement,
    MouseEventHandler,
    MouseEvent,
} from 'react';
import { cn } from '@bem-react/classname';

import './ButtonGroup.css';

export interface ButtonGroupProps {
    /**
     * Выбранные кнопки
     */
    selected?: number[];

    /**
     * Уникальный id компонента
     */
    id?: string;

    /**
     * Дополнительный класс компонента
     */
    className?: string;

    /**
     * Дочерние компоненты
     */
    children?: ReactNode;

    /**
     * Доступ на изменение компонента
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * Вертикальное направление кнопок
     *
     * @default false
     */
    vertical?: boolean;

    /**
     * Расстояние между кнопками
     */
    gap?: 's' | 'm' | 'l' | 'xl';

    /**
     * Компонент, который будет использоваться в качестве обертки
     *
     * @default 'div'
     */
    as?: ElementType;

    /**
     * Обработчик клика, который будет вызван при нажатии на элемент из `children`.
     * Если у элемента из `children` уже имеется функция `onClick`, то она будет запущена первой
     */
    onClick?: MouseEventHandler<ElementType> | ((event: MouseEvent<ElementType>, index: number) => void);

    /**
     * Пины для кнопок
     */
    pin?: 'circle' | 'round';

    /**
     * Компонент для разделения кнопок
     */
    divider?: ReactNode;
}

export const cnButtonGroup = cn('ButtonGroup');

/**
 * Компонент для объединения нескольких кнопок между собой
 * @param {ButtonGroupProps} props
 */
export const ButtonGroup: FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
    const {
        as: AsComponent = 'div',
        children,
        className,
        disabled,
        onClick,
        vertical,
        selected,
        pin,
        divider,
        gap,
        ...restProps
    } = props;

    const clonedChildren = Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
            return null;
        }

        return cloneElement(child, {
            disabled: disabled || child.props.disabled,
            checked: selected && selected.indexOf(index) !== -1,
            onClick: (event: MouseEvent<ElementType>) => {
                if (disabled) {
                    return;
                }

                if (child.props.onClick) {
                    child.props.onClick(event);
                }

                if (onClick) {
                    onClick(event, index);
                }
            },
        });
    });

    return (
        <AsComponent
            {...restProps}
            role="group"
            className={cnButtonGroup({ vertical: vertical, clear: Boolean(pin) }, [className])}
        >
            {!divider
                ? clonedChildren
                : clonedChildren.map((el, i) => (
                    <>
                        {i > 0 && divider}
                        {el}
                    </>
                ))}
        </AsComponent>
    );
};

ButtonGroup.displayName = cnButtonGroup();
