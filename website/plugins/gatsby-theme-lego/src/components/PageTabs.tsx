import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

type PageTabsProps = {
    tabs: string[];
    slug: string;
    currentTab: string;
};

export const PageTabs: FC<PageTabsProps> = (props) => {
    const { tabs, slug, currentTab } = props;

    const pageTabs = tabs.map((tab) => {
        const slugifiedTab = tab.toLowerCase();
        const href = slug.replace(currentTab, slugifiedTab);
        const isActive = currentTab === slugifiedTab;

        return (
            <StyledLink key={tab} to={href} as={Link} active={isActive ? 1 : 0}>
                {tab}
            </StyledLink>
        );
    });

    return <Container>{pageTabs}</Container>;
};

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    box-sizing: border-box;
    height: 34px;

    transform: translateY(-100%);
`;

const StyledLink = styled.a<any>`
    display: inline-flex;
    align-items: center;

    box-sizing: border-box;
    height: 34px;
    margin-right: 28px;

    font-family: var(--typography-font-family);
    font-size: 14px;
    line-height: 1.4;
    text-decoration: none;
    text-transform: capitalize;

    color: rgba(0, 0, 0, 0.6);
    border-bottom: 2px solid transparent;
    outline: none;

    ${(props) =>
        props.active &&
        css`
            color: #000;
            border-color: #f00;
        `}
`;
