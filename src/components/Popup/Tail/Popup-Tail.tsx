import React, { CSSProperties, FC, Ref } from 'react';

import { cnPopup } from '../Popup';
import './Popup-Tail.css';

export interface IPopupTailProps {
    /**
     * Ссылка на хвостик
     */
    innerRef?: Ref<HTMLDivElement>;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Пользовательские стили
     */
    style?: CSSProperties;
}

export const PopupTail: FC<IPopupTailProps> = ({ className, innerRef, children, ...props }) => (
    <div {...props} className={cnPopup('Tail', null, [className])} ref={innerRef}>{children}</div>
);
