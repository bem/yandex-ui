import React, { FC } from 'react';

import styles from './Typography.module.css';

export const H1: FC = (props) => <h1 className={styles.h1} {...props} />;
export const H2: FC = (props) => <h2 className={styles.h2} {...props} />;
export const H3: FC = (props) => <h3 className={styles.h3} {...props} />;
export const H4: FC = (props) => <h4 className={styles.h4} {...props} />;
export const H5: FC = (props) => <h5 className={styles.h5} {...props} />;
export const Table: FC = (props) => <table className={styles.table} {...props} />;
export const Ol: FC = (props) => <ol className={styles.ol} {...props} />;
export const Ul: FC = (props) => <ul className={styles.ul} {...props} />;
export const Img: FC = (props) => <img className={styles.img} {...props} />;
export const P: FC = (props) => <p className={styles.p} {...props} />;
export const A: FC = (props) => <a className={styles.a} {...props} />;
export const Blockquote: FC = (props) => <blockquote className={styles.blockquote} {...props} />;
export const Code: FC = (props) => <code className={styles.code} {...props} />;
