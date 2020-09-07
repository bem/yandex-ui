import { useEffect } from 'react';

let counter = 0;
let originalOverflow: CSSStyleDeclaration['overflow'];

const lock = () => {
    originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
};

const unlock = () => {
    document.body.style.overflow = originalOverflow;
};

const increment = () => {
    counter++;
    if (counter === 1) lock();
};

const decrement = () => {
    counter--;
    if (counter === 0) unlock();
};

/**
 * Управляет значением overflow на body
 */
export const useLockBodyScroll = (enabled: boolean = true) => {
    useEffect(() => (enabled ? (increment(), decrement) : undefined), [enabled]);
};
