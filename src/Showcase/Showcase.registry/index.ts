import { Attach } from '../../Attach/Attach.bundle/desktop';
import { Button } from '../../Button/Button.bundle/desktop';
import { Checkbox } from '../../Checkbox/Checkbox.bundle/desktop';
import { Icon } from '../../Icon/Icon.bundle/desktop';
import { Image } from '../../Image/Image.bundle/desktop';
import { Link } from '../../Link/Link.bundle/desktop';
import { Progress } from '../../Progress/Progress.bundle/desktop';
import { Spin } from '../../Spin/Spin.bundle/desktop';
import { Menu } from '../../Menu/Menu.bundle/desktop';
import { Radiobox } from '../../Radiobox/Radiobox.bundle/desktop';
import { Select } from '../../Select/Select.bundle/desktop';
import { TabsMenu } from '../../TabsMenu/TabsMenu.bundle/desktop';
import { TabsPanes } from '../../TabsPanes/TabsPanes.bundle/desktop';
import { Textarea } from '../../Textarea/Textarea.bundle/desktop';
import { Textinput } from '../../Textinput/Textinput.bundle/desktop';
import { UserPic } from '../../UserPic/UserPic.bundle/desktop';

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
