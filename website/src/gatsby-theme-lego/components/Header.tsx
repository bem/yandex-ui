import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';
import { Flex, Spacer } from '../../../plugins/gatsby-theme-lego/src/components/Flex';
import { Logo } from '../../components/Logo';
import { HeaderNav, HeaderNavItem } from './HeaderNav';
import { Search } from './Search';

interface HeaderProps {
    currentSection: string;
}

export const Header: FC<HeaderProps> = (props) => {
    const { currentSection } = props;

    const isActive = (section: string) => {
        return section === currentSection;
    };

    return (
        <Flex as={Container} alignItems="center">
            <LogoWrapper>
                <Link href="https://lego.yandex-team.ru/">
                    <Logo />
                </Link>
            </LogoWrapper>

            <HeaderNav>
                <HeaderNavItem active={isActive('components')} href="/guidelines/start">
                    Компоненты
                </HeaderNavItem>
                <HeaderNavItem active={isActive('documentation')} href="/docs/developing/design-tokens">
                    Документация
                </HeaderNavItem>
                <HeaderNavItem href="https://clubs.at.yandex-team.ru/lego/?tag=51607">Блог</HeaderNavItem>
                <HeaderNavItem href={getRoadmapLink()}>Roadmap</HeaderNavItem>
            </HeaderNav>

            <Spacer />

            <Search />
        </Flex>
    );
};

const Container = styled.div`
    grid-area: header;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0 24px;
`;

const LogoWrapper = styled.div`
    width: 248px;
`;

function getRoadmapLink() {
    const now = new Date();
    const startMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const encodedDate = encodeURIComponent(startMonth.toString());

    return `https://st.yandex-team.ru/filters/gantt/order:/all/year/components/${encodedDate}/filter:403448`;
}
