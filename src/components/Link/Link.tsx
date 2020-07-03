import {
    AnchorHTMLAttributes,
    createElement,
    DetailedHTMLFactory,
    FC,
    MouseEventHandler,
    ReactNode,
    ReactType,
    RefObject,
} from 'react';
import { cn } from '@bem-react/classname';

import './Link.css';

export type ContainerElement = HTMLSpanElement | HTMLAnchorElement;

type ReactLinkElement = DetailedHTMLFactory<AnchorHTMLAttributes<ContainerElement>, ContainerElement>;

export interface ILinkProps {
    /**
     * Адрес ссылки. Если указано, то компонент будет оформлен тегом `a`, в противном случае — `span`.
     *
     * Значение игнорируется при использовании модификатора `pseudo`
     */
    href?: string;

    /**
     * Выключение интерактивности ссылки.
     * Состояние, при котором ссылка отображается, но недоступна для действий пользователя
     */
    disabled?: boolean;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<ContainerElement>;

    /**
     * Ссылка на DOM-элемент нативного контрола
     */
    controlRef?: RefObject<ContainerElement>;

    /**
     * Указание для отрисовки компонента
     */
    as?: ReactType;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Содержимое ссылки
     */
    children?: ReactNode;

    /**
     * HTML-атрибут `title`
     */
    title?: string;

    /**
     * HTML-атрибут `target`
     */
    target?: string;

    /**
     * HTML-атрибут `rel`
     */
    rel?: string;

    /**
     * HTML-атрибут `tabIndex`. Определяет последовательность перехода между ссылками при нажатии на кнопку Tab
     */
    tabIndex?: number;

    /**
     * Обработчик события клика.
     */
    onClick?: MouseEventHandler<ContainerElement>;
}

export const cnLink = cn('Link');

/**
 * Компонент для создания ссылок.
 * @param {ILinkProps} props
 */
export const Link: FC<ILinkProps> = ({
    disabled,
    innerRef,
    controlRef,
    children,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    pseudo: _pseudo,
    // @ts-ignore
    view: _view,
    as,
    ...props
}) => {
    const className = cnLink(null, [props.className]);
    const Component = as || ((props.href ? 'a' : ('span' as any)) as ReactLinkElement);
    let relationship = props.rel;

    if (props.target === '_blank' && relationship !== undefined && relationship.indexOf('noopener') === -1) {
        // Пользовательский атрибут имеет больший приоритет
        relationship = `${relationship} noopener`;
    }

    //PERF: Не используем TSX, чтобы избежать лишнего клонирования props
    return createElement(Component, Object.assign(props, {
        ref: innerRef || controlRef,
        'aria-disabled': disabled,
        rel: relationship,
        tabIndex: disabled ? -1 : props.tabIndex,
        className: className
    }), children);
};

Link.displayName = cnLink();
