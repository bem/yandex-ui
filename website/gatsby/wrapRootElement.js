import React from 'react';

import { ClickCatcher } from '../src/libs/analytics';

export const wrapRootElement = (props) => {
    const { element } = props;

    return <ClickCatcher>{element}</ClickCatcher>;
};
