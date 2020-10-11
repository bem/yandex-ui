import React, { FC } from 'react';
/* eslint-disable-next-line */
import { Link } from 'gatsby';

import styles from './TabsMenu.module.css';

type TabsMenuProps = {
    activeTab: string;
    tabs: { label: string; url: string }[];
};

export const TabsMenu: FC<TabsMenuProps> = ({ tabs, activeTab }) => (
    <div className={styles.TabsMenu}>
        {tabs.map((tab, idx) => (
            <Link
                key={idx}
                to={tab.url}
                className={[styles.Link, activeTab === tab.label.toLowerCase() && styles.ActiveLink].join(' ')}
            >
                {tab.label}
            </Link>
        ))}
    </div>
);
