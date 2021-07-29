import React from 'react';
import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';
import { withAnchor } from '../../hocs/withAnchor';

export const H2 = withAnchor(fork(Text, { as: 'h2', weight: 'regular', typography: 'headline-l' }));
