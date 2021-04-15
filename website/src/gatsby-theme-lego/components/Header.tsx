import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from '@yandex-lego/components/Link';

import { Flex } from '../../../plugins/gatsby-theme-lego/src/components/Flex';
import { Logo } from '../../components/Logo';

export const Header: FC = () => {
    return (
        <Flex as={Container} alignItems="center">
            <Link href="https://lego.yandex-team.ru/">
                <Logo />
            </Link>
        </Flex>
    );
};

const Container = styled.div`
    grid-area: header;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0 24px;
`;
