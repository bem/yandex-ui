import React, { FC } from 'react';

import { sendMetrikaGoal } from './senders';

export const ClickCatcher: FC = (props) => {
    const { children } = props;

    const onClick = (event) => {
        if (event.target.dataset.analytics) {
            sendMetrikaGoal(event.target.dataset.analytics);
        }
    };

    return <div onClick={onClick}>{children}</div>;
};
