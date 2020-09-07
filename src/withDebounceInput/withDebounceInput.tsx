import React from 'react';
import { DebounceInput } from 'react-debounce-input';

export type PropConstraints<TEventTarget> = {
    value?: any;
    onChange?: React.ChangeEventHandler<TEventTarget>;
};

export type Debounced = {
    /**
     * Минимальная длина строки {@link PropConstraints#value} для вызова {@link PropConstraints#onChange}
     * @default 0
     */
    minLength?: number;

    /**
     * Минимальное время между вызовами {@link PropConstraints#onChange} в миллисекундах
     * @default 0
     */
    debounceTimeout?: number;

    /**
     * Форсировать вызов {@link PropConstraints#onChange} по нажатию Enter
     * @default true
     */
    forceNotifyByEnter?: boolean;

    /**
     * Форсировать вызов {@link PropConstraints#onChange} при потере фокуса
     * @default true
     */
    forceNotifyOnBlur?: boolean;
}

const noop = () => null;

export const withDebounceInput = function <
    TEventTarget,
    TProps extends PropConstraints<TEventTarget>
>(
    Input: React.ComponentType<TProps>,
): React.ComponentType<Debounced & TProps> {
    return ({ onChange = noop, debounceTimeout = 0, ...props }: Debounced & TProps) => (
        <DebounceInput<TEventTarget, any>
            element={Input}
            {...{ onChange, debounceTimeout, ...props }}
        />
    );
};
