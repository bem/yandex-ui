import React, { FC, useCallback, KeyboardEvent } from 'react';

import '../../polyfills/pointerfocus';
import { forceUtilityFocus } from '../../lib/pointerfocus';
import { Keys, isKeyCode } from '../../lib/keyboard';
import { TumblerProps, Tumbler as TumblerCommon, CHECKED_KEYS, UNCHECKED_KEYS } from './Tumbler';

export * from './Tumbler';

export const Tumbler: FC<TumblerProps> = ({ checked, onKeyDown: htmlOnKeyDown, ...props }) => {
    // prettier-ignore
    const onKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
        if (
            (!checked && isKeyCode(event.keyCode, CHECKED_KEYS)) ||
            (checked && isKeyCode(event.keyCode, UNCHECKED_KEYS)) ||
            (event.keyCode === Keys.SPACE)
        ) {
            forceUtilityFocus();
        }

        if (htmlOnKeyDown !== undefined) {
            htmlOnKeyDown(event);
        }
    }, [checked, htmlOnKeyDown]);

    return <TumblerCommon checked={checked} onKeyDown={onKeyDown} {...props} />;
};

Tumbler.displayName = TumblerCommon.displayName;
