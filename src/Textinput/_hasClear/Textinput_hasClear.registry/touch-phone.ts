import { TextinputClear } from '../../Clear/Textinput-Clear';
import { textinputRegistry as textinputRegistryBase } from '../../Textinput.registry/touch-phone';

export const textinputRegistry = textinputRegistryBase.set('Clear', TextinputClear);
