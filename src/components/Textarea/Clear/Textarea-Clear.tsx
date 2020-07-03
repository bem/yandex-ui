import React, { FC, MouseEventHandler } from 'react';
import { compose } from '@bem-react/core';

import { Icon as IconBase } from '../../Icon/Icon';
import { withTypeCross } from '../../Icon/_type/Icon_type_cross';
import { withGlyphXSign } from '../../Icon/_glyph/Icon_glyph_x-sign';
import { cnTextarea } from '../Textarea';
import './Textarea-Clear.css';

const Icon = compose(
    withGlyphXSign,
    withTypeCross,
)(IconBase);

const getIconType = (view?: string): any => {
    if (view === 'default') {
        return { glyph: 'x-sign' };
    }

    return { type: 'cross' };
};

export interface ITextareaClearProps {
    /**
     * Видимость крестика.
     */
    visible?: boolean;

    /**
     * Тема крестика.
     */
    theme?: string;

    /**
     * Внешний вид крестика.
     */
    view?: string;

    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Обработчик клика.
     */
    onClick?: MouseEventHandler<HTMLSpanElement>;

    /**
     * Обработчик события `onMouseDown`
     */
    onMouseDown?: MouseEventHandler<HTMLSpanElement>;
}

export const TextareaClear: FC<ITextareaClearProps> = ({ view, visible, ...props }) => {
    const className = cnTextarea('Clear', { visible }, [props.className]);

    return <Icon {...props} {...getIconType(view)} className={className} />;
};
