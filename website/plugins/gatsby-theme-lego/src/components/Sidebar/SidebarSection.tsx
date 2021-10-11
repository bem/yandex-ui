import React, { FC } from 'react';
import styled from '@emotion/styled';

import { HybridLink } from './HybridLink';

type SidebarSectionProps = {
    label: string;
    activeId: string;
    items: any;
};

export const SidebarSection: FC<SidebarSectionProps> = (props) => {
    const { label, items, activeId } = props;

    const isActive = (id: string) => {
        return activeId === id;
    };

    return (
        <Container>
            <Headline>{label}</Headline>
            {items.map((item) => (
                <HybridLink key={item.label} active={isActive(item.id)} href={item.path} disabled={item.disabled}>
                    {item.label}
                    {item.badge && <Badge data-status={item.badge}>{badgeText[item.badge] || item.badge}</Badge>}
                </HybridLink>
            ))}
        </Container>
    );
};

const Container = styled.div`
    & + & {
        margin-top: 24px;
    }
`;

const Headline = styled.div`
    display: flex;
    align-items: center;

    height: 32px;

    font-family: var(--typography-font-family);
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    user-select: none;

    color: #000;
`;

const Badge = styled.span`
    padding: 2px 8px;

    font-size: 13px;
    line-height: 16px;

    border-radius: 4px;

    &[data-status='unstable'] {
        color: #f20008;
        background-color: #ffe2db;
    }

    &[data-status='develop'] {
        color: #ff8800;
        background-color: #fff4d0;
    }

    &[data-status='deprecated'] {
        color: #f20008;
        background-color: #ffe2db;
    }
`;

const badgeText: Record<string, string> = {
    develop: 'В разработке',
    unstable: 'Нестабильный',
    deprecated: 'Deprecated',
};
