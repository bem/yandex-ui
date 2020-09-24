import React, { FC, AnimationEventHandler } from 'react';

import { cnTextinput } from '../Textinput';
import './Textinput-Hint.css';

export interface TextinputHintProps {
    leave: boolean;
    onAnimationEnd: AnimationEventHandler<HTMLSpanElement>;
    id?: string;
}

export const TextinputHint: FC<TextinputHintProps> = ({ leave, onAnimationEnd, children, id }) => (
    <span className={cnTextinput('Hint', { leave })} onAnimationEnd={onAnimationEnd} id={id}>
        {children}
    </span>
);
