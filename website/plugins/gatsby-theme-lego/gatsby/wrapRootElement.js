import React from 'react';
import { SSRProvider } from '@yandex-lego/components/ssr';

import { MDXLayoutProvider } from '../src/components/MDXLayoutProvider';
import { LegoThemeProvider } from '../src/components/LegoThemeProvider';
import { GlobalStyles } from '../src/components/GlobalStyles';

export const wrapRootElement = (props) => {
    const { element } = props;

    return (
        <SSRProvider>
            <GlobalStyles />
            <LegoThemeProvider>
                <MDXLayoutProvider>{element}</MDXLayoutProvider>
            </LegoThemeProvider>
        </SSRProvider>
    );
};
