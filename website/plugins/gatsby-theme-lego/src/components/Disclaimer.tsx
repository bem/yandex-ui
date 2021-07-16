import React, { FC } from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

import { components } from './MDXLayoutProvider';
import { InlineCode } from './InlineCode';

export const Disclaimer: FC<{ children: string }> = (props) => {
    const { children } = props;
    const renderers = { ...components, code: InlineCode };

    return (
        <Container>
            <ReactMarkdown components={renderers}>{children}</ReactMarkdown>
        </Container>
    );
};

const Container = styled.div`
    margin: 9px 0;
    padding: 0 24px;

    border-radius: 8px;
    background-color: rgba(235, 50, 38, 0.08);
`;
