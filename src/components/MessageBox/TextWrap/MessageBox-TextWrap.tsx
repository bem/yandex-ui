import React, { FC, ReactNode } from 'react';

import { cnMessageBox } from '../MessageBox';
import './MessageBox-TextWrap.css';

export type MessageBoxTextWrapProps = {
    className?: string;
    align?: 'left' | 'right' | 'center';
    leading?: ReactNode;
    trailing?: ReactNode;
};

export const MessageBoxTextWrap: FC<MessageBoxTextWrapProps> = ({
    className,
    align = 'left',
    children,
    leading,
    trailing,
}) => {
    return (
        <div className={cnMessageBox('TextWrap', { align }, [className])}>
            {leading && <div className={cnMessageBox('TextLeft')}>{leading}</div>}
            {children && <div className={cnMessageBox('Text')}>{children}</div>}
            {trailing && <div className={cnMessageBox('TextRight')}>{trailing}</div>}
        </div>
    );
};
