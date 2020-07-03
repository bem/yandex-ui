import { TextinputControl } from '../Control/Textinput-Control';
import { TextinputBox } from '../Box/Textinput-Box';
import { TextinputIcon } from '../Icon/Textinput-Icon';
import { TextinputHint } from '../Hint/Textinput-Hint';

export interface ITextinputRegistry {
    Control: typeof TextinputControl;
    Box: typeof TextinputBox;
    Icon: typeof TextinputIcon;
    Hint: typeof TextinputHint;
}
