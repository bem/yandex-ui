import { Registry } from '@bem-react/di';

import { cnMenu } from '../Menu';
import { MenuGroup } from '../Group/Menu-Group';
import { MenuItem } from '../Item/Menu-Item';
import { MenuText } from '../Text/Menu-Text';
import { MenuTitle } from '../Title/Menu-Title';
import { Icon } from '../../Icon/Icon';
import { withGlyphTypeCheck } from '../../Icon/_glyph/Icon_glyph_type-check';

export * from '.';

export const menuRegistry = new Registry({ id: cnMenu() });

menuRegistry
    .set('Group', MenuGroup)
    .set('Item', MenuItem)
    .set('Text', MenuText)
    .set('Title', MenuTitle)
    .set('Icon', withGlyphTypeCheck(Icon));
