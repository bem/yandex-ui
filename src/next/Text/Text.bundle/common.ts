import { compose } from '@bem-react/core';

import { withTypography } from '../_typography/Text_typography';
import { withColor } from '../_color/Text_color';
import { withWeight } from '../_weight/Text_weight';
import { withAlign } from '../_align/Text_align';
import { withOverflow } from '../_overflow/Text_overflow';
import { enhanceText, PropsOfText, TextElementType } from '../Text';

export { TextTypographyValue } from '../_typography/Text_typography';
export { TextColorValue } from '../_color/Text_color';
export { TextWeightValue } from '../_weight/Text_weight';
export { TextAlignValue } from '../_align/Text_align';
export { TextOverflowValue } from '../_overflow/Text_overflow';
export * from '../Text';

export const Text = enhanceText(compose(
    withTypography,
    withColor,
    withWeight,
    withAlign,
    withOverflow,
));

Text.defaultProps = {
    color: 'primary',
    weight: 'regular',
};

export type TextProps<T extends TextElementType = 'span'> = PropsOfText<typeof Text, T>;
