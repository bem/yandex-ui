import { createContext, ChangeEventHandler, useContext } from 'react';

type RadioGroupContext = {
    disabled?: boolean;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
}

const RadioGroupContext = createContext<RadioGroupContext>({});

RadioGroupContext.displayName = 'RadioGroup';

export const RadioGroupProvider = RadioGroupContext.Provider;

export const useRadioGroup = (): RadioGroupContext => {
    return useContext(RadioGroupContext);
};
