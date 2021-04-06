import { useState, useCallback } from 'react';

import { DateValue } from '../Calendar';

// NOTE: На данный момент хук является приватным,
// т.к. название `useCalendarState` возможно будет использовано для другого сценария.

/**
 * @internal
 */
export function useCalendarState(props: { value?: DateValue; currentDate?: Date } = {}) {
    const [value, setValue] = useState(props.value);
    const onChange = useCallback((_, nextValue) => setValue(nextValue), []);

    return { onChange, value, currentDate: props.currentDate };
}
