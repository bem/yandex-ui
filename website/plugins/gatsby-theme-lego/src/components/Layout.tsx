import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import { PageContext, Location } from '../gatsby-types';
import { useCurrentSlug } from '../hooks/useCurrentSlug';
import { applyStyledScroll } from '../libs/styled/scroll';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { FeedbackForm } from './FeedbackForm';
import { Footer } from './Footer';

export interface LayoutProps {
    location: Location;
    pageContext: PageContext;
}

const defaultTitle = '@yandex-lego/components';
const titleTemplate = `%s – ${defaultTitle}`;

export const Layout: FC<LayoutProps> = (props) => {
    const { children, location, pageContext } = props;
    const { sidebar, frontmatter = {}, section } = pageContext;
    const { title, id } = frontmatter;

    const { slug } = useCurrentSlug(location);

    return (
        <>
            <Helmet titleTemplate={titleTemplate} defaultTitle={defaultTitle}>
                {title && <title>{title}</title>}
            </Helmet>

            <Container data-sidebar={Boolean(sidebar)}>
                <Header currentSection={section} />
                {sidebar && <Sidebar items={sidebar} activeId={id} />}
                <Main key={location.pathname}>
                    {children}
                    {id && <FeedbackForm slug={slug} />}
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
    grid-template-areas: 'header header' 'main main';
    grid-template-columns: 272px 1fr;
    grid-template-rows: max-content 1fr;

    height: 100vh;

    &[data-sidebar='true'] {
        grid-template-areas: 'header header' 'sidebar main';
    }
`;

const Main = styled.div`
    ${applyStyledScroll({})}

    position: relative;
    display: grid;

    grid-template-areas: '.' 'feedback' 'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;

    grid-area: main;

    overflow-y: scroll;
`;
