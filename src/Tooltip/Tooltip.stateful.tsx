import React, { FC, cloneElement, ReactElement, useRef, ReactNode, Children } from 'react';

import { mergeRefs } from '../lib/mergeRefs';
import { forkFn } from '../lib/forkFn';
import { useUniqId } from '../useUniqId';
import { TooltipProps as TooltipStatelessProps, Tooltip } from './Tooltip';
import { useTooltipState } from './hooks/useTooltipState';

type TooltipProps = Omit<TooltipStatelessProps, 'visible' | 'anchor'>;
type Trigger = 'click' | 'hover' | 'focus';

export type TooltipStatefulProps = TooltipProps & {
    /**
     * Компонент или элемент для которого нужно показать подсказку
     */
    children: ReactElement;

    /**
     * Содержимое, которое будет показано в подсказке
     */
    content: ReactNode;

    /**
     * Режим для показа подсказки. Может содержать несколько значений
     *
     * @default 'hover'
     */
    trigger?: Trigger | Trigger[];

    /**
     * Показывает подсказку сразу видимой
     *
     * @default false
     */
    defaultVisible?: boolean;

    /**
     * Задержка в `ms` перед открытием подсказки
     *
     * @default 0
     */
    openDelay?: number;

    /**
     * Задержка в `ms` перед закрытием подсказки
     *
     * @default 0
     */
    closeDelay?: number;
};

/**
 * Компонент используется для создания всплывающих подсказок.
 *
 * @param {TooltipStatefulProps} props Свойства компонента.
 */
export const TooltipStateful: FC<TooltipStatefulProps> = ({
    children,
    content,
    defaultVisible = false,
    id: propId,
    trigger = 'hover',
    openDelay,
    closeDelay,
    ...props
}) => {
    const uniqId = useUniqId('tooltip');
    const id = propId || uniqId;
    const { visible, open, close, toggle } = useTooltipState({ openDelay, closeDelay, defaultVisible });
    const anchorRef = useRef<HTMLElement>(null);

    const child = Children.only(children);

    // В дальнейшем данный код можно вынести куда-то выше и использовать по аналогии с Popup и Modal.
    const triggers = Array.isArray(trigger) ? trigger : [trigger];
    const handlers = triggers.reduce<any>((acc, trigger) => {
        switch (trigger) {
            case 'click':
                acc.onClick = forkFn(child.props.onClick, () => toggle());
                break;
            case 'focus':
                acc.onFocus = forkFn(child.props.onFocus, () => open());
                acc.onBlur = forkFn(child.props.onBlur, () => close());
                break;
            case 'hover':
                acc.onMouseEnter = forkFn(child.props.onMouseEnter, () => open());
                acc.onMouseLeave = forkFn(child.props.onMouseLeave, () => close());
                break;
        }
        return acc;
    }, {});

    // Определяем тип ссылки в зависимости от типа потомка,
    // нативные элементы реализуют ref, лего-компоненты должны реализовывать innerRef.
    const refKey = typeof child.type === 'string' ? 'ref' : 'innerRef';
    const ref = child.props[refKey] === undefined ? anchorRef : mergeRefs(child.props[refKey], anchorRef);

    return (
        <>
            {cloneElement(child, {
                ...handlers,
                [refKey]: ref,
                ['aria-describedby']: id,
            })}
            <Tooltip {...props} id={id} visible={visible} anchor={anchorRef} onClose={close}>
                {content}
            </Tooltip>
        </>
    );
};
