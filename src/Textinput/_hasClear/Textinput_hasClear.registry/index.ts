import { ITextinputRegistry as ITextinputRegistryCommon } from '../../Textinput.registry';
import { TextinputClear } from '../../Clear/Textinput-Clear';

export interface ITextinputRegistry extends ITextinputRegistryCommon {
    Clear: typeof TextinputClear;
}
