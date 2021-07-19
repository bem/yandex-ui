import { createClassNameModifier } from '@bem-react/core';

import './Calendar_view_default.css';

export interface CalendarViewDefaultProps {
    view?: 'default';
}

export const withViewDefault = createClassNameModifier<CalendarViewDefaultProps>('Calendar', { view: 'default' });
