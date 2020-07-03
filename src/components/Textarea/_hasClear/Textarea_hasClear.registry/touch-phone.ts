import { TextareaClear } from '../../Clear/Textarea-Clear';
import { textareaRegistry as textareaRegistryBase } from '../../Textarea.registry/touch-phone';

export const textareaRegistry = textareaRegistryBase.set('Clear', TextareaClear);
