import React, { FC, createContext, useContext } from 'react';

import { LocaleData, getLocaleData } from './getLocaleData';

type ProviderProps = { locale?: string };

const LocaleContext = createContext<string | undefined>(undefined);
const fallbackLocale = (typeof navigator !== 'undefined' && navigator.language) || 'ru-RU';

export const LocaleProvider: FC<ProviderProps> = (props) => {
    const { locale, children } = props;

    return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};

export function useLocale(): LocaleData {
    const contextLocale = useContext(LocaleContext);
    const result = getLocaleData(contextLocale || fallbackLocale);

    return result;
}
