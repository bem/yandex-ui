import React, { FC, MouseEventHandler } from 'react';
import { useComponentRegistry } from '@bem-react/di';
import { compose, composeU } from '@bem-react/core';

import { Icon as IconPresenter } from '../../Icon/Icon';
import { withTypeCross } from '../../Icon/_type/Icon_type_cross';
import { withTypeCrossWebsearch } from '../../Icon/_type/Icon_type_cross-websearch';
import { withGlyphXSign } from '../../Icon/_glyph/Icon_glyph_x-sign';

import { ITextinputRegistry } from '../Textinput.registry';
import { cnTextinput } from '../Textinput';
import './Textinput-Clear.css';

const Icon = compose(
    withGlyphXSign,
    composeU(withTypeCross, withTypeCrossWebsearch),
)(IconPresenter);

const getIconType = (theme?: string, view?: string): any => {
    if (view === 'default') {
        return { glyph: 'x-sign' };
    }

    if (theme === 'websearch') {
        return { type: 'cross-websearch' };
    }

    return { type: 'cross' };
};

export interface ITextinputClearProps {
    /**
     * Видимость крестика
     */
    visible?: boolean;

    /**
     * Размер крестика
     */
    size?: string;

    /**
     * Тема крестика
     */
    theme?: string;

    /**
     * Внешний вид крестика
     */
    view?: string;

    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Обработчик клика
     */
    onClick?: MouseEventHandler<HTMLSpanElement>;

    /**
     * Обработчик события `onMouseDown`
     */
    onMouseDown?: MouseEventHandler<HTMLSpanElement>;
}

export const TextinputClear: FC<ITextinputClearProps> = ({ visible, className, theme, view, ...props }) => {
    const { Icon: IconWrapper } = useComponentRegistry<ITextinputRegistry>(cnTextinput());
    return (
        <IconWrapper
            {...props}
            component={
                <Icon {...getIconType(theme, view)} className={cnTextinput('Clear', { visible }, [className])} />
            }
        />
    );
};
