import React, { FC, MouseEventHandler, RefObject, useRef } from 'react';
import { cn } from '@bem-react/classname';

import { usePreventScroll } from '../usePreventScroll';
import { useFocusTrap } from '../useFocusTrap';
import { PortalExtendableProps, Portal } from '../Portal';
import { LayerManagerExtendableProps, LayerManager } from '../LayerManager';
import './Modal.css';

interface FocusTrapProps {
    /**
     * Включить ловушку фокуса
     *
     * @default true
     */
    trapFocus?: boolean;

    /**
     * Выставить фокус на первый интерактивный элемент
     * в пределах модального окна
     *
     * @default true
     */
    autoFocus?: boolean;

    /**
     * Вернуть фокус на элемент после закрытия,
     * который вызвал модальное окно
     *
     * @default true
     */
    restoreFocus?: boolean;

    /**
     * Ссылка на элемент, на который будет возвращен
     * фокус после закрытия
     */
    restoreFocusRef?: RefObject<HTMLElement>;
}

export interface IModalProps extends PortalExtendableProps, LayerManagerExtendableProps, FocusTrapProps {
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
    trapFocus = true,
    autoFocus = true,
    restoreFocus = true,
    restoreFocusRef,
    ...props
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    usePreventScroll({ enabled: preventBodyScroll && visible });
    useFocusTrap({
        enabled: trapFocus && visible,
        scopeRef: contentRef,
        autoFocus,
        restoreFocus,
        restoreFocusRef,
    });

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
                                <div
                                    ref={contentRef}
                                    className={cnModal('Content')}
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-modal
                                >
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
