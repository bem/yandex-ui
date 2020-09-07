import { withRegistry } from '@bem-react/di';

import { Radiobox as RadioboxCommon } from './Radiobox';
import { radioboxRegistry } from './Radiobox.registry/touch-phone';

export * from './Radiobox';
export { RadioboxRadioProps as RadioProps, RadioboxRadio as Radio } from './Radio/Radiobox-Radio';
export const Radiobox = withRegistry(radioboxRegistry)(RadioboxCommon);
