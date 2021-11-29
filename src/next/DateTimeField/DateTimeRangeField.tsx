import React, { FC, ReactNode, useCallback, useRef, useState } from 'react';
import { FocusManagerScope } from 'web-platform-alpha/libs/focus';
import {
    DateTimeChangeEvent,
    RangeValue,
    useDateTimeFieldState,
    useFocusWithin,
    UseDateTimeFieldStateProps,
} from 'web-platform-alpha';

import { cnDateTimeField } from './DateTimeField.const';
import { DateTimeFieldBase } from './Base';
import { DateTimeFieldControl } from './Control';
import { DateTimeFieldRangeDash } from './RangeDash';
import { DateTimeFieldSlot } from './Slot';

// TODO: add aria props from UseDateTimeFieldProps
export interface DateTimeRangeFieldProps extends Omit<UseDateTimeFieldStateProps, 'value' | 'onChange'> {
    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Дополнительный контент после контрола
     */
    addonAfter?: ReactNode;

    /**
     * Дополнительный контент перед контролом
     */
    addonBefore?: ReactNode;

    /**
     * Значение контрола
     */
    value?: RangeValue<Date | null>;

    /**
     * Обработчик изменения значения
     */
    onChange?: (value: RangeValue<Date | null>) => void;

    /**
     * Устанавливает фокус в первый сегмент даты
     */
    autoFocus?: boolean;

    'data-testid'?: string;
}

export const DateTimeRangeField: FC<DateTimeRangeFieldProps> = (props) => {
    const {
        addonBefore,
        addonAfter,
        className,
        value = { start: null, end: null },
        onChange,
        'data-testid': testId,
        autoFocus,
        ...otherProps
    } = props;
    const { disabled } = otherProps;
    const focusScopeRef = useRef<HTMLSpanElement>(null);
    const [focusWithin, setFocusWithin] = useState(false);
    const { focusWithinProps } = useFocusWithin({
        disabled,
        onFocusWithinChange: setFocusWithin,
    });

    const onStartChange = useCallback(
        (event: DateTimeChangeEvent) => {
            onChange?.({ start: event.value, end: value.end });
        },
        [onChange, value.end],
    );

    const onEndChange = useCallback(
        (event: DateTimeChangeEvent) => {
            onChange?.({ start: value.start, end: event.value });
        },
        [onChange, value.start],
    );

    const startState = useDateTimeFieldState({
        ...otherProps,
        value: value.start,
        onChange: onStartChange,
    });

    const endState = useDateTimeFieldState({
        ...otherProps,
        value: value.end,
        onChange: onEndChange,
        min: value.start ?? otherProps.min,
    });

    return (
        <DateTimeFieldBase
            className={cnDateTimeField({ disabled, focused: focusWithin }, [className])}
            {...focusWithinProps}
            data-testid={testId}
        >
            {addonBefore && <DateTimeFieldSlot name="before">{addonBefore}</DateTimeFieldSlot>}
            <DateTimeFieldSlot ref={focusScopeRef} name="control">
                <FocusManagerScope scopeRef={focusScopeRef} autoFocus={autoFocus}>
                    <DateTimeFieldControl state={startState} />
                    <DateTimeFieldRangeDash />
                    <DateTimeFieldControl state={endState} />
                </FocusManagerScope>
            </DateTimeFieldSlot>
            {addonAfter && <DateTimeFieldSlot name="after">{addonAfter}</DateTimeFieldSlot>}
        </DateTimeFieldBase>
    );
};

if (process.env.NODE_ENV !== 'production') {
    DateTimeRangeField.displayName = 'DateTimeRangeField';
}
