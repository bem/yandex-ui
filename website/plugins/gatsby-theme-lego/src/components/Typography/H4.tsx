import React from 'react';
import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';
import { withAnchor } from '../../hocs/withAnchor';

export const H4 = withAnchor(fork(Text, { as: 'h4', weight: 'regular', typography: 'headline-s' }));
