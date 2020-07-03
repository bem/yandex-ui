import { Registry } from '@bem-react/di';

import { TextareaWrap } from '../Wrap/Textarea-Wrap';
import { TextareaControl } from '../Control/Textarea-Control';
import { TextareaBox } from '../Box/Textarea-Box';
import { TextareaHint } from '../Hint/Textarea-Hint';
import { cnTextarea } from '../Textarea';

export const textareaRegistry = new Registry({ id: cnTextarea() });

textareaRegistry
    .set('Wrap', TextareaWrap)
    .set('Control', TextareaControl)
    .set('Box', TextareaBox)
    .set('Hint', TextareaHint);
