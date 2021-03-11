import React, { FC, MouseEventHandler, RefObject, useRef } from 'react';
import { cn } from '@bem-react/classname';

import { usePreventScroll } from '../usePreventScroll';
import { PortalExtendableProps, Portal } from '../Portal';
import { LayerManagerExtendableProps, LayerManager } from '../LayerManager';
import './Modal.css';

export interface IModalProps extends PortalExtendableProps, LayerManagerExtendableProps {
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
     * Блокирует прокрутку на теле документа, при открытом модальном окне.
     *
     * @default true
     */
    preventBodyScroll?: boolean;

    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;

    /**
     * Обработчик, вызываемый при срабатывании события click
     */
    onClick?: MouseEventHandler<HTMLDivElement>;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLDivElement>;

    /**
     * Задает слой `z-index`
     */
    zIndex?: number;
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
    innerRef,
    keepMounted,
    onClose,
    preventBodyScroll = true,
    scope,
    visible,
    zIndex,
    ...props
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    usePreventScroll({ enabled: preventBodyScroll && visible });

    return (
        <Portal scope={scope} visible={visible} keepMounted={keepMounted}>
            <LayerManager visible={visible} onClose={onClose} essentialRefs={[contentRef]}>
                <div
                    {...props}
                    ref={innerRef}
                    className={cnModal({ visible, hasAnimation }, [className])}
                    style={{ zIndex }}
                >
                    <div className={cnModal('Overlay')} />
                    <div className={cnModal('Wrapper')}>
                        <div className={cnModal('Table')}>
                            <div className={cnModal('Cell', { align })}>
                                <div ref={contentRef} className={cnModal('Content')}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayerManager>
        </Portal>
    );
};

Modal.displayName = cnModal();
