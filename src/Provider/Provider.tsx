import React, { FC } from 'react';

import { LocaleProvider, useLocale } from '../i18n';
import { SSRProvider } from '../ssr';

export interface ProviderProps {
    locale?: string;
}

export const Provider: FC<ProviderProps> = (props) => {
    const { locale, children } = props;
    const localeData = useLocale();

    return (
        <SSRProvider>
            <LocaleProvider locale={locale || localeData.locale}>{children}</LocaleProvider>
        </SSRProvider>
    );
};
