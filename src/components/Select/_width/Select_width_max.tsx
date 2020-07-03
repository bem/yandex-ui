import { withBemMod } from '@bem-react/core';

import { cnSelect } from '../Select';
import './Select_width_max.css';

export interface ISelectWidthMaxProps {
    /**
     * Максимальная ширина раскрывающегося списка.
     *
     * Растягивается по ширине контейнера. Если в пункте раскрывающегося списка
     * ширина текста будет больше ширины контейнера, текст обрежется троеточием.
     */
    width?: 'max';
}

/**
 * Модификатор, отвечающий за максимальную ширину селекта.
 * @param {ISelectWidthMaxProps} props
 */
export const withWidthMax = withBemMod<ISelectWidthMaxProps>(cnSelect(), { width: 'max' });
