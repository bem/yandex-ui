import React, { createElement, forwardRef, useCallback, useMemo } from 'react';
import { Range } from 'react-range';

import { getTestId } from '../internal/utils/getTestId';
import { useRenderOverride, RenderOverride } from '../lib/render-override';
import { getDirection, getRangePosition, getTicks, normalizeValue } from './Slider.utils';
import { cnSlider, cnSliderContainer, cnSliderRange, cnSliderTrack } from './Slider.const';
import { SliderThumbProps, SliderThumb } from './Thumb/Slider-Thumb';
import { SliderTickLabelProps, SliderTickLabel } from './TickLabel/Slider-TickLabel';
import './Slider.css';

type RangeProps = React.ComponentProps<typeof Range>;
type RenderThumbParams = Parameters<RangeProps['renderThumb']>[0];
type RenderTrackParams = Parameters<RangeProps['renderTrack']>[0];

export type SliderProps = {
    /**
     * Выбранные значения на слайдере
     */
    value: number[];

    /**
     * Дополнительный класс у корневого DOM-элемента
     */
    className?: string;

    /**
     * Неактивное состояние слайдера
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * Минимальное число, которое можно выбрать на слайдере
     *
     * Может быть как положительным, так и отрицательным числом
     *
     * @default 0
     */
    min?: number;

    /**
     * Максимальное число, которое можно выбрать на слайдере
     *
     * Должен быть только положительным числом
     *
     * @default 100
     */
    max?: number;

    /**
     * Шаг, который делает бегунок за одно обновление
     *
     * Должен быть больше 0 и делиться на (max - min)
     *
     * @default 1
     */
    step?: number;

    /**
     * Отображает индикатор выбранного диапазона
     *
     * @default false
     */
    filled?: boolean;

    /**
     * Отображает слайдер в противоположном направлении
     *
     * @default false
     */
    reverse?: boolean;

    /**
     * Устанавливает слайдер в вертикальную ориентацию
     *
     * @default false
     */
    vertical?: boolean;

    /**
     * Обработчик, который вызывается при каждом обновлении бегунка
     */
    onInput: (event: any, value: number[]) => void;

    /**
     * Обработчик, который вызывается при окончательном выборе значения
     */
    onChange?: (event: any, value: number[]) => void;

    /**
     * Переопределяет компонент `SliderThumb`
     */
    renderThumb?: RenderOverride<SliderThumbProps>;

    /**
     * Переопределяет компонент `SliderTickLabel`
     *
     * @default $renderTickLabel
     */
    renderTickLabel?: RenderOverride<SliderTickLabelProps>;

    /**
     * Показывает метки на треке
     *
     * @default false
     */
    showTicks?: boolean;

    /**
     * Отображает значения на метках трека
     *
     * По умолчанию показывает только минимальное и максимальное значения
     *
     * @default false
     */
    showTickValues?: boolean;

    /**
     * Идентификатор, используемый в тестах
     *
     * @example
     *
     * {testId}-host
     */
    testId?: string;
};

const $renderTickLabel: RenderOverride<SliderTickLabelProps> = (props, Tick) =>
    props.isFirst || props.isLast ? createElement(Tick, props) : null;

/**
 * Компонент, позволяющий выбрать одно или два значения в пределах заданного диапазона.
 *
 * @param {SliderProps} props - Свойства компонента.
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
    const {
        className,
        disabled = false,
        filled = false,
        max = 100,
        min = 0,
        onChange,
        onInput,
        renderThumb,
        renderTickLabel = $renderTickLabel,
        reverse = false,
        showTicks = false,
        showTickValues = false,
        step = 1,
        testId,
        value,
        vertical = false,
    } = props;
    const Thumb = useRenderOverride(SliderThumb, renderThumb);
    const TickLabel = useRenderOverride(SliderTickLabel, renderTickLabel);

    // Кэшируем getTicks чтобы на каждое обновление не создавать массив.
    const ticks = useMemo(() => getTicks(min, max, step), [min, max, step]);

    const direction = getDirection(vertical, reverse);
    const values = normalizeValue(value, min, max);
    const rangePosition = getRangePosition(values, min, max, reverse);

    const $renderTrack = useCallback(
        ({ props, children }: RenderTrackParams) => (
            <div
                className={cnSlider({ disabled, vertical, reverse, withTickValues: showTickValues }, [className])}
                data-testid={getTestId('host', testId)}
                ref={ref}
            >
                <div
                    className={cnSliderContainer}
                    data-testid={getTestId('container', testId)}
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                >
                    <div className={cnSliderTrack} data-testid={getTestId('track', testId)} ref={props.ref}>
                        {filled && <div className={cnSliderRange} style={rangePosition} />}
                        {children}
                    </div>
                    {(showTicks || showTickValues) && (
                        <div className={cnSlider('Ticks')}>
                            {ticks.map((tickValue, idx) => (
                                <span key={idx} className={cnSlider('Tick', { visible: showTicks })}>
                                    {showTickValues && (
                                        <TickLabel index={idx} isFirst={idx === 0} isLast={idx === ticks.length - 1}>
                                            {tickValue}
                                        </TickLabel>
                                    )}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        ),
        // TODO ISL-10952: разобраться почему не все необходимые переменные указаны в deps и убрать игнор
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [disabled, reverse, vertical, showTickValues, className, ref, filled, rangePosition, showTicks, ticks, testId],
    );

    const $renderThumb = useCallback(
        ({ props: { style, draggable, ref, ...props }, isDragged, value }: RenderThumbParams) => (
            <Thumb {...props} innerRef={ref} disabled={disabled} pressed={isDragged} value={value} testId={testId} />
        ),
        // TODO ISL-10952: разобраться почему не все необходимые переменные указаны в deps и убрать игнор
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [disabled, testId],
    );

    return (
        <Range
            direction={direction}
            disabled={disabled}
            // Имитируем нативное API браузера:
            // 1. При непрерывном вводе вызываем onInput
            // 2. По завершению вызываем onChange
            onFinalChange={(value) => onChange && onChange({}, value)}
            onChange={(value) => onInput({}, value)}
            min={min}
            max={max}
            step={step}
            values={values}
            renderTrack={$renderTrack}
            renderThumb={$renderThumb}
        />
    );
});

Slider.displayName = 'Slider';
