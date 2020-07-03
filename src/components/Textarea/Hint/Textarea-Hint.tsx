import React, { FC, AnimationEventHandler } from 'react';

import { cnTextarea } from '../Textarea';
import './Textarea-Hint.css';

export interface TextareaHintProps {
    leave: boolean;
    onAnimationEnd: AnimationEventHandler<HTMLSpanElement>;
}

export const TextareaHint: FC<TextareaHintProps> = ({ leave, onAnimationEnd, children }) => (
    <span className={cnTextarea('Hint', { leave })} onAnimationEnd={onAnimationEnd}>
        {children}
    </span>
);
