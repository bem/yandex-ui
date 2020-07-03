import { Registry } from '@bem-react/di';

import { Attach } from '../../Attach/Attach.bundle/touch-pad';
import { Button } from '../../Button/Button.bundle/touch-pad';
import { Checkbox } from '../../Checkbox/Checkbox.bundle/touch-pad';
import { Icon } from '../../Icon/Icon.bundle/touch-pad';
import { Image } from '../../Image/Image.bundle/touch-pad';
import { Link } from '../../Link/Link.bundle/touch-pad';
import { Progress } from '../../Progress/Progress.bundle/touch-pad';
import { Spin } from '../../Spin/Spin.bundle/common';
import { Menu } from '../../Menu/Menu.bundle/touch-pad';
import { Radiobox } from '../../Radiobox/Radiobox.bundle/touch-pad';
import { Select } from '../../Select/Select.bundle/touch-pad';
import { TabsMenu } from '../../TabsMenu/TabsMenu.bundle/touch-pad';
import { TabsPanes } from '../../TabsPanes/TabsPanes.bundle/touch-pad';
import { Textarea } from '../../Textarea/Textarea.bundle/touch-pad';
import { Textinput } from '../../Textinput/Textinput.bundle/touch-pad';
import { UserPic } from '../../UserPic/UserPic.bundle/touch-pad';
import { cnShowcase } from '../Showcase';

export const showcaseRegistry = new Registry({ id: cnShowcase() });

showcaseRegistry
    .set('Attach', Attach)
    .set('Button', Button)
    .set('Checkbox', Checkbox)
    .set('Icon', Icon)
    .set('Image', Image)
    .set('Link', Link)
    .set('Progress', Progress)
    .set('Spin', Spin)
    .set('Menu', Menu)
    .set('Radiobox', Radiobox)
    .set('Select', Select)
    .set('TabsMenu', TabsMenu)
    .set('TabsPanes', TabsPanes)
    .set('Textarea', Textarea)
    .set('Textinput', Textinput)
    .set('UserPic', UserPic);
