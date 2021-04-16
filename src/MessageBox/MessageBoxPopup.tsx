import React, { FC } from 'react';
import { ExtractProps } from '@bem-react/core';
import { useComponentRegistry } from '@bem-react/di';

import { MessageBox, MessageBoxProps, cnMessageBox } from './MessageBox';
import { MessageBoxRegistry } from './MessageBox.registry/interface';

type PopupProps = Pick<
    ExtractProps<MessageBoxRegistry['Popup']>,
    | 'anchor'
    | 'boundary'
    | 'direction'
    | 'mainOffset'
    | 'modifiers'
    | 'motionless'
    | 'onClick'
    | 'onClose'
    | 'scope'
    | 'secondaryOffset'
    | 'tailOffset'
    | 'viewportOffset'
    | 'visible'
    | 'zIndex'
>;

export type MessageBoxPopupProps = MessageBoxProps & PopupProps;

export const MessageBoxPopup: FC<MessageBoxPopupProps> = (props) => {
    const {
        anchor,
        boundary,
        direction,
        mainOffset,
        modifiers,
        motionless,
        onClick,
        onClose,
        scope,
        secondaryOffset,
        tailOffset,
        viewportOffset,
        visible,
        zIndex,
        ...restProps
    } = props;
    const { Popup } = useComponentRegistry<MessageBoxRegistry>(cnMessageBox());

    return (
        <Popup
            anchor={anchor}
            boundary={boundary}
            direction={direction}
            mainOffset={mainOffset}
            modifiers={modifiers}
            motionless={motionless}
            nonvisual
            onClick={onClick}
            onClose={onClose}
            scope={scope}
            secondaryOffset={secondaryOffset}
            tailOffset={tailOffset}
            target="anchor"
            view="default"
            viewportOffset={viewportOffset}
            visible={visible}
            zIndex={zIndex}
        >
            {({ tailRef }) => <MessageBox {...restProps} tailRef={tailRef} onClose={onClose} />}
        </Popup>
    );
};
