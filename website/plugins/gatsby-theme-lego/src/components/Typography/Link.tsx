import { Link as LegoLink } from '@yandex-lego/components/Link/desktop/bundle';

import { fork } from '../../libs/fork';

export const Link = fork(LegoLink, { theme: 'normal' });
