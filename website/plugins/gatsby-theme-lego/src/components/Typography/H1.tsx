import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';

export const H1 = fork(Text, { as: 'h1', weight: 'regular', typography: 'headline-xl' });
