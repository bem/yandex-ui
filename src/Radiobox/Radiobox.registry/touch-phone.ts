import { Registry } from '@bem-react/di';

import { cnRadiobox } from '../Radiobox';
import { RadioboxRadio } from '../Radio/Radiobox-Radio';

export const radioboxRegistry = new Registry({ id: cnRadiobox() });

radioboxRegistry.set('Radio', RadioboxRadio);
