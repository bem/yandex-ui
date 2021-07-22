import React from 'react';

import { Layout } from '../src/components/Layout';
import { PageContextProvider } from '../src/components/PageContextProvider';

export const wrapPageElement = (options) => {
    const { element, props } = options;

    if (props.custom404) {
        return element;
    }

    return (
        <PageContextProvider context={props.pageContext}>
            <Layout {...props}>{element}</Layout>
        </PageContextProvider>
    );
};
