import { Registry } from '@bem-react/di';

import { Attach } from '../../Attach/desktop/bundle';
import { Button } from '../../Button/desktop/bundle';
import { Checkbox } from '../../Checkbox/desktop/bundle';
import { Icon } from '../../Icon/desktop/bundle';
import { Image } from '../../Image/desktop/bundle';
import { Link } from '../../Link/desktop/bundle';
import { Progress } from '../../Progress/desktop/bundle';
import { Spin } from '../../Spin/desktop/bundle';
import { Menu } from '../../Menu/desktop/bundle';
import { Radiobox } from '../../Radiobox/desktop/bundle';
import { Select } from '../../Select/desktop/bundle';
import { TabsMenu } from '../../TabsMenu/desktop/bundle';
import { TabsPanes } from '../../TabsPanes/desktop/bundle';
import { Textarea } from '../../Textarea/desktop/bundle';
import { Textinput } from '../../Textinput/desktop/bundle';
import { UserPic } from '../../UserPic/desktop/bundle';
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
