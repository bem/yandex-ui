import { TextareaWrap } from '../Wrap/Textarea-Wrap';
import { TextareaControl } from '../Control/Textarea-Control';
import { TextareaBox } from '../Box/Textarea-Box';
import { TextareaHint } from '../Hint/Textarea-Hint';

export interface ITextareaRegistry {
    Wrap: typeof TextareaWrap;
    Control: typeof TextareaControl;
    Box: typeof TextareaBox;
    Hint: typeof TextareaHint;
}
