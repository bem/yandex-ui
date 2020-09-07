import { useRef, useEffect } from 'react';

import { Maybe } from '../typings/utility-types';

/**
 * React-хук, возвращающий значение свойства из предыдущего рендера.
 * @param value Значение свойства.
 */
export function usePreviousValue<T>(value: T): Maybe<T> {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
