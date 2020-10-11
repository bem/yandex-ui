import React, { FC } from 'react';
/* eslint-disable-next-line */
import { Link } from 'gatsby';

import styles from './Navigation.module.css';
// import { useActiveHash } from './useActiveHash';

type NavigationProps = {
    activeTab?: string;
    headings: { value: string; url: string }[];
};

export const Navigation: FC<NavigationProps> = ({ headings }) => {
    // TODO: тут есть проблема, когда в одной области 2 элемента, то происходит бесконечный апдейт.
    // const ids = headings.map((item) => item.id);
    // const activeHash = 'useActiveHash(ids)';

    if (headings.length === 0) {
        return null;
    }

    return (
        <div className={styles.Navigation}>
            <div className={styles.Headline}>Contents</div>
            {headings.map((item, idx) => {
                return (
                    <Link
                        key={idx}
                        to={`#${item.value.toLowerCase().replace(/\s/g, '-')}`}
                        className={styles.Link}
                    >
                        {item.value}
                    </Link>
                );
            })}
        </div>
    );
};
