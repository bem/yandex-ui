import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';

export const H2 = fork(Text, { as: 'h2', weight: 'regular', typography: 'headline-l' });
