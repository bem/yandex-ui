import React, { FC, RefObject, useRef } from 'react';
import { ExtractProps } from '@bem-react/core';
import { useComponentRegistry } from '@bem-react/di';

import { Direction } from '../Popup/Popup';
import { MessageBox, MessageBoxProps, cnMessageBox } from './MessageBox';
import { MessageBoxRegistry } from './MessageBox.registry/interface';

type PopupProps = Pick<ExtractProps<MessageBoxRegistry['Popup']>,
    'visible' | 'anchor' | 'scope' | 'onOutsideClick' | 'mainOffset' |
    'secondaryOffset' | 'onOutsideClick' | 'motionless' | 'tailOffset' | 'viewportOffset' | 'zIndexGroupLevel'>;

export type MessageBoxPopupProps = MessageBoxProps &
    PopupProps & {
        /**
         * Направление для раскрытия компонента
         */
        direction?: Direction | Direction[];
    };

export const MessageBoxPopup: FC<MessageBoxPopupProps> = (props) => {
    const {
        anchor,
        direction,
        mainOffset,
        motionless,
        onOutsideClick,
        scope,
        secondaryOffset,
        tailOffset,
        viewportOffset,
        visible,
        zIndexGroupLevel,
        ...restProps
    } = props;
    const { Popup } = useComponentRegistry<MessageBoxRegistry>(cnMessageBox());

    const directions = Array.isArray(direction) ? direction : [direction as Direction];
    const popupInnerRef = useRef<HTMLDivElement>(null);
    const ignoreRefs = [anchor, popupInnerRef].filter(Boolean) as RefObject<HTMLElement>[];

    return (
        <Popup
            anchor={anchor}
            directions={directions}
            innerRef={popupInnerRef}
            ignoreRefs={ignoreRefs}
            mainOffset={mainOffset}
            motionless={motionless}
            nonvisual
            onOutsideClick={onOutsideClick}
            scope={scope}
            secondaryOffset={secondaryOffset}
            tailOffset={tailOffset}
            target="anchor"
            view="default"
            viewportOffset={viewportOffset}
            visible={visible}
            zIndexGroupLevel={zIndexGroupLevel}
        >
            {({ tailRef }) => <MessageBox {...restProps} tailRef={tailRef} />}
        </Popup>
    );
};
