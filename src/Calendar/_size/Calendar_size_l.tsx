import { createClassNameModifier } from '@bem-react/core';

import './Calendar_size_l.css';

export interface CalendarSizeLProps {
    size?: 'l';
}

export const withSizeL = createClassNameModifier<CalendarSizeLProps>('Calendar', { size: 'l' });
