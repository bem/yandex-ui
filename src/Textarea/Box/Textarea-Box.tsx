import React, { FC } from 'react';

import { cnTextarea } from '../Textarea';
import './Textarea-Box.css';

export interface TextareaBoxProps {
    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const TextareaBox: FC<TextareaBoxProps> = ({ className, children, ...props }) => (
    <span {...props} className={cnTextarea('Box', null, [className])}>
        {children}
    </span>
);
