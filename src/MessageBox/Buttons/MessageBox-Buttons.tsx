import React, { FC } from 'react';

import { cnMessageBox } from '../MessageBox';
import './MessageBox-Buttons.css';

export const MessageBoxButtons: FC = ({ children }) => (
    <div className={cnMessageBox('Buttons')}>{children}</div>
);
