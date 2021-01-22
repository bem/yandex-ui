import React, { FC, FormHTMLAttributes } from 'react';
import { cnHeader } from '../Header.const';

import './Header-Search.css';

export type HeaderSearchProps = FormHTMLAttributes<HTMLFormElement> & {
     /**
     * Дополнительный className для поиска.
     */
    className?: string;
}

/**
 * Поисковая форма для шапки.
 * @param {HeaderSearchProps} props
 *
 */
export const HeaderSearch:FC<HeaderSearchProps> = ({ children, className, ...rest }) => {
    return (
        <form {...rest} className={cnHeader('Search', [cnHeader('Item'), className])}>
            {children}
        </form>
    );
};
