import React, { useCallback, useState } from 'react';
import { Story } from '@storybook/react';
import {
    DateTimeField,
    DateTimeFieldProps,
    DateTimeRangeField,
    DateTimeRangeFieldProps,
} from '@yandex-lego/components/next/DateTimeField/desktop/bundle';
import { Badge } from '@yandex-lego/components/Badge/desktop';
import { Spin } from '@yandex-lego/components/Spin/desktop/bundle';

const ADDONS = {
    none: undefined,
    badge: <Badge content={7} outlineColor="var(--badge-fill-color)" />,
    spin: <Spin view="default" progress size="xxs" />,
    icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.49951 14.5V11.5H8.50051V14.5H5.49951ZM5.49951 10.5V7.5H8.49951V10.5H5.49951ZM1.49951 14.5V11.5H4.49951V14.5H1.49951ZM1.49951 10.5V7.499H4.49951V10.5H1.49951ZM9.49951 10.5V7.5H12.4995V10.5H9.49951ZM9.49951 14.5V11.5H12.4995V14.5H9.49951ZM9.49951 6.5V3.5H12.4995V6.5H9.49951ZM13.4995 10.5V7.499H16.5005V10.5H13.4995ZM13.4995 6.5V3.5H16.5005V6.5H13.4995ZM5.49951 6.5V3.5H8.50051V6.5H5.49951Z"
                fill="black"
                fillOpacity="0.5"
            />
        </svg>
    ),
};

type AddonsOptions = keyof typeof ADDONS;
type AddonProps = { addonBefore?: AddonsOptions; addonAfter?: AddonsOptions };

type SingleProps = { range: false } & Omit<DateTimeFieldProps, keyof AddonProps> & AddonProps;
type RangeProps = { range: true } & Omit<DateTimeRangeFieldProps, keyof AddonProps> & AddonProps;

export const Playground: Story<SingleProps | RangeProps> = (props) => {
    const { addonBefore = 'none', addonAfter = 'none', onChange, ...otherProps } = props;
    const addonBeforeContent = ADDONS[addonBefore];
    const addonAfterContent = ADDONS[addonAfter];
    const [value, setValue] = useState<any>();

    const handleChange = useCallback(
        (event: any) => {
            setValue(otherProps.range ? event : event.value);
            onChange?.(event);
        },
        [onChange, otherProps.range],
    );

    if (otherProps.range) {
        return (
            <DateTimeRangeField
                addonBefore={addonBeforeContent}
                addonAfter={addonAfterContent}
                value={value}
                onChange={handleChange}
                {...otherProps}
            />
        );
    }

    return (
        <DateTimeField
            addonBefore={addonBeforeContent}
            addonAfter={addonAfterContent}
            value={value}
            onChange={handleChange}
            {...otherProps}
        />
    );
};

Playground.argTypes = {
    view: {
        control: { type: 'select' },
        options: ['default'],
    },
    size: {
        control: { type: 'select' },
        options: ['s', 'm'],
    },
    pin: {
        control: { type: 'select' },
        options: [
            undefined,
            'brick-brick',
            'brick-clear',
            'brick-round',
            'clear-brick',
            'clear-clear',
            'clear-round',
            'round-brick',
            'round-clear',
        ],
    },
    min: {
        control: { type: 'date' },
    },
    max: {
        control: { type: 'date' },
    },
    placeholder: {
        control: { type: 'date' },
    },
    addonBefore: {
        control: { type: 'select' },
        options: ['none', 'badge', 'spin', 'icon'],
    },
    addonAfter: {
        control: { type: 'select' },
        options: ['none', 'badge', 'spin', 'icon'],
    },
    onChange: { action: 'change' },
};

Playground.args = {
    range: false,
    view: 'default',
    size: 'm',
    min: undefined,
    max: undefined,
    placeholder: undefined,
    disabled: false,
    readOnly: false,
    formatOptions: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    },
    addonBefore: 'none',
    addonAfter: 'none',
};
