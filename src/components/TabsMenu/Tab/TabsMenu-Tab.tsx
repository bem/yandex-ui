/* eslint-disable no-nested-ternary */
import React, { MouseEventHandler, RefObject, ReactNode, KeyboardEventHandler, FC } from 'react';

import { cnTabsMenu } from '../TabsMenu';
import './TabsMenu-Tab.css';

export interface ITabsMenuTabProps {
    /**
     * Идентификатор пункта меню
     */
    id?: string;

    /**
     * Активный пункт меню
     */
    active?: boolean;

    /**
     * Недоступный для выбора пункт меню
     */
    disabled?: boolean;

    /**
     * Первый пункт меню
     *
     * @internal
     */
    first?: boolean;

    /**
     * Содержимое пункта меню. Например: текст или ссылка
     */
    content?: ReactNode;

    /**
     * Обработчик, вызываемый при клике на пункт меню
     */
    onClick?: MouseEventHandler<HTMLLIElement>;

    /**
     * @internal
     */
    innerRef?: RefObject<HTMLLIElement>;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * HTML аттрибут `role`
     */
    role?: string;

    /**
     * HTML аттрибут `tabIndex`
     */
    tabIndex?: number;

    /**
     * Обработчик события `onKeyDown`
     */
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
}

export const TabsMenuTab: FC<ITabsMenuTabProps> = ({
    innerRef,
    active,
    className,
    content,
    disabled,
    first,
    ...props
}) => (
    <li
        {...props}
        aria-selected={active}
        ref={innerRef}
        className={cnTabsMenu(
            'Tab',
            {
                active,
                disabled,
                first,
            },
            [className],
        )}
        role="tab"
        // На активном пункте устанавливаем tabIndex 0, чтобы иметь возможность
        // сфокусироваться с клавиатуры именно в него, у остальных пунктов устанавливаем -1,
        // чтобы они не участвовали в навигации.
        tabIndex={disabled ? undefined : active ? 0 : -1}
    >
        {content}
    </li>
);
