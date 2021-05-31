import React from 'react';

import { Layout } from '../src/components/Layout';

export const wrapPageElement = (options) => {
    const { element, props } = options;

    if (props.custom404) {
        return element;
    }

    return <Layout {...props}>{element}</Layout>;
};
