import React, { FC, ReactNode } from 'react';

import sidebar from '../../../sidebar';
import { Sidebar } from '../Sidebar';
import { Hero } from '../Hero';
import { TabsMenu } from '../TabsMenu';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import styles from './Layout.module.css';

type LayoutProps = {
    children: ReactNode;
    title: string;
    description?: string;
    links?: any[];
    headings: any[];
    tabs?: string[];
    currentTab: string;
    activeUrl: string;
};

export const Layout: FC<LayoutProps> = ({
    children, title, description, links, headings, tabs, currentTab, activeUrl
}) => {
    return (
        <div className={styles.Layout}>
            <Sidebar data={sidebar} activeUrl={activeUrl} />
            {/* // TODO: rename main */}
            <div className={styles.Main}>
                <Hero title={title} description={description} links={links} />
                <div className={styles.Content}>
                    {tabs && (
                        <TabsMenu
                            activeTab={currentTab}
                            tabs={tabs.map((tab) => ({ label: tab, url: `../${tab.toLowerCase()}` }))}
                        />
                    )}
                    {children}
                </div>
                {headings && (
                    <div className={styles.Sidebar}>
                        <Navigation headings={headings} />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};
