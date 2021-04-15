import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';

export const H4 = fork(Text, { as: 'h4', weight: 'regular', typography: 'headline-s' });
