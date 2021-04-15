import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';

export const H5 = fork(Text, { as: 'h5', weight: 'regular', typography: 'headline-xs' });
