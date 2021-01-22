import React, { FC } from 'react';

import { cn } from '@bem-react/classname';
import { cnHeaderInlineIcon } from '../Header.const';

import { Button, IButtonProps } from '../../Button';

import './Inline-Icons.css';

/**
 * Есть потребность в том, чтобы управлять цветом иконок.
 * Используем в css fill, для этого вставляем svg явно, а не через background-image.
 * При отказе от ie11 сможем перейти на https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image
 */

/**
 * Кнопка-иконка для Clear в Textinput_view_websearch.
 * @param {IButtonProps} props
 *
 */
const cnCrossIcon = cn('CrossIcon')();
export const CrossIcon: FC<IButtonProps> = (props) => (
    <Button {...props} className={cnCrossIcon} icon={() => (<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.727 4.593a.933.933 0 10-1.32-1.32L10 8.68 4.593 3.273a.933.933 0 10-1.32 1.32L8.68 10l-5.407 5.407a.933.933 0 101.32 1.32L10 11.32l5.407 5.407a.933.933 0 101.32-1.32L11.32 10l5.407-5.407z" fill-opacity=".8" /></svg>)} />
);

/**
 * Кнопка-иконка для Button_type_submit для использования в одной в комбинации с Textinput_view_search.
 * @param {IButtonProps} props
 *
 */
const cnSearchIcon = cn('SearchIcon')();
export const SearchIcon: FC<IButtonProps> = (props) => (
    <Button {...props} className={[cnHeaderInlineIcon, cnSearchIcon].join(' ')} icon={() => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0107 11.5379C13.7382 10.5162 14.166 9.26643 14.166 7.91669C14.166 4.46491 11.3678 1.66669 7.91602 1.66669C4.46424 1.66669 1.66602 4.46491 1.66602 7.91669C1.66602 11.3685 4.46424 14.1667 7.91602 14.1667C9.26613 14.1667 10.5163 13.7386 11.5381 13.0107C11.5437 13.0166 11.5494 13.0225 11.5552 13.0282L15.61 17.0833C16.0168 17.4901 16.6763 17.4901 17.0831 17.0833C17.4899 16.6765 17.4899 16.017 17.0831 15.6102L13.0283 11.5551C13.0225 11.5493 13.0166 11.5435 13.0107 11.5379ZM7.91626 12.2135C10.2894 12.2135 12.2131 10.2898 12.2131 7.91667C12.2131 5.54357 10.2894 3.6198 7.91626 3.6198C5.54316 3.6198 3.61938 5.54357 3.61938 7.91667C3.61938 10.2898 5.54316 12.2135 7.91626 12.2135Z" fill-opacity="0.8" /></svg>)} />
);
