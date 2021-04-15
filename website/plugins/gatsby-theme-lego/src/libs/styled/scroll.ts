import { css } from '@emotion/react';

export const applyStyledScroll = ({ width = '12px' }) => css`
    --scrollbar-width: ${width};
    --color-scroll-track: transparent;
    --color-scroll-corner: rgba(0, 0, 0, 0.1);
    --color-scroll-handle: rgba(0, 0, 0, 0.1);
    --color-scroll-handle-hover: rgba(0, 0, 0, 0.15);

    scrollbar-width: var(--scrollbar-width);
    scrollbar-color: var(--color-scroll-handle) var(--color-scroll-track);

    &::-webkit-scrollbar {
        width: var(--scrollbar-width);
        height: var(--scrollbar-width);

        background-color: var(--color-scroll-track);
    }

    &::-webkit-scrollbar-track {
        background-color: var(--color-scroll-track);
    }

    &::-webkit-scrollbar-corner {
        background-color: var(--color-scroll-corner);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-scroll-handle);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-scroll-handle-hover);
    }
`;
