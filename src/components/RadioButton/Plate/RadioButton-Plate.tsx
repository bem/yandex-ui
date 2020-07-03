import React, { RefObject, TransitionEventHandler, FC } from 'react';

import { cnRadioButton } from '../RadioButton';
import './RadioButton-Plate.css';

export interface IRadioButtonPlateProps {
    /**
     * Дополнительный класс.
     */
    className?: string;

    /**
     * Ссылка на DOM-элемент компонента.
     */
    innerRef?: RefObject<HTMLDivElement>;

    /**
     * Обработчик завершения перехода.
     */
    onTransitionEnd?: TransitionEventHandler<HTMLDivElement>;
}

export const RadioButtonPlate: FC<IRadioButtonPlateProps> = ({
    className,
    innerRef,
    ...props
}) => (
    <div
        {...props}
        hidden
        className={cnRadioButton('Plate', null, [className])}
        ref={innerRef}
    />
);
