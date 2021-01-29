import { Modifier, ModifierArguments, detectOverflow } from '@popperjs/core';

export type ApplyMaxHeightOptions = {
    /**
     * Пользовательское значение максимальной высоты
     */
    maxHeight?: number;
    /**
     * Отступ относительно края экрана
     *
     * @default 16
     */
    padding?: number;
};

/**
 * Модификатор, устанавливающий оптимальную высоту попапа в пределах экрана.
 */
export const applyMaxHeight: Modifier<'applyMaxHeight', ApplyMaxHeightOptions> = {
    name: 'applyMaxHeight',
    enabled: true,
    fn: applyMaxHeightFn,
    phase: 'main',
    requires: ['computeStyles'],
};

function applyMaxHeightFn({ state, options }: ModifierArguments<ApplyMaxHeightOptions>) {
    const { maxHeight: userMaxHeight, padding = 16 } = options;
    const overflow = detectOverflow(state, { padding });
    const { y } = state.modifiersData.preventOverflow || { y: 0 };
    const { height } = state.rects.popper;
    const [basePlacement] = state.placement.split('-');

    const heightProp = basePlacement === 'top' ? 'top' : 'bottom';
    const maxHeight = height - overflow[heightProp] - y;
    const popupMaxHeight = userMaxHeight ? Math.min(maxHeight - y, userMaxHeight) : maxHeight;

    state.styles.popper = {
        ...state.styles.popper,
        maxHeight: `${popupMaxHeight}px`,
    };
}
