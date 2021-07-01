import { Registry } from '@bem-react/di';

import { Attach } from '../../Attach/touch-pad/bundle';
import { Button } from '../../Button/touch-pad/bundle';
import { Checkbox } from '../../Checkbox/touch-pad/bundle';
import { Icon } from '../../Icon/touch-pad/bundle';
import { Image } from '../../Image/touch-pad/bundle';
import { Link } from '../../Link/touch-pad/bundle';
import { Progress } from '../../Progress/touch-pad/bundle';
import { Spin } from '../../Spin/touch-pad/bundle';
import { Menu } from '../../Menu/touch-pad/bundle';
import { Radiobox } from '../../Radiobox/touch-pad/bundle';
import { Select } from '../../Select/touch-pad/bundle';
import { TabsMenu } from '../../TabsMenu/touch-pad/bundle';
import { TabsPanes } from '../../TabsPanes/touch-pad/bundle';
import { Textarea } from '../../Textarea/touch-pad/bundle';
import { Textinput } from '../../Textinput/touch-pad/bundle';
import { UserPic } from '../../UserPic/touch-pad/bundle';
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
