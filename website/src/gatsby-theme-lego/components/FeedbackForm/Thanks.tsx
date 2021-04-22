import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Text } from '@yandex-lego/components/Text/bundle';

import { SmileIcon } from './SmileIcon';

export const Thanks: FC = () => {
    return (
        <Container>
            <Text typography="body-short-xl" weight="bold">
                Благодарим за отзыв!
            </Text>
            <SmileIcon />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;

    .Text {
        margin-right: 16px;
    }
`;
