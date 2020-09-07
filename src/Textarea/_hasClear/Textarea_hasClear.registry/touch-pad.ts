import { TextareaClear } from '../../Clear/Textarea-Clear';
import { textareaRegistry as textareaRegistryBase } from '../../Textarea.registry/touch-pad';

export const textareaRegistry = textareaRegistryBase.set('Clear', TextareaClear);
