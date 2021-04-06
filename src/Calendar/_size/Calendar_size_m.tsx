import { createClassNameModifier } from '@bem-react/core';

import './Calendar_size_m.css';

export interface CalendarSizeMProps {
    size?: 'm';
}

export const withSizeM = createClassNameModifier<CalendarSizeMProps>('Calendar', { size: 'm' });
