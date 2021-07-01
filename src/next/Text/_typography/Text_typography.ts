import { composeU, ExtractProps } from '@bem-react/core';

import { withTypographyDisplayXL } from './Text_typography_display-xl';
import { withTypographyDisplayL } from './Text_typography_display-l';
import { withTypographyDisplayM } from './Text_typography_display-m';
import { withTypographyDisplayS } from './Text_typography_display-s';
import { withTypographyHeadlineXL } from './Text_typography_headline-xl';
import { withTypographyHeadlineL } from './Text_typography_headline-l';
import { withTypographyHeadlineS } from './Text_typography_headline-s';
import { withTypographyHeadlineXS } from './Text_typography_headline-xs';
import { withTypographyHeadlineM } from './Text_typography_headline-m';
import { withTypographySubheaderXL } from './Text_typography_subheader-xl';
import { withTypographySubheaderL } from './Text_typography_subheader-l';
import { withTypographySubheaderM } from './Text_typography_subheader-m';
import { withTypographySubheaderS } from './Text_typography_subheader-s';
import { withTypographyBodyShortXL } from './Text_typography_body-short-xl';
import { withTypographyBodyShortL } from './Text_typography_body-short-l';
import { withTypographyBodyShortM } from './Text_typography_body-short-m';
import { withTypographyBodyShortS } from './Text_typography_body-short-s';
import { withTypographyBodyLongXL } from './Text_typography_body-long-xl';
import { withTypographyBodyLongL } from './Text_typography_body-long-l';
import { withTypographyBodyLongM } from './Text_typography_body-long-m';
import { withTypographyBodyLongS } from './Text_typography_body-long-s';
import { withTypographyCaptionXL } from './Text_typography_caption-xl';
import { withTypographyCaptionL } from './Text_typography_caption-l';
import { withTypographyCaptionM } from './Text_typography_caption-m';
import { withTypographyOverlineL } from './Text_typography_overline-l';
import { withTypographyOverlineM } from './Text_typography_overline-m';
import { withTypographyOverlineS } from './Text_typography_overline-s';
import { withTypographyControlXXS } from './Text_typography_control-xxs';
import { withTypographyControlXS } from './Text_typography_control-xs';
import { withTypographyControlS } from './Text_typography_control-s';
import { withTypographyControlL } from './Text_typography_control-l';
import { withTypographyControlXL } from './Text_typography_control-xl';
import { withTypographyControlM } from './Text_typography_control-m';
import { withTypographyControlXXL } from './Text_typography_control-xxl';

export const withTypography = composeU(
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
);

export type TextTypographyValue = Exclude<ExtractProps<ReturnType<typeof withTypography>>['typography'], undefined>;
