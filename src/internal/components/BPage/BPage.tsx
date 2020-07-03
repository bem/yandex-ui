import React, { HTMLAttributes, RefObject } from 'react';
import { cn } from '@bem-react/classname';

import './BPage@common.css';

export const cnBPage = cn('BPage');

export interface IBPageProps extends HTMLAttributes<HTMLDivElement> {
    innerRef?: RefObject<HTMLDivElement>;
}

/**
 * Вспомогательный блок для hermione тестов.
 * @internal
 */
export const BPage = ({ children, className, innerRef, ...props }: IBPageProps) => (
    <div {...props} ref={innerRef} className={cnBPage({}, [cnBPage('Body'), className])}>
        {children}
    </div>
);
