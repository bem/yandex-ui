import React, { FC, useState, cloneElement, ReactElement, useRef, ReactNode, useCallback, Children } from 'react';

import { mergeRefs } from '../lib/mergeRefs';
import { forkFn } from '../lib/forkFn';
import { useUniqId } from '../useUniqId';
import { TooltipProps as TooltipStatelessProps, Tooltip } from './Tooltip';

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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useUniqId('tooltip'),
    trigger = 'hover',
    ...props
}) => {
    const [visible, setVisible] = useState(defaultVisible);
    const anchorRef = useRef<HTMLElement>(null);

    const child = Children.only(children);

    // В дальнейшем данный код можно вынести куда-то выше и использовать по аналогии с Popup и Modal.
    const triggers = Array.isArray(trigger) ? trigger : [trigger];
    const handlers = triggers.reduce<any>((acc, trigger) => {
        switch (trigger) {
            case 'click':
                acc.onClick = forkFn(child.props.onClick, () => setVisible(!visible));
                break;
            case 'focus':
                acc.onFocus = forkFn(child.props.onFocus, () => setVisible(true));
                acc.onBlur = forkFn(child.props.onBlur, () => setVisible(false));
                break;
            case 'hover':
                acc.onMouseEnter = forkFn(child.props.onMouseEnter, () => setVisible(true));
                acc.onMouseLeave = forkFn(child.props.onMouseLeave, () => setVisible(false));
                break;
        }
        return acc;
    }, {});

    const onClose = useCallback(() => {
        setVisible(false);
    }, []);

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
            <Tooltip {...props} id={id} visible={visible} anchor={anchorRef} onClose={onClose}>
                {content}
            </Tooltip>
        </>
    );
};
