/**
 * NOTE: При изменениях в этом файле необходимо также учитывать gatsby-browser.
 */

import React from 'react';

import { MetrikaCounter } from './src/libs/analytics';

export { wrapRootElement } from './gatsby/wrapRootElement';

export const onRenderBody = ({ setHeadComponents }) => {
    if (process.env.NODE_ENV === 'production') {
        setHeadComponents([<MetrikaCounter key="metrika-counter" />]);
    }
};
