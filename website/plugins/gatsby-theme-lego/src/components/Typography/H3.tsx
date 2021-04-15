import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';

export const H3 = fork(Text, { as: 'h3', weight: 'regular', typography: 'headline-m' });
