import React, { FC } from 'react';
/* eslint-disable-next-line */
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout } from '../components/Layout';

type DefaultTemplateProps = {
    location: {
        pathname: string;
    };
    pageContext: {
        frontmatter: any;
        body: string;
        headings: any[];
    };
};

const DefaultTemplate: FC<DefaultTemplateProps> = ({ pageContext, location }) => {
    const { frontmatter = {}, body, headings } = pageContext;
    const currentTab = location.pathname.split('/').filter(Boolean).slice(-1)[0];

    return (
        <>
            <Layout {...frontmatter} headings={headings} currentTab={currentTab} activeUrl={location.pathname}>
                <MDXRenderer>{body}</MDXRenderer>
            </Layout>
        </>
    );
};

export default DefaultTemplate;
