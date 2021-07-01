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

export interface IShowcaseRegistry {
    Icon: typeof Icon;
    Attach: typeof Attach;
    Button: typeof Button;
    Checkbox: typeof Checkbox;
    Image: typeof Image;
    Link: typeof Link;
    Progress: typeof Progress;
    Spin: typeof Spin;
    Textarea: typeof Textarea;
    Textinput: typeof Textinput;
    TabsMenu: typeof TabsMenu;
    TabsPanes: typeof TabsPanes;
    Menu: typeof Menu;
    Select: typeof Select;
    UserPic: typeof UserPic;
    Radiobox: typeof Radiobox;
}
