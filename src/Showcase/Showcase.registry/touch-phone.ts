import { Registry } from '@bem-react/di';

import { Attach } from '../../Attach/Attach.bundle/touch-phone';
import { Button } from '../../Button/Button.bundle/touch-phone';
import { Checkbox } from '../../Checkbox/Checkbox.bundle/touch-phone';
import { Icon } from '../../Icon/Icon.bundle/touch-phone';
import { Image } from '../../Image/Image.bundle/touch-phone';
import { Link } from '../../Link/Link.bundle/touch-phone';
import { Progress } from '../../Progress/Progress.bundle/touch-phone';
import { Spin } from '../../Spin/Spin.bundle/touch-phone';
import { Menu } from '../../Menu/Menu.bundle/touch-phone';
import { Radiobox } from '../../Radiobox/Radiobox.bundle/touch-phone';
import { Select } from '../../Select/Select.bundle/touch-phone';
import { TabsMenu } from '../../TabsMenu/TabsMenu.bundle/touch-phone';
import { TabsPanes } from '../../TabsPanes/TabsPanes.bundle/touch-phone';
import { Textarea } from '../../Textarea/Textarea.bundle/touch-phone';
import { Textinput } from '../../Textinput/Textinput.bundle/touch-phone';
import { UserPic } from '../../UserPic/UserPic.bundle/touch-phone';
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
