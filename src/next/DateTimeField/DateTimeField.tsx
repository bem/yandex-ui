import React, { FC, ReactNode, useRef, useState } from 'react';
import { FocusManagerScope } from 'web-platform-alpha/libs/focus';
import {
    useDateTimeFieldState,
    UseDateTimeFieldStateProps,
    UseDateTimeFieldProps,
    useFocusWithin,
} from 'web-platform-alpha';

import { cnDateTimeField } from './DateTimeField.const';
import { DateTimeFieldBase } from './Base';
import { DateTimeFieldControl } from './Control';
import { DateTimeFieldSlot } from './Slot';

export interface DateTimeFieldProps extends UseDateTimeFieldProps, UseDateTimeFieldStateProps {
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
     * Устанавливает фокус в первый сегмент даты
     */
    autoFocus?: boolean;

    'data-testid'?: string;
}

export const DateTimeField: FC<DateTimeFieldProps> = (props) => {
    const { addonBefore, addonAfter, className, 'data-testid': testId, autoFocus, ...otherProps } = props;
    const { disabled } = otherProps;
    const focusScopeRef = useRef<HTMLSpanElement>(null);
    const state = useDateTimeFieldState(otherProps);
    const [focusWithin, setFocusWithin] = useState(false);
    const { focusWithinProps } = useFocusWithin({ disabled, onFocusWithinChange: setFocusWithin });

    return (
        <DateTimeFieldBase
            className={cnDateTimeField({ disabled, focused: focusWithin }, [className])}
            {...focusWithinProps}
            data-testid={testId}
        >
            {addonBefore && <DateTimeFieldSlot name="before">{addonBefore}</DateTimeFieldSlot>}
            <DateTimeFieldSlot ref={focusScopeRef} name="control">
                <FocusManagerScope scopeRef={focusScopeRef} autoFocus={autoFocus}>
                    <DateTimeFieldControl state={state} {...otherProps} />
                </FocusManagerScope>
            </DateTimeFieldSlot>
            {addonAfter && <DateTimeFieldSlot name="after">{addonAfter}</DateTimeFieldSlot>}
        </DateTimeFieldBase>
    );
};

if (process.env.NODE_ENV !== 'production') {
    DateTimeField.displayName = 'DateTimeField';
}
