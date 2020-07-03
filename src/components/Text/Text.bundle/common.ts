import { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

// _weight
import { withWeightLight } from '../_weight/Text_weight_light';
import { withWeightRegular } from '../_weight/Text_weight_regular';
import { withWeightMedium } from '../_weight/Text_weight_medium';
import { withWeightBold } from '../_weight/Text_weight_bold';

// _typography
import { Text as TextCommon, TextProps as TextCommonProps, TextTypographyValue } from '../Text';
import { withTypographyDisplayXL } from '../_typography/Text_typography_display-xl';
import { withTypographyDisplayL } from '../_typography/Text_typography_display-l';
import { withTypographyDisplayM } from '../_typography/Text_typography_display-m';
import { withTypographyDisplayS } from '../_typography/Text_typography_display-s';
import { withTypographyHeadlineXL } from '../_typography/Text_typography_headline-xl';
import { withTypographyHeadlineL } from '../_typography/Text_typography_headline-l';
import { withTypographyHeadlineS } from '../_typography/Text_typography_headline-s';
import { withTypographyHeadlineXS } from '../_typography/Text_typography_headline-xs';
import { withTypographyHeadlineM } from '../_typography/Text_typography_headline-m';
import { withTypographySubheaderXL } from '../_typography/Text_typography_subheader-xl';
import { withTypographySubheaderL } from '../_typography/Text_typography_subheader-l';
import { withTypographySubheaderM } from '../_typography/Text_typography_subheader-m';
import { withTypographySubheaderS } from '../_typography/Text_typography_subheader-s';
import { withTypographyBodyShortXL } from '../_typography/Text_typography_body-short-xl';
import { withTypographyBodyShortL } from '../_typography/Text_typography_body-short-l';
import { withTypographyBodyShortM } from '../_typography/Text_typography_body-short-m';
import { withTypographyBodyShortS } from '../_typography/Text_typography_body-short-s';
import { withTypographyBodyLongXL } from '../_typography/Text_typography_body-long-xl';
import { withTypographyBodyLongL } from '../_typography/Text_typography_body-long-l';
import { withTypographyBodyLongM } from '../_typography/Text_typography_body-long-m';
import { withTypographyBodyLongS } from '../_typography/Text_typography_body-long-s';
import { withTypographyCaptionXL } from '../_typography/Text_typography_caption-xl';
import { withTypographyCaptionL } from '../_typography/Text_typography_caption-l';
import { withTypographyCaptionM } from '../_typography/Text_typography_caption-m';
import { withTypographyOverlineL } from '../_typography/Text_typography_overline-l';
import { withTypographyOverlineM } from '../_typography/Text_typography_overline-m';
import { withTypographyOverlineS } from '../_typography/Text_typography_overline-s';
import { withTypographyControlXXS } from '../_typography/Text_typography_control-xxs';
import { withTypographyControlXS } from '../_typography/Text_typography_control-xs';
import { withTypographyControlS } from '../_typography/Text_typography_control-s';
import { withTypographyControlL } from '../_typography/Text_typography_control-l';
import { withTypographyControlXL } from '../_typography/Text_typography_control-xl';
import { withTypographyControlM } from '../_typography/Text_typography_control-m';
import { withTypographyControlXXL } from '../_typography/Text_typography_control-xxl';

export * from '../Text';

export type TextWeightValue = 'light' | 'regular' | 'medium' | 'bold';

export interface TextProps extends TextCommonProps {
    typography: TextTypographyValue;
    weight?: TextWeightValue;
}

export const Text = compose(
    composeU(
        composeU(
            withTypographyDisplayXL, withTypographyDisplayL, withTypographyDisplayM, withTypographyDisplayS,
            withTypographyHeadlineXL, withTypographyHeadlineL, withTypographyHeadlineM, withTypographyHeadlineS,
        ),
        composeU(
            withTypographyHeadlineXS,
            withTypographySubheaderXL, withTypographySubheaderL, withTypographySubheaderM, withTypographySubheaderS,
            withTypographyBodyShortXL, withTypographyBodyShortL, withTypographyBodyShortM,
        ),
        composeU(
            withTypographyBodyShortS,
            withTypographyBodyLongXL, withTypographyBodyLongL, withTypographyBodyLongM, withTypographyBodyLongS,
            withTypographyCaptionXL, withTypographyCaptionL, withTypographyCaptionM,
        ),
        composeU(
            withTypographyOverlineL, withTypographyOverlineM, withTypographyOverlineS,
            withTypographyControlXXS, withTypographyControlXS, withTypographyControlS, withTypographyControlM,
            withTypographyControlL,
        ),
        composeU(
            withTypographyControlXL, withTypographyControlXXL,
        ),
    ),
    composeU(withWeightLight, withWeightRegular, withWeightMedium, withWeightBold),
)(TextCommon) as FC<TextProps>;
