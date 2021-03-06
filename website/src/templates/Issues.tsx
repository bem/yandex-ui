import React from 'react';

import Default from '../../plugins/gatsby-theme-lego/src/templates/Default';
import { Issues } from '../components/Issues';

const IssuesTemplate = (props) => {
    const { pageContext } = props;
    const { frontmatter } = pageContext;
    const { id } = frontmatter;

    return (
        <Default {...props}>
            <Issues queue="ISL" status="inScope, inProgress, inReview" components="lego-components" tags={id} />
        </Default>
    );
};

export default IssuesTemplate;
