import React, { createElement, FC, useState } from 'react';

import { cnTheme } from '../../../../src/Theme';
import { theme } from '../../../../src/Theme/presets/default';
import { CodeHighlighter } from '../CodeHighlighter';
import { RollUpButton } from './RollUpButton/RollUpButton';
import styles from './Example.module.css';

export const Example: FC<{ component: any; source: string }> = ({ component, source }) => {
    const [visible, setVisible] = useState(false);
    const [check, setCheck] = useState(true);

    return (
        <div className={cnTheme(theme, [styles.Example])}>
            <div className={styles.Header}>
                <RollUpButton onClick={() => setVisible(!visible)} />
                <span className={[styles.Color, check ? styles.ColorCheck : {}].join(' ')} onClick={() => setCheck(!check)} />
            </div>
            <div className={[styles.Canvas, check ? styles.CanvasCheck : {}].join(' ')}>{createElement(component)}</div>
            { visible && <div><CodeHighlighter className="language-ts">{source}</CodeHighlighter></div>}
        </div>
    );
};
