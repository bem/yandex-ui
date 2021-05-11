import React from 'react';

import Default from '../../plugins/gatsby-theme-lego/src/templates/Default';
import { Issues } from '../components/Issues';

const FaqTemplate = (props) => {
    const { pageContext } = props;
    const { frontmatter } = pageContext;
    const { id } = frontmatter;

    return (
        <Default {...props}>
            <Issues queue="LEGOSUPPORT" tags={id} />
        </Default>
    );
};

export default FaqTemplate;
