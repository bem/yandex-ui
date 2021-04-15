import React, { FC } from 'react';
import styled from '@emotion/styled';

import { SidebarSection } from './SidebarSection';
import { applyStyledScroll } from '../../libs/styled/scroll';

type SidebarProps = {
    items: any;
    activeId: string;
};

export const Sidebar: FC<SidebarProps> = (props) => {
    const { items, activeId } = props;

    return (
        <Container>
            {items.map((item) => (
                <SidebarSection key={item.label} label={item.label} items={item.items} activeId={activeId} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    ${applyStyledScroll({ width: '6px' })}

    overflow-y: scroll;
    grid-area: sidebar;

    box-sizing: border-box;
    padding: 12px 24px;

    border-right: 1px solid rgba(0, 0, 0, 0.1);
`;
