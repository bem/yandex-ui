import React, { FC } from 'react';
import { ExtractProps } from '@bem-react/core';
import { useComponentRegistry } from '@bem-react/di';

import { Direction } from '../Popup';
import { MessageBox, MessageBoxProps, cnMessageBox } from './MessageBox';
import { MessageBoxRegistry } from './MessageBox.registry/interface';

type PopupProps = Pick<
    ExtractProps<MessageBoxRegistry['Popup']>,
    | 'visible'
    | 'anchor'
    | 'scope'
    | 'mainOffset'
    | 'secondaryOffset'
    | 'onOutsideClick'
    | 'motionless'
    | 'tailOffset'
    | 'viewportOffset'
    | 'onClose'
    | 'onClick'
    | 'zIndex'
>;

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
        // TODO: https://st.yandex-team.ru/ISL-8670
        onOutsideClick,
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
            onClose={onClose}
            onOutsideClick={onOutsideClick}
            onClick={onClick}
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
