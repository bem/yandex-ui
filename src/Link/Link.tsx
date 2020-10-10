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

    /**
     * HTML-атрибут `role`
     */
    role?: string;
}

export const cnLink = cn('Link');

/**
 * Компонент для создания ссылок.
 * @param {ILinkProps} props
 */
export const Link: FC<ILinkProps> = ({
    as: AsComponent,
    children,
    controlRef,
    disabled,
    innerRef,
    role,
    // Извлекаем свойства, т.к. они не нужны на DOM узле
    // FIXME: https://github.com/bem/bem-react/issues/381
    // @ts-ignore
    pseudo: _pseudo,
    // @ts-ignore
    view: _view,
    ...props
}) => {
    const Component = AsComponent || ((props.href ? 'a' : ('span' as any)) as ReactLinkElement);
    let rel = props.rel;

    if (props.target === '_blank' && rel !== undefined && rel.indexOf('noopener') === -1) {
        // Пользовательский атрибут имеет больший приоритет.
        rel = `${rel} noopener`;
    }

    // PERF: Не используем TSX, чтобы избежать лишнего клонирования props.
    return createElement(
        Component,
        Object.assign(props, {
            'aria-disabled': disabled,
            className: cnLink(null, [props.className]),
            ref: innerRef || controlRef,
            rel,
            role,
            tabIndex: disabled ? -1 : props.tabIndex,
        }),
        children,
    );
};

Link.displayName = cnLink();
