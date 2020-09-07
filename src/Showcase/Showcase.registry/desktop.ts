import { Registry } from '@bem-react/di';

import { Attach } from '../../Attach/Attach.bundle/desktop';
import { Button } from '../../Button/Button.bundle/desktop';
import { Checkbox } from '../../Checkbox/Checkbox.bundle/desktop';
import { Icon } from '../../Icon/Icon.bundle/desktop';
import { Image } from '../../Image/Image.bundle/desktop';
import { Link } from '../../Link/Link.bundle/desktop';
import { Progress } from '../../Progress/Progress.bundle/desktop';
import { Spin } from '../../Spin/Spin.bundle/common';
import { Menu } from '../../Menu/Menu.bundle/desktop';
import { Radiobox } from '../../Radiobox/Radiobox.bundle/desktop';
import { Select } from '../../Select/Select.bundle/desktop';
import { TabsMenu } from '../../TabsMenu/TabsMenu.bundle/desktop';
import { TabsPanes } from '../../TabsPanes/TabsPanes.bundle/desktop';
import { Textarea } from '../../Textarea/Textarea.bundle/desktop';
import { Textinput } from '../../Textinput/Textinput.bundle/desktop';
import { UserPic } from '../../UserPic/UserPic.bundle/desktop';
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
