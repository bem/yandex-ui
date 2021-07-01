import { Registry } from '@bem-react/di';

import { Attach } from '../../Attach/touch-phone/bundle';
import { Button } from '../../Button/touch-phone/bundle';
import { Checkbox } from '../../Checkbox/touch-phone/bundle';
import { Icon } from '../../Icon/touch-phone/bundle';
import { Image } from '../../Image/touch-phone/bundle';
import { Link } from '../../Link/touch-phone/bundle';
import { Progress } from '../../Progress/touch-phone/bundle';
import { Spin } from '../../Spin/touch-phone/bundle';
import { Menu } from '../../Menu/touch-phone/bundle';
import { Radiobox } from '../../Radiobox/touch-phone/bundle';
import { Select } from '../../Select/touch-phone/bundle';
import { TabsMenu } from '../../TabsMenu/touch-phone/bundle';
import { TabsPanes } from '../../TabsPanes/touch-phone/bundle';
import { Textarea } from '../../Textarea/touch-phone/bundle';
import { Textinput } from '../../Textinput/touch-phone/bundle';
import { UserPic } from '../../UserPic/touch-phone/bundle';
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
