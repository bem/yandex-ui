import React, { FC } from 'react';
import styled from '@emotion/styled';

export const InlineCode: FC = (props) => {
    const { children } = props;

    return <Container>{children}</Container>;
};

const Container = styled.span`
    display: inline-flex;

    font-family: var(--typography-font-family);
    font-size: var(--text-body-long-size-l-font-size);
    line-height: var(--text-body-long-size-l-line-height);
    letter-spacing: var(--text-body-long-size-l-letter-spacing);

    padding: 0px 6px;
    border-radius: 4px;

    background-color: #f1f2f5;
    color: #676670;
`;
