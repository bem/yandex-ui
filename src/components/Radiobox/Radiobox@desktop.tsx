import { withRegistry } from '@bem-react/di';

import '../../polyfills/pointerfocus';

import { Radiobox as RadioboxCommon } from './Radiobox';
import { radioboxRegistry } from './Radiobox.registry/desktop';
import './Radiobox@desktop.css';

export * from './Radiobox';
export { RadioboxRadioProps as RadioProps, RadioboxRadio as Radio } from './Radio/Radiobox-Radio@desktop';
export const Radiobox = withRegistry(radioboxRegistry)(RadioboxCommon);
