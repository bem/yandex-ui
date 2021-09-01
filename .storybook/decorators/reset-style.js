import React from 'react';

export const withResetPaddings = (Story) => {
    document.body.style.padding = '8px';

    return <Story />;
};
