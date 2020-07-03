import { Registry } from '@bem-react/di';

import { cnTextinput } from '../Textinput';
import { TextinputControl } from '../Control/Textinput-Control';
import { TextinputBox } from '../Box/Textinput-Box';
import { TextinputIcon } from '../Icon/Textinput-Icon';
import { TextinputHint } from '../Hint/Textinput-Hint';

export const textinputRegistry = new Registry({ id: cnTextinput() });

textinputRegistry
    .set('Control', TextinputControl)
    .set('Box', TextinputBox)
    .set('Icon', TextinputIcon)
    .set('Hint', TextinputHint);
