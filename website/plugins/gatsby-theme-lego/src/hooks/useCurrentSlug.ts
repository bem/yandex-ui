import { graphql, useStaticQuery } from 'gatsby';

import { Location } from '../gatsby-types';

export function useCurrentSlug(location: Location) {
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

    const currentTab = slug.split('/').filter(Boolean).slice(-1)[0];

    return { slug, currentTab };
}
