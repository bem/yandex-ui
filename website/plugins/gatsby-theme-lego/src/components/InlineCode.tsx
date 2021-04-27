import React, { FC } from 'react';
import styled from '@emotion/styled';

export const InlineCode: FC = (props) => {
    const { children } = props;

    return <Container>{children}</Container>;
};

const Container = styled.span`
    display: inline-flex;

    font-size: 14px;
    line-height: 18px;

    padding: 0px 6px;
    border-radius: 4px;

    background-color: #f1f2f5;
    color: #676670;
`;
