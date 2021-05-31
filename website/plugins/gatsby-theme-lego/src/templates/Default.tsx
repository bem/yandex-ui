import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Location, PageContext } from '../gatsby-types';
import { PageHeader } from '../components/PageHeader';
import { PageTabs } from '../components/PageTabs';
import { useCurrentSlug } from '../hooks/useCurrentSlug';

export type DefaultProps = {
    location: Location;
    pageContext: PageContext;
};

const DefaultTemplate: FC<DefaultProps> = (props) => {
    const { children, location, pageContext } = props;
    const { frontmatter } = pageContext;
    const { title, description, links, tabs } = frontmatter;

    const { slug, currentTab } = useCurrentSlug(location);

    return (
        <Container>
            <PageHeader title={title} description={description} links={links} />
            <Content>
                {tabs && <PageTabs tabs={tabs} slug={slug} currentTab={currentTab} />}
                {children}
            </Content>
        </Container>
    );
};

const Container = styled.div`
    display: grid;

    grid-template-areas: 'hero hero' 'content nav';
    grid-template-columns: minmax(640px, 960px) 1fr;

    grid-template-rows: auto 1fr;
`;

const Content = styled.div`
    position: relative;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: max-content;

    max-width: 960px;
    padding: 32px 56px;

    & > * {
        grid-column: 1 / span 12;
    }
`;

export default DefaultTemplate;
