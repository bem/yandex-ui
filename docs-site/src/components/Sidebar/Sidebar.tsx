import React, { FC } from 'react';
/* eslint-disable-next-line */
import { Link } from 'gatsby';

import styles from './Sidebar.module.css';

export const Sidebar: FC<{ data: any, activeUrl?: string }> = ({ data, activeUrl }) => {
    return (
        <div className={styles.Sidebar}>
            {data.map((item) => (
                <div key={`sidebar-${item.title}`} className={styles.Item}>
                    {item.pages ? (
                        <div>
                            <div className={styles.Headline}>{item.title}</div>
                            {
                                item.pages.map((p) => {
                                    return (
                                        <Link
                                            key={`page-${p.title}`}
                                            className={[styles.Link, p.path.includes(activeUrl) && styles.ActiveLink].join(' ')}
                                            to={p.path}
                                        >
                                            <div>{p.title}</div>
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    ) : ('')}
                </div>
            ))}
        </div>
    );
};
