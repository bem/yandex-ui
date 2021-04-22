import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { PageHeader } from '../components/PageHeader';
import { PageTabs } from '../components/PageTabs';
import { Footer } from '../components/Footer';
import { FeedbackForm } from '../components/FeedbackForm';
import { applyStyledScroll } from '../libs/styled/scroll';

type PageContext = {
    sidebar: any;
    frontmatter: any;
};

type Location = {
    pathname: string;
};

type DefaultProps = {
    location: Location;
    pageContext: PageContext;
};

function useCurrentSlug(location: Location) {
    const {
        site: { pathPrefix },
    } = useStaticQuery(graphql`
        query PATH_PREFIX_QUERY {
            site {
                pathPrefix
            }
        }
    `);

    const slug = pathPrefix ? location.pathname.replace(pathPrefix, '') : location.pathname;

    const currentTab = slug
        .split('/')
        .filter(Boolean)
        .slice(-1)[0];

    return { slug, currentTab };
}

const DefaultTemplate: FC<DefaultProps> = (props) => {
    const { children, location, pageContext } = props;
    const { sidebar, frontmatter } = pageContext;
    const { title, description, links, tabs } = frontmatter;

    const { slug, currentTab } = useCurrentSlug(location);

    return (
        <>
            <Helmet>
                <title>{title} — @yandex-lego/components</title>
            </Helmet>
            <Container>
                <Header />
                <Sidebar items={sidebar} activeId={frontmatter.id} />
                <Main>
                    <PageHeader title={title} description={description} links={links} />
                    <Content>
                        {tabs && <PageTabs tabs={tabs} slug={slug} currentTab={currentTab} />}
                        {children}
                    </Content>
                    <FeedbackForm slug={slug} />
                    <Footer />
                </Main>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;

    display: grid;
    overflow: hidden;
    grid-template-areas: 'header header' 'sidebar main';
    grid-template-columns: 272px 1fr;
    grid-template-rows: auto 1fr auto;

    height: 100vh;
`;

const Main = styled.div`
    ${applyStyledScroll({})}

    position: relative;

    display: grid;
    overflow-y: scroll;
    grid-area: main;
    grid-template-areas: 'hero hero' 'content nav' 'feedback feedback' 'footer footer';
    grid-template-columns: minmax(640px, 960px) 1fr;

    grid-template-rows: auto 1fr;
`;

const Content = styled.div`
    position: relative;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: max-content;

    max-width: 960px;
    padding: 32px 80px;

    & > * {
        grid-column: 1 / span 12;
    }
`;

export default DefaultTemplate;
