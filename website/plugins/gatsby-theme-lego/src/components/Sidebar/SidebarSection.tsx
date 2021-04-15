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
                    {item.badge && <Badge>{item.badge}</Badge>}
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

    color: rgba(0, 0, 0, 0.85);
`;

const Badge = styled.span`
    padding: 4px 6px;

    font-size: 12px;
    line-height: 12px;

    color: rgba(0, 0, 0, 0.85);
    border-radius: 2px;
    background-color: #ffdc60;
`;
