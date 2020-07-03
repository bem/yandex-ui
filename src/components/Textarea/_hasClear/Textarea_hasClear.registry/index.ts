import { TextareaClear } from '../../Clear/Textarea-Clear';
import { ITextareaRegistry as ITextareaRegistryCommon } from '../../Textarea.registry';

export interface ITextareaRegistry extends ITextareaRegistryCommon {
    Clear: typeof TextareaClear;
}
