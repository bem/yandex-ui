import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';

export const Strong = fork(Text, { as: 'strong', typography: 'body-long-m', weight: 'medium' });
