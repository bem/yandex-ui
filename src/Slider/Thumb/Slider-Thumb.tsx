import React, { FC, Ref, MouseEvent, KeyboardEventHandler, MouseEventHandler, KeyboardEvent, useCallback } from 'react';

import { getTestId } from '../../internal/utils/getTestId';
import { forkFn } from '../../lib/forkFn';
import { forceUtilityFocus } from '../../lib/pointerfocus';
import { isKeyCode } from '../../lib/keyboard';
import { cnSlider } from '../Slider.const';
import './Slider-Thumb.css';

export type SliderThumbProps = {
    /**
     * Максимально возможное значение бегунка
     */
    'aria-valuemax': number;

    /**
     * Минимально возможное значение бегунка
     */
    'aria-valuemin': number;

    /**
     * Текущее значение бегунка
     */
    'aria-valuenow': number;

    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;

    /**
     * Обработчик, который вызывается при нажатии на бегунок
     */
    onClick?: MouseEventHandler<MouseEventHandler>;

    /**
     * Обработчик, который вызывается при нажатии клавиши на клавиатуре
     */
    onKeyDown: KeyboardEventHandler<HTMLButtonElement>;

    /**
     * Обработчик, который вызывается при отжатии клавиши на клавиатуре
     */
    onKeyUp: KeyboardEventHandler<HTMLButtonElement>;

    /**
     * Нажатое состояние бегунка
     */
    pressed: boolean;

    /**
     * Неактивное состояние бегунка
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * Текущее значение бегунка
     */
    value: number;

    /**
     * Ссылка на корневой DOM элемент компонента
     */
    innerRef: Ref<HTMLButtonElement>;

    /**
     * Идентификатор, используемый в тестах
     *
     * @example
     *
     * {testId}-thumb
     */
    testId?: string;
};

const cnSliderHandle = cnSlider('Handle');

export const SliderThumb: FC<SliderThumbProps> = ({
    className,
    disabled = false,
    innerRef,
    onClick,
    onKeyDown,
    pressed,
    testId,
    value,
    ...props
}) => {
    const $onClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        forceUtilityFocus();
        (event.target as HTMLButtonElement).focus();
    }, []);

    const $onKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
        // TODO: Доработать комбинацию клавиш fn+arrow.
        if (isKeyCode(event.keyCode, ['PAGE_DOWN', 'PAGE_UP', 'LEFT', 'RIGHT', 'UP', 'DOWN'])) {
            forceUtilityFocus();
        }
    }, []);

    return (
        // HACK: Добавляем aria-valuenowдля Handle элемента, для того,
        // чтобы react-range мог найти элементы по этому свойству.
        <div className={cnSliderHandle} aria-valuenow={props['aria-valuenow']}>
            <button
                {...props}
                aria-disabled={disabled}
                className={cnSlider('Thumb', { pressed }, [className])}
                data-testid={getTestId('thumb', testId)}
                onClick={forkFn(onClick, $onClick)}
                onKeyDown={forkFn(onKeyDown, $onKeyDown)}
                ref={innerRef}
                role="slider"
                tabIndex={disabled ? -1 : 0}
                type="button"
            />
        </div>
    );
};
