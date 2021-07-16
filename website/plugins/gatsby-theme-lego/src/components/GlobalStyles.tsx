import React, { FC } from 'react';
import { Global, css } from '@emotion/react';

import { fonts } from '../fonts';

const styles = css`
    ${fonts}

    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
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
        font-size: var(--text-body-short-size-xl-font-size);
        line-height: var(--text-body-short-size-xl-line-height);
        letter-spacing: var(--text-body-short-size-xl-letter-spacing);

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
        font-size: var(--text-body-short-size-xl-font-size);
        line-height: var(--text-body-short-size-xl-line-height);
        letter-spacing: var(--text-body-short-size-xl-letter-spacing);

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
        font-size: var(--text-body-long-size-xl-font-size);
        line-height: var(--text-body-long-size-xl-line-height);
        letter-spacing: var(--text-body-long-size-xl-letter-spacing);

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

    /* Prism styles */
    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #b2b2b2;
    }

    .token.property,
    .token.number,
    .token.function-name,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #5a9bcf;
    }

    .token.boolean {
        color: #ff8b50;
    }

    .token.tag {
        color: #fc929e;
    }

    .token.string {
        color: #8dc891;
    }

    .token.punctuation {
        color: #88c6be;
    }

    .token.selector,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #d8dee9;
    }

    .token.function {
        color: #79b6f2;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .token.variable,
    .token.constant {
        color: #d7deea;
    }

    .token.attr-value {
        color: #8dc891;
    }

    .token.keyword {
        color: #c5a5c5;
    }

    .token.atrule,
    .token.class-name {
        color: #fac863;
    }

    .token.attr-name {
        color: #c5a5c5;
    }
`;

export const GlobalStyles: FC = () => {
    return <Global styles={styles} />;
};
