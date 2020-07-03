import React, { FC, ReactNode, MouseEventHandler, Ref, RefObject } from 'react';
import { cn } from '@bem-react/classname';

import { MessageBoxClose as Close } from './Close/MessageBox-Close';
import { MessageBoxButtons as Buttons } from './Buttons/MessageBox-Buttons';
import { MessageBoxTail as Tail } from './Tail/MessageBox-Tail';
import './MessageBox.css';

export { MessageBoxCorner as Corner, MessageBoxCornerProps } from './Corner/MessageBox-Corner';
export { MessageBoxTextWrap as Wrapper, MessageBoxTextWrapProps } from './TextWrap/MessageBox-TextWrap';

export type MessageBoxProps = {
    /**
     * Дополнительный className
     */
    className?: string;

    /**
     * Элемент, который будет размещен в углу компонента
     */
    corner?: ReactNode;

    /**
     * Делает фон непрозрачным
     */
    opaque?: boolean;

    /**
     * Обработчик клика на close элемент и индикатор того, что close надо показать
     */
    onClose?: MouseEventHandler<HTMLButtonElement>;

    /**
     * Кнопка или набор кнопок, которые будут размещены внизу компонента
     */
    actions?: ReactNode;

    /**
     * Элемент, который будет размещен на фоне компонента
     */
    background?: ReactNode;

    /**
     * Раскладка компонента
     *
     * @default 'plain'
     */
    layout?: 'tooltip' | 'plain' | 'functional';

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLDivElement>;

    /**
     * Ссылка на DOM-элемент хвостика
     */
    tailRef?: Ref<HTMLDivElement>;

    /**
     * Включает/отключает хвостик у компонента
     */
    hasTail?: boolean;
};

export const cnMessageBox = cn('MessageBox');

/**
 * Визуальный компонент для уведомлений, плашек и других паттернов.
 * @param {MessageBoxProps} props
 */
export const MessageBox: FC<MessageBoxProps> = ({
    actions,
    background,
    children,
    className,
    corner,
    hasTail,
    innerRef,
    layout = 'plain',
    onClose,
    opaque,
    tailRef,
}) => (
    <div className={cnMessageBox({ opaque, layout, hasClose: Boolean(onClose) }, [className])} ref={innerRef}>
        <div className={cnMessageBox('Backdrop')}>
            {hasTail && <Tail innerRef={tailRef} />}
            {background && <div className={cnMessageBox('Background')}>{background}</div>}
        </div>
        <div className={cnMessageBox('Content')}>
            {children}
            {onClose && <Close onClick={onClose} />}
        </div>
        {actions && <Buttons>{actions}</Buttons>}
        {corner}
    </div>
);

MessageBox.displayName = 'MessageBox';
