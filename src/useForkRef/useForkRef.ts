import { useMemo, Ref, MutableRefObject } from 'react';

export function useForkRef(refA?: AnyRef, refB?: AnyRef): (CallbackRef) | null {
    return useMemo(() => {
        if (!refA && !refB) {
            return null;
        }
        return (refValue: HTMLElementOrNull) => {
            if (refA) setRef(refA, refValue);
            if (refB) setRef(refB, refValue);
        };
    }, [refA, refB]);
}

type HTMLElementOrNull = HTMLElement | null;
type CallbackRef = (node: HTMLElementOrNull) => void;
type AnyRef = Ref<HTMLElement>;

function setRef(ref: AnyRef, value: HTMLElementOrNull) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        (ref as MutableRefObject<HTMLElementOrNull>).current = value;
    }
}
