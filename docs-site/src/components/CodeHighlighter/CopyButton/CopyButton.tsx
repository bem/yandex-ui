import React, { FC, MouseEventHandler, MouseEvent, useCallback, useState } from 'react';

import styles from './CopyButton.module.css';

type CopyButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const TEXT_REVERSE_DURATION = 2000;

export const CopyButton: FC<CopyButtonProps> = ({ onClick }) => {
    const [copyText, setCopyText] = useState('Copy');
    const onInternalClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setCopyText('Copied');
        onClick(event);
        setTimeout(() => {
            setCopyText('Copy');
        }, TEXT_REVERSE_DURATION);
    }, []);

    return (
        <button className={styles.CopyButton} tabIndex={-1} onClick={onInternalClick}>
            <span className={styles.Text}>{copyText}</span>
            <svg className={styles.Svg} width="16" height="16">
                <g fill="#111" fillRule="nonzero">
                    <path d="M2.001 7.332c0-.657.003-.856.022-1.092.022-.274.066-.462.159-.67.161-.308.412-.559.73-.725.171-.086.369-.13.65-.154.242-.022.442-.026 1.106-.026h4c.657 0 .856.003 1.103.023.291.029.484.073.656.162.31.16.56.41.728.73.086.172.13.368.154.659.02.246.026.518.026 1.093v4c0 .66-.003.86-.024 1.108-.028.29-.073.484-.16.654-.16.312-.416.565-.732.725-.173.087-.37.134-.66.159-.236.018-.435.02-1.091.02h-4c-.66 0-.86-.002-1.097-.022a1.892 1.892 0 0 1-.667-.157 1.723 1.723 0 0 1-.744-.767 1.924 1.924 0 0 1-.136-.623c-.02-.237-.023-.436-.023-1.097v-4zm1.382-1.183a.713.713 0 0 0-.03.198c-.016.185-.018.372-.018.985v4c0 .617.002.804.017.989.011.13.022.178.013.16.034.066.088.12.116.136.019.009.067.02.198.03.185.016.373.018.989.018h4c.614 0 .801-.002.983-.016.13-.011.168-.02.17-.02a.331.331 0 0 0 .144-.145c-.005.01.006-.038.019-.163.015-.185.017-.373.017-.989v-4c0-.538-.004-.788-.02-.983-.012-.134-.02-.176-.013-.161a.36.36 0 0 0-.152-.153c.008.004-.035-.006-.163-.019C9.468 6.001 9.281 6 8.668 6h-4c-.613 0-.8.003-.986.02-.133.012-.18.022-.163.013a.377.377 0 0 0-.136.117z" />
                    <path d="M6.668 3.332H5.332a.664.664 0 0 1-.664-.664c0-.371.297-.668.664-.668h4.402c1.493 0 2.239 0 2.809.29.504.257.91.663 1.168 1.167.289.57.289 1.316.289 2.809v4.402a.664.664 0 0 1-.668.664.664.664 0 0 1-.664-.664V6c0-.934 0-1.398-.184-1.758a1.674 1.674 0 0 0-.726-.726c-.36-.184-.824-.184-1.758-.184H6.668z" />
                </g>
            </svg>
        </button>
    );
};
