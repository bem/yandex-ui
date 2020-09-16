import { RefObject } from 'react';

export const calculateItemWidth = (
    element: RefObject<HTMLLIElement | HTMLUListElement>,
    withMargins?: boolean
): number => {
    if (!(element && element.current)) return 0;

    const style = window.getComputedStyle(element.current);
    const width = parseInt(style.width || '0');

    if (withMargins) {
        return width + parseInt(style.marginLeft || '0') + parseInt(style.marginRight || '0');
    }

    return width;
};
