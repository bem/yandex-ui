import { RadioButtonContent } from '../Content/RadioButton-Content';
import { RadioButtonControl } from '../Control/RadioButton-Control';
import { RadioButtonPlate } from '../Plate/RadioButton-Plate';
import { RadioButtonRadio } from '../Radio/RadioButton-Radio';

export interface IRadioButtonRegistry {
    Content: typeof RadioButtonContent;
    Control: typeof RadioButtonControl;
    Plate: typeof RadioButtonPlate;
    Radio: typeof RadioButtonRadio;
}
