import React, { FC } from 'react';
import styled from '@emotion/styled';

export const Disclaimer: FC = (props) => {
    const { children } = props;

    return <Container>{children}</Container>;
};

const Container = styled.div`
    margin: 9px 0;
    padding: 20px;

    border-radius: 4px;
    background-color: rgba(235, 50, 38, 0.08);
`;
