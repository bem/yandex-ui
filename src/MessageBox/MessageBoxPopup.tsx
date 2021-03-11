import React, { FC } from 'react';
import { ExtractProps } from '@bem-react/core';
import { useComponentRegistry } from '@bem-react/di';

import { MessageBox, MessageBoxProps, cnMessageBox } from './MessageBox';
import { MessageBoxRegistry } from './MessageBox.registry/interface';

type PopupProps = Pick<
    ExtractProps<MessageBoxRegistry['Popup']>,
    | 'visible'
    | 'anchor'
    | 'scope'
    | 'mainOffset'
    | 'secondaryOffset'
    | 'motionless'
    | 'tailOffset'
    | 'viewportOffset'
    | 'onClose'
    | 'onClick'
    | 'zIndex'
    | 'direction'
>;

export type MessageBoxPopupProps = MessageBoxProps & PopupProps;

export const MessageBoxPopup: FC<MessageBoxPopupProps> = (props) => {
    const {
        anchor,
        direction,
        mainOffset,
        motionless,
        scope,
        secondaryOffset,
        tailOffset,
        viewportOffset,
        visible,
        onClose,
        onClick,
        zIndex,
        ...restProps
    } = props;
    const { Popup } = useComponentRegistry<MessageBoxRegistry>(cnMessageBox());

    return (
        <Popup
            anchor={anchor}
            direction={direction}
            mainOffset={mainOffset}
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
