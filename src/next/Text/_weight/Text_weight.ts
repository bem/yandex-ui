import { composeU, ExtractProps } from '@bem-react/core';

import { withWeightLight } from './Text_weight_light';
import { withWeightRegular } from './Text_weight_regular';
import { withWeightMedium } from './Text_weight_medium';
import { withWeightBold } from './Text_weight_bold';

export const withWeight = composeU(withWeightLight, withWeightRegular, withWeightMedium, withWeightBold);

export type TextWeightValue = Exclude<ExtractProps<ReturnType<typeof withWeight>>['weight'], undefined>;
