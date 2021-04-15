import { Text } from '@yandex-lego/components/Text/bundle';

import { fork } from '../../libs/fork';

export const Subheader = fork(Text, { as: 'p', typography: 'subheader-m', color: 'secondary' });
