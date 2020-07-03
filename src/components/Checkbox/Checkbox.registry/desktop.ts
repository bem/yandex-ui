import { ExtractProps, composeU } from '@bem-react/core';
import { Registry } from '@bem-react/di';

import { cnCheckbox } from '../Checkbox';
import { CheckboxBox } from '../Box/Checkbox-Box@desktop';
import { CheckboxControl } from '../Control/Checkbox-Control@desktop';
import { CheckboxLabel } from '../Label/Checkbox-Label@desktop';
import { CheckboxTick } from '../Tick/Checkbox-Tick@desktop';
import { Icon as IconPresenter } from '../../Icon/Icon';
import { withGlyphTypeTick } from '../../Icon/_glyph/Icon_glyph_type-tick';
import { withGlyphTypeIndeterminate } from '../../Icon/_glyph/Icon_glyph_type-indeterminate';

const checkboxRegistry = new Registry({ id: cnCheckbox() });
const Icon = composeU(withGlyphTypeTick, withGlyphTypeIndeterminate)(IconPresenter);

checkboxRegistry
    .set('Box', CheckboxBox)
    .set('Control', CheckboxControl)
    .set('Label', CheckboxLabel)
    .set('Tick', CheckboxTick)
    .set('Icon', Icon);

export { checkboxRegistry };
export type IconProps = ExtractProps<typeof Icon>;
