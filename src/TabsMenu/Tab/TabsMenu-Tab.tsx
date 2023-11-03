/* eslint-disable no-nested-ternary */
import React, { useCallback, RefObject, ReactNode, KeyboardEventHandler, FC, MouseEventHandler } from 'react';

import { cnTabsMenu } from '../TabsMenu';
import './TabsMenu-Tab.css';

export interface ITabsMenuTabProps {
    /**
     * Идентификатор пункта меню
     */
    id: string;

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
     * HTML атрибут `role`
     */
    role?: string;

    /**
     * HTML атрибут `tabIndex`
     */
    tabIndex?: number;

    /**
     * Обработчик события `onKeyDown`
     */
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
}

interface ITabsMenuTabInternalProps extends ITabsMenuTabProps {
    onInternalClick?: (id: string) => void;
}

const Tab: FC<ITabsMenuTabInternalProps> = (props) => {
    const {
        id,
        innerRef,
        active,
        className,
        content,
        disabled,
        first,
        onClick,
        onInternalClick,
        ...otherProps
    } = props;

    const handleClick = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        onClick && onClick(e);
        onInternalClick && onInternalClick(id);
        // TODO ISL-10952: разобраться почему не все необходимые переменные указаны в deps и убрать игнор
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, onClick]);

    return (
        <li
            {...otherProps}
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
            onClick={disabled ? undefined : handleClick}
        >
            {content}
        </li>
    );
};

export const TabsMenuTab = React.memo(Tab);
