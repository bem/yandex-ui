import React, { FC, AnimationEventHandler } from 'react';

import { cnTextinput } from '../Textinput';
import './Textinput-Hint.css';

export interface TextinputHintProps {
    leave: boolean;
    onAnimationEnd: AnimationEventHandler<HTMLSpanElement>;
}

export const TextinputHint: FC<TextinputHintProps> = ({ leave, onAnimationEnd, children }) => (
    <span className={cnTextinput('Hint', { leave })} onAnimationEnd={onAnimationEnd}>
        {children}
    </span>
);
