import React, { RefObject, FC, useEffect } from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';

import { IPopupProps } from '../Popup/Popup';
import { IModalRegistry } from './Modal.registry/interface';

import './Modal.css';

type PartialPopupProps = Pick<IPopupProps, 'keepMounted' | 'className' | 'innerRef' | 'zIndex' | 'visible' | 'scope' | 'forceRender'>;

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

    /**
     * Функция, которая будет вызвана при закрытии модального окна
     */
    onClose?: () => void;
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
    // @ts-ignore (Внутреннее свойство)
    targetRef,
    visible,
    onClose,
    ...props
}) => {
    const { Popup } = useComponentRegistry<IModalRegistry>(cnModal());

    useEffect(() => {
        console.assert(
            targetRef === undefined,
            'Использование функции "withOutsideClick" является устаревшим, ' +
                'для закрытия модального окна используйте свойство "onClose".',
        );
    }, []);

    // TODO: Возможно стоит перенсти эту логику на desktop.
    useEffect(() => {
        const onDocumentKeyDown = (event: KeyboardEvent) => {
            if (visible && event.key === 'Escape' && onClose !== undefined) {
                onClose();
            }
        };
        document.addEventListener('keydown', onDocumentKeyDown);
        return () => {
            document.removeEventListener('keydown', onDocumentKeyDown);
        };
    }, [visible, onClose]);

    return (
        <Popup {...props} className={cnModal({ visible, hasAnimation }, [className])} visible={visible}>
            <div className={cnModal('Table')}>
                <div className={cnModal('Cell', { align })}>
                    <div className={cnModal('Content')} ref={targetRef as RefObject<HTMLDivElement>}>
                        {children}
                    </div>
                </div>
            </div>
            <div className={cnModal('Overlay')} onClick={onClose} />
        </Popup>
    );
};

Modal.displayName = cnModal();
