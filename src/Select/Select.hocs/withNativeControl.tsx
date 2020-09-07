import React, { ReactNode, FC } from 'react';

import { ISelectProps, Option, OptionGroup, cnSelect } from '../Select';

export const isGroup = (value: any): value is OptionGroup => {
    return value.items !== undefined;
};

export const toGroupOptions = (option: Option): ReactNode => {
    if (isGroup(option)) {
        return (
            <optgroup key={option.title} label={option.title}>
                {option.items.map(toGroupOptions)}
            </optgroup>
        );
    }

    return (
        <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.content}
        </option>
    );
};

export const withNativeControl = (Select: FC<ISelectProps>) => ({
    addonAfter,
    name,
    onChange,
    options,
    value,
    onClick,
    ...props
}: ISelectProps) => (
    <Select
        {...props}
        value={value}
        options={options}
        addonAfter={
            <>
                <select
                    onClick={onClick}
                    className={cnSelect('Control')}
                    multiple={Array.isArray(value)}
                    name={name}
                    onChange={onChange}
                    tabIndex={-1}
                    value={value}
                >
                    {options.map(toGroupOptions)}
                </select>
                {addonAfter}
            </>
        }
    />
);
