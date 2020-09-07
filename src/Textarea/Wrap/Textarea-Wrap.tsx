import React, { FC, Ref } from 'react';

import { cnTextarea } from '../Textarea';
import './Textarea-Wrap.css';

export interface TextareaWrapProps {
    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Ссылка на враппер DOM-элемента нативного инпута.
     */
    innerRef?: Ref<HTMLSpanElement>;
}

export const TextareaWrap: FC<TextareaWrapProps> = ({ className, innerRef, children, ...props }) => (
    <span {...props} className={cnTextarea('Wrap', null, [className])} ref={innerRef}>
        {children}
    </span>
);
