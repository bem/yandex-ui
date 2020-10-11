import React, { FC } from 'react';
/* eslint-disable-next-line */
import { MDXProviderComponents, MDXProvider } from '@mdx-js/react';

import { Example } from '../Example';
import { Sandbox } from '../Sandbox';
import { CodeHighlighter } from '../CodeHighlighter';
import * as typography from '../Typography';

const components: MDXProviderComponents = {
    Example,
    Sandbox,
    code: CodeHighlighter,
    h1: typography.H1,
    h2: typography.H2,
    h3: typography.H3,
    h4: typography.H4,
    h5: typography.H5,
    p: typography.P,
    blockquote: typography.Blockquote,
    table: typography.Table,
    ol: typography.Ol,
    ul: typography.Ul,
    img: typography.Img,
    a: typography.A,
};

export const MDXLayoutProvider: FC = ({ children }) => <MDXProvider components={components}>{children}</MDXProvider>;
