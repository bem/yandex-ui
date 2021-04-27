import React, { FC } from 'react';
import { MDXProviderComponents, MDXProvider } from '@mdx-js/react';

import { PropsTable } from './PropsTable';
import { CodeHighlighter } from './CodeHighlighter';
import { Example } from './Example';
import { Disclaimer } from './Disclaimer';
import * as Typography from './Typography';
import { InlineCode } from './InlineCode';

const components: MDXProviderComponents = {
    PropsTable,
    Example,
    Disclaimer,

    code: CodeHighlighter,
    inlineCode: InlineCode,

    h1: Typography.H1,
    h2: Typography.H2,
    h3: Typography.H3,
    h4: Typography.H4,
    h5: Typography.H5,
    p: Typography.P,
    a: Typography.Link,
    strong: Typography.Strong,

    // Unstyled components.
    blockquote: Typography.Blockquote,
    table: Typography.Table,
    ol: Typography.Ol,
    ul: Typography.Ul,
    img: Typography.Img,
};

export const MDXLayoutProvider: FC = (props) => {
    const { children } = props;

    return <MDXProvider components={components}>{children}</MDXProvider>;
};
