import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button, IButtonProps } from '@yandex-lego/components/Button/desktop/bundle';

import { ArcIcon, FigmaIcon, StorybookIcon } from '../icons';
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
            </Inner>
            {links && <PageLinks links={links} />}
        </Container>
    );
};

// FIXME: Вынести отсюда и сделать добавление иконки и текста декларативно
const LINKS_MAP: Record<string, { label: string; iconProvider?: IButtonProps['icon'] }> = {
    source: {
        label: 'Code',
        iconProvider: (className: string) => <ArcIcon className={className} />,
    },
    storybook: {
        label: 'Playground',
        iconProvider: (className: string) => <StorybookIcon className={className} />,
    },
    figma: {
        label: 'Design',
        iconProvider: (className: string) => <FigmaIcon className={className} />,
    },
};

const PageLinks = (props) => {
    const { links } = props;

    return (
        <Flex gap="12px">
            {links.map(({ label: id, url }) => {
                const { label = id, iconProvider } = LINKS_MAP[id] || {};

                return (
                    <Button
                        key={url}
                        type="link"
                        view="raised"
                        size="s"
                        url={url}
                        target="_blank"
                        iconLeft={iconProvider}
                    >
                        {label}
                    </Button>
                );
            })}
        </Flex>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    grid-area: hero;

    min-height: 190px;
    padding: 42px 56px;

    background-color: #f7f8fa;
`;

const Inner = styled.div`
    max-width: 640px;
`;
