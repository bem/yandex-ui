import React, { FC } from 'react';

import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: FC = () => <div className={styles.Footer}>© {CURRENT_YEAR}</div>;
