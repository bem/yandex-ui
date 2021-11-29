import React, { ComponentType, FC, useRef } from 'react';
import {
    BaseDatePickerProps,
    BaseDateRangePickerProps,
    DateValue,
    DOMProps,
    SharedDatePickerProps,
    UseDatePickerStateResult,
    UseDateRangePickerStateResult,
    useDatePicker,
    useFocusTrap,
    useLocale,
} from 'web-platform-alpha';
import { Calendar as CalendarIcon } from '@yandex/ui-icons';

import { Popup } from '../../Popup/desktop/bundle';
import { TextFieldButton } from '../TextField';
import type { DateTimeFieldProps, DateTimeRangeFieldProps } from '../DateTimeField/desktop/bundle';
import type { CalendarProps, RangeCalendarProps } from '../Calendar/desktop/bundle';
import { POPOVER_DIRECTIONS, RTL_POPOVER_DIRECTIONS, cnDatePicker } from './constants';
import './DatePicker.css';

interface CreateDatePickerOptions {
    displayName?: string;
    defaultProps?: any;
    hooks: {
        useDatePickerState: (props: BaseDatePickerProps) => UseDatePickerStateResult;
    };
    slots: {
        DateField: ComponentType<DateTimeFieldProps>;
        Calendar: ComponentType<CalendarProps>;
    };
}

interface CreateDateRangePickerOptions {
    displayName?: string;
    defaultProps?: any;
    hooks: {
        useDatePickerState: (props: BaseDateRangePickerProps) => UseDateRangePickerStateResult;
    };
    slots: {
        DateField: ComponentType<DateTimeRangeFieldProps>;
        Calendar: ComponentType<RangeCalendarProps>;
    };
}

export interface SharedPickerProps extends SharedDatePickerProps, DOMProps {
    /**
     * @internal
     */
    'data-testid'?: string;
    formatOptions?: Intl.DateTimeFormatOptions;
    placeholder?: DateValue;
    showDaysOfWeek?: boolean;
    showOutsideDays?: boolean;
    showQuarters?: boolean;
    showWeekNumbers?: boolean;
    size?: 's' | 'm';
    view?: 'default';
}

export function createDatePicker(options: CreateDatePickerOptions): FC<SharedPickerProps & BaseDatePickerProps>;

export function createDatePicker(
    options: CreateDateRangePickerOptions,
): FC<SharedPickerProps & BaseDateRangePickerProps>;

export function createDatePicker(options: CreateDatePickerOptions | CreateDateRangePickerOptions) {
    const { displayName, defaultProps, hooks, slots } = options;
    const { useDatePickerState } = hooks;
    const { DateField, Calendar } = slots;

    const DatePicker: FC<SharedPickerProps> = (props) => {
        const {
            'data-testid': testId,
            autoFocus,
            className,
            disabled,
            formatOptions,
            max,
            min,
            placeholder,
            readOnly,
            showDaysOfWeek,
            showOutsideDays,
            showQuarters,
            showWeekNumbers,
            size,
            view,
        } = props;
        const anchorRef = useRef<HTMLDivElement>(null);
        const focusTrapRef = useRef<HTMLDivElement>(null);
        const triggerRef = useRef<HTMLButtonElement>(null);

        const state = useDatePickerState(props);
        const { groupProps, triggerProps } = useDatePicker(props, state);

        const { isRTL } = useLocale();

        useFocusTrap({ scopeRef: focusTrapRef, enabled: state.isOpen });

        const handleOnClose = (event: unknown) => {
            const target = (event as Event).target as HTMLElement;
            // HACK: Use this handler for anchor and compare target with trigger because
            // popup cannot close after click for anchor.
            if (!triggerRef.current?.contains(target) && !focusTrapRef.current?.contains(target)) {
                state.setOpen(false);
            }
        };

        return (
            <div
                {...groupProps}
                className={cnDatePicker(null, [className])}
                ref={anchorRef}
                data-testid={testId}
                onClick={handleOnClose}
            >
                <DateField
                    formatOptions={formatOptions}
                    disabled={disabled}
                    readOnly={readOnly}
                    autoFocus={autoFocus}
                    view={view}
                    size={size}
                    // @ts-expect-error (Can't infer correctly type with union case)
                    value={state.value as unknown}
                    // @ts-expect-error (Can't infer correctly type with union case)
                    onChange={state.setValue as unknown}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    addonAfter={
                        <TextFieldButton
                            {...triggerProps}
                            className="DatePicker-Button"
                            disabled={disabled || readOnly}
                            ref={triggerRef}
                        >
                            <CalendarIcon size={16} />
                        </TextFieldButton>
                    }
                />
                <Popup
                    keepMounted={false}
                    view="default"
                    target="anchor"
                    anchor={anchorRef}
                    visible={state.isOpen}
                    onClose={handleOnClose}
                    direction={isRTL ? RTL_POPOVER_DIRECTIONS : POPOVER_DIRECTIONS}
                    innerRef={focusTrapRef}
                >
                    <Calendar
                        autoFocus
                        view={view}
                        size={size}
                        showOutsideDays={showOutsideDays}
                        showDaysOfWeek={showDaysOfWeek}
                        showQuarters={showQuarters}
                        showWeekNumbers={showWeekNumbers}
                        // @ts-expect-error
                        onChange={state.setValue}
                        // @ts-expect-error
                        value={state.value}
                        // @ts-expect-error
                        min={min}
                        // @ts-expect-error
                        max={max}
                    />
                </Popup>
            </div>
        );
    };

    if (process.env.NODE_ENV !== 'production') {
        DatePicker.displayName = displayName;
    }

    DatePicker.defaultProps = defaultProps;

    return DatePicker;
}
