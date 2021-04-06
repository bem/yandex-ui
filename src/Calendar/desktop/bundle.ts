import { compose, composeU } from '@bem-react/core';

import { unstable_Calendar as UnstyledCalendar, withSizeL, withSizeM, withSizeS, withViewDefault } from './index';

export * from './index';

export const unstable_Calendar = compose(
    withViewDefault,
    composeU(withSizeS, withSizeM, withSizeL),
)(UnstyledCalendar);

if (process.env.NODE_ENV !== 'production') {
    unstable_Calendar.displayName = 'Bundle(CalendarDesktop)';
}
