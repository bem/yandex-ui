import { FunctionComponent } from 'react';

import { MenuGroupProps } from '../Group/Menu-Group';
import { IMenuItemProps } from '../Item/Menu-Item';
import { MenuTextProps } from '../Text/Menu-Text';
import { MenuTitleProps } from '../Title/Menu-Title';
import { IIconProps } from '../../Icon/Icon';
import { IWithGlyphTypeCheckProps } from '../../Icon/_glyph/Icon_glyph_type-check';

export interface IMenuRegistry {
    Group: FunctionComponent<MenuGroupProps>;
    Item: FunctionComponent<IMenuItemProps>;
    Text: FunctionComponent<MenuTextProps>;
    Title: FunctionComponent<MenuTitleProps>;
    Icon: FunctionComponent<IIconProps & IWithGlyphTypeCheckProps>;
}
