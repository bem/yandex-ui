import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { useComponentRegistry } from '@bem-react/di';

import { IPopupProps } from '../Popup';
import { IPopupTargetAnchorProps } from '../Popup/_target/Popup_target_anchor';
import { TooltipBackdrop as Backdrop } from './Backdrop/Tooltip-Backdrop';
import { TooltipRegistry } from './Tooltip.registry/interface';
import './Tooltip.css';

export { Direction } from '../Popup';

export const cnTooltip = cn('Tooltip');

type PartialPopupProps = Pick<
    IPopupProps,
    'keepMounted' | 'className' | 'hasTail' | 'innerRef' | 'zIndex' | 'visible' | 'scope' | 'onClose' | 'onClick'
>;

type PartialPopupTargetAnchorProps = Pick<
    IPopupTargetAnchorProps,
    | 'anchor'
    | 'boundary'
    | 'direction'
    | 'mainOffset'
    | 'modifiers'
    | 'secondaryOffset'
    | 'tailOffset'
    | 'viewportOffset'
>;

export type TooltipProps = PartialPopupProps &
    PartialPopupTargetAnchorProps & {
        /**
         * Визуальное состояние подсказки
         */
        state?: 'warning' | 'alert' | 'success';

        /**
         * Уникальный id подсказки
         */
        id?: string;
    };

/**
 * Компонент используется для создания всплывающих подсказок.
 */
export const Tooltip: FC<TooltipProps> = (props) => {
    const {
        anchor,
        boundary,
        children,
        className,
        direction,
        hasTail,
        id,
        innerRef,
        keepMounted,
        mainOffset,
        modifiers,
        onClick,
        onClose,
        scope,
        secondaryOffset,
        state,
        tailOffset,
        viewportOffset,
        visible,
        zIndex,
    } = props;
    const defaultMainOffset = hasTail ? 0 : 4;
    const { Popup } = useComponentRegistry<TooltipRegistry>(cnTooltip());

    return (
        <Popup
            anchor={anchor}
            boundary={boundary}
            className={cnTooltip({ visible, state }, [className])}
            direction={direction}
            hasTail={hasTail}
            innerRef={innerRef}
            keepMounted={keepMounted}
            mainOffset={mainOffset || defaultMainOffset}
            modifiers={modifiers}
            onClick={onClick}
            onClose={onClose}
            scope={scope}
            secondaryOffset={secondaryOffset}
            tailOffset={tailOffset}
            target="anchor"
            unstable_onRenderTail={(tail) => <Backdrop>{hasTail && tail}</Backdrop>}
            view="default"
            viewportOffset={viewportOffset}
            visible={visible}
            zIndex={zIndex}
        >
            <div role="tooltip" id={id} className={cnTooltip('Content')}>
                {children}
            </div>
        </Popup>
    );
};

Tooltip.displayName = 'Tooltip';
