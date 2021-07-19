import { createClassNameModifier } from '@bem-react/core';

import './Calendar_size_s.css';

export interface CalendarSizeSProps {
    size?: 's';
}

export const withSizeS = createClassNameModifier<CalendarSizeSProps>('Calendar', { size: 's' });
