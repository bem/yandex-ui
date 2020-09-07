import { TextinputClear } from '../../Clear/Textinput-Clear';
import { textinputRegistry as textinputRegistryBase } from '../../Textinput.registry/desktop';

export const textinputRegistry = textinputRegistryBase.set('Clear', TextinputClear);
