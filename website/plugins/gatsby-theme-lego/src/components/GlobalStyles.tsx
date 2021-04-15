import React, { FC } from 'react';
import { Global, css } from '@emotion/react';

const styles = css`
    body {
        margin: 0;
        padding: 0;
    }

    a {
        font-family: var(--typography-font-family);
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin-top: 0;
        margin-bottom: 16px;
    }

    h1 + *,
    h2 + *,
    h3 + *,
    h4 + *,
    h5 + * {
        margin-top: 0 !important;
    }

    code {
        display: inline;

        padding: 1px 6px;

        font-family: Menlo, monospace;
        font-size: var(--text-body-short-size-m-font-size);
        line-height: var(--text-body-short-size-m-line-height);
        letter-spacing: var(--text-body-short-size-m-letter-spacing);

        border-radius: 4px;
        background-color: #f1f2f5;
    }

    p,
    .unstyled-ul,
    .unstyled-ol,
    .unstyled-blockquote,
    .unstyled-img,
    .unstyled-table {
        margin: 12px 0;
    }

    .unstyled-table {
        border-spacing: 0;
        border-collapse: collapse;

        font-family: var(--typography-font-family);
        font-size: var(--text-body-short-size-m-font-size);
        line-height: var(--text-body-short-size-m-line-height);
        letter-spacing: var(--text-body-short-size-m-letter-spacing);

        border: 1px solid #f5f5f5;
    }

    .unstyled-table td,
    .unstyled-table th {
        padding: 6px;

        text-align: left;
        vertical-align: top;

        border: 1px solid #f5f5f5;
    }

    .unstyled-table th {
        border-bottom-width: 2px;
    }

    .unstyled-ul,
    .unstyled-ol {
        font-family: var(--typography-font-family);
        font-size: var(--text-body-long-size-m-font-size);
        line-height: var(--text-body-long-size-m-line-height);
        letter-spacing: var(--text-body-long-size-m-letter-spacing);

        padding-left: 32px;
    }

    .unstyled-ul li + li,
    .unstyled-ol li + li {
        margin-top: 12px;
    }

    .unstyled-img {
        max-width: 100%;
    }

    .unstyled-blockquote {
        box-sizing: border-box;
        margin-right: 0;
        margin-left: 0;
        padding: 16px;

        border-radius: 4px;
        background: #fffae7;
    }

    .unstyled-blockquote > :last-child {
        margin-bottom: 0;
    }

    .unstyled-blockquote > :first-of-type {
        margin-top: 0;
    }
`;

export const GlobalStyles: FC = () => {
    return <Global styles={styles} />;
};
