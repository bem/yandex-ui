import { css } from '@emotion/react';

// @ts-expect-error
import latin400 from '!!file-loader!./jetbrains-mono-latin-400-normal.woff2';
// @ts-expect-error
import cyrillic400 from '!!file-loader!./jetbrains-mono-cyrillic-400-normal.woff2';

export const fonts = css`
    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${latin400}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${cyrillic400}) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
`;
