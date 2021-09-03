import { AnimationEventHandler, useCallback, useRef, useState } from 'react';

import { useUpdateEffect } from '../useUpdateEffect';

/**
 * @internal
 */
export interface UseTextFieldHintProps {
    hint?: string;
}

/**
 * @internal
 */
export interface UseTextFieldHintResult {
    hint?: string;
    hintProps: {
        leave: boolean;
        onAnimationEnd: AnimationEventHandler<HTMLSpanElement>;
    };
}

/**
 * @internal
 */
export function useTextFieldHint(props: UseTextFieldHintProps): UseTextFieldHintResult {
    const { hint: htmlHint } = props;

    const [hint, setHint] = useState(htmlHint);
    const [isLeave, setHintLeave] = useState(false);
    const prevHint = useRef(htmlHint);

    useUpdateEffect(() => {
        if (htmlHint) {
            setHint(htmlHint);
        }

        setHintLeave(Boolean(prevHint.current && !htmlHint));

        prevHint.current = htmlHint;
    }, [htmlHint]);

    const onAnimationEnd = useCallback(() => {
        if (!htmlHint) {
            setHint('');
            setHintLeave(false);
        }
    }, [htmlHint]);

    return {
        hint,
        hintProps: {
            leave: isLeave,
            onAnimationEnd,
        },
    };
}
