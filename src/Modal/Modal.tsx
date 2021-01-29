import React, { FC, useRef } from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { IPopupProps } from '../Popup/Popup';
import { IModalRegistry } from './Modal.registry/interface';

import './Modal.css';

type PartialPopupProps = Pick<
    IPopupProps,
    'keepMounted' | 'className' | 'innerRef' | 'zIndex' | 'visible' | 'scope' | 'onClose' | 'onClick'
>;

export interface IModalProps extends PartialPopupProps {
    /**
     * Выравнивание контента по вертикали
     *
     * @default 'middle'
     */
    contentVerticalAlign?: 'top' | 'middle' | 'bottom';

    /**
     * Добавляет анимацию при открытии модального окна.
     *
     * @default true
     */
    hasAnimation?: boolean;
}

export const cnModal = cn('Modal');

/**
 * Используется для создания всплывающих модальных окон.
 * @param {IModalProps} props
 */
export const Modal: FC<IModalProps> = ({
    children,
    className,
    contentVerticalAlign: align = 'middle',
    hasAnimation = true,
    visible,
    onClick,
    ...props
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const { Popup } = useComponentRegistry<IModalRegistry>(cnModal());

    return (
        <Popup
            {...props}
            className={cnModal({ visible, hasAnimation }, [className])}
            visible={visible}
            unstable_hostRef={contentRef}
            onClick={onClick}
        >
            <div className={cnModal('Table')}>
                <div className={cnModal('Cell', { align })}>
                    <div ref={contentRef} className={cnModal('Content')}>
                        {children}
                    </div>
                </div>
            </div>
            <div className={cnModal('Overlay')} />
        </Popup>
    );
};

Modal.displayName = cnModal();
