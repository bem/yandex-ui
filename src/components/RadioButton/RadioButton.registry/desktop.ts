import { Registry } from '@bem-react/di';

import { cnRadioButton } from '../RadioButton';
import { RadioButtonContent } from '../Content/RadioButton-Content';
import { RadioButtonControl } from '../Control/RadioButton-Control';
import { RadioButtonPlate } from '../Plate/RadioButton-Plate';
import { RadioButtonRadio } from '../Radio/RadioButton-Radio@desktop';

export const radioButtonRegistry = new Registry({ id: cnRadioButton() });

radioButtonRegistry
    .set('Content', RadioButtonContent)
    .set('Control', RadioButtonControl)
    .set('Plate', RadioButtonPlate)
    .set('Radio', RadioButtonRadio);
