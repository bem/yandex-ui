import React, { FC } from 'react';

import styles from './Hero.module.css';

type HeroProps = {
    title: string;
    description: string;
    links: Array<{ label: string; url: string }>;
};

export const Hero: FC<HeroProps> = ({ title, description, links }) => (
    <div className={styles.Hero}>
        <div className={styles.Inner}>
            <h1 className={styles.Title}>{title}</h1>
            {description && <p className={styles.Description}>{description}</p>}
            {links &&
                links.map(({ label, url }) => (
                    <a className={styles.Link} key={label} href={url} target="_blank">
                        {label}
                    </a>
                ))}
        </div>
    </div>
);
