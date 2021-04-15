import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';

import { H1, Subheader } from './Typography';
import { Flex } from './Flex';

type PageHeaderProps = {
    title: string;
    description: string;
    links: { label: string; url: string }[];
};

export const PageHeader: FC<PageHeaderProps> = (props) => {
    const { title, description, links } = props;

    return (
        <Container>
            <Inner>
                <H1>{title}</H1>
                {description && <Subheader>{description}</Subheader>}
                {links && <PageLinks links={links} />}
            </Inner>
        </Container>
    );
};

const PageLinks = (props) => {
    const { links } = props;

    return (
        <Flex gap="8px">
            {links.map(({ label, url }) => (
                <Link theme="normal" key={url} href={url} target="_blank">
                    {label}
                </Link>
            ))}
        </Flex>
    );
};

const Container = styled.div`
    grid-area: hero;

    min-height: 224px;
    padding-left: 80px;

    background-color: #f7f8fa;
`;

const Inner = styled.div`
    max-width: 640px;
    padding-top: 42px;
`;
