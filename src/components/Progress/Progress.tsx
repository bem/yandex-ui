import React, { FC, RefObject, CSSProperties } from 'react';
import { cn } from '@bem-react/classname';

import './Progress.css';

export interface IProgressProps {
    /**
     * Максимальное допустимое значение прогресс бара
     * @default 1
     */
    maxValue?: number;
    /**
     * Доля загрузки прогресс бара от 0 до maxValue
     * @default 0
     */
    value?: number;

    /**
     * Способ CSS-анимации при изменении ширины полосы загрузки
     */
    timing?: 'linear';

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLDivElement>;

    /**
     * Пользовательские стили
     */
    style?: CSSProperties;

    /**
     * Дополнительный класс
     */
    className?: string;
}

export const cnProgress = cn('Progress');

/**
 * Компонент для создания полосы прогресса.
 * @param {IProgressProps} props
 */
export const Progress: FC<IProgressProps> = ({
    value = 0,
    maxValue = 1,
    timing,
    innerRef,
    style,
    className,
    ...props
}) => {
    const width = value <= 0 ? 0 : `${value >= maxValue ? 100 : ((100 / maxValue) * value).toFixed(2)}%`;

    return (
        <div {...props} ref={innerRef} className={cnProgress({ timing }, [className])} style={{ ...style }}>
            <div className={cnProgress('Inner')} style={{ width }} />
        </div>
    );
};

Progress.displayName = cnProgress();
