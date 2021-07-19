import { createClassNameModifier } from '@bem-react/core';

import './Calendar_view_brand.css';

export interface CalendarViewBrandProps {
    view?: 'brand';
}

export const withViewBrand = createClassNameModifier<CalendarViewBrandProps>('Calendar', { view: 'brand' });
