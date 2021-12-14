import React from 'react';
import { Provider } from '@yandex-lego/components/Provider';

import { MDXLayoutProvider } from '../src/components/MDXLayoutProvider';
import { LegoThemeProvider } from '../src/components/LegoThemeProvider';
import { GlobalStyles } from '../src/components/GlobalStyles';

export const wrapRootElement = (props) => {
    const { element } = props;

    return (
        <Provider locale="ru-RU">
            <GlobalStyles />
            <LegoThemeProvider>
                <MDXLayoutProvider>{element}</MDXLayoutProvider>
            </LegoThemeProvider>
        </Provider>
    );
};
