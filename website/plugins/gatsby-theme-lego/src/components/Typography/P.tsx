import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';

export const P = fork(Text, { as: 'p', typography: 'body-long-xl' });
