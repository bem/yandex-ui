import React, { FC, useState } from 'react';
import { Tumbler } from '@yandex-lego/components/Tumbler/desktop/bundle';
import { Checkbox } from '@yandex-lego/components/Checkbox/desktop/bundle';
import { Icon } from '@yandex-lego/components/Icon/bundle';
import { Text } from '@yandex-lego/components/Text/bundle';
import { UserPic } from '@yandex-lego/components/UserPic/desktop/bundle';
import { Image } from '@yandex-lego/components/Image';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';

export const Img1x1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEQSURBVHgB7Zi9ioUwEIUnKtr401rY+DC+PyLYirUgaGEhorsRNlwWb6PGg3A+CGQIhHwkMwNR4zhu8mIceTkUQEMBNBRAQwE0FEBDATQUQPN6AU8usG2b1HVt4iRJJMsyeZLLAk3TmDhN08cFmANoLj2h/8zzLF3XmTgIAonjWGxyq4DOiWVZTKznjuNIGIZii1uf0LquRkAfXI9PIRvcKjAMg5RluT+lffNfAX0rNrGWxJ+3YROWUTSXqpBS6rDz6qrjuu4+931fpmmSvu8P99Dd2/POH0M98bnbtq1UVXW4VhTF3i/Ocmsf+EYURZLn+eHa302dRfF7HQwF0FAADQXQUAANBdBQAA0F0Lxe4AdZOk5YVpEfmAAAAABJRU5ErkJggg==';
export const Img3x4 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABQCAYAAABFyhZTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFkSURBVHgB7dpJqoNAFIXhm5Y0s2QFjl2B+586UnANggNBxL55XCGZmPfwIVrheL6JUnGQX6q0CNklSdLLhuxlYxiMjsHoGIyOwegYjI7B6BiMjsHoGIyOwegYjI7B6BiMbnPBR5kpiiLxPG80frvdxHEc+Tazg9u2lTzPR+P7/XdOHq5hdAxGN/uh9Zuu6ySO49H44XCQ+/0+HE1YLLjveymK4uNnWZbJ8/mU0+kkazMypfVmJEkiJhhbw1VVDeFrWyxYY3RDUtf1e0yn8Pl8NrZ+1WLBZVlKEATi+/57LetN0B2YyV3YYg+tF41smmY41+Pr3BRuPNAxGB330v+l79bH4/HnNdfrdXj/fqIbkDRNZQr9FeVyucgcO9P/lw7DUFzXnXStbdtiWZbMwSm9Nt1m6pSf4nic/3WNT+m18bWEjsHoGIyOwegYjI7B6BiMjsHoGIyOwegYjI7B6BiMjsHofgDlt2Ijl284NwAAAABJRU5ErkJggg==';
export const Img4x3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8CAYAAADxJz2MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGASURBVHgB7dpJioNQFIXhm5Y0s2QFjl2B+586UnANggNBxL4prpBMTFVJDjyfcL6J8uIkP1x9huyyLBuFvrYXgjAgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSDoKIYkSSJBEMzWb7ebeJ4nW2UsYN/3UpblbH2/3/YQcIRBDAhiQBADgow9RH4zDIOkaTpbPxwOcr/fp6PNVg84jqNUVfXxs6Io5Pl8yul0EltZPcIaN8sysZn198CmaaaQtlo9oMbRDXbbtu81Hdnz+Wz9/U+tHrCua4miSMIwfN8LNaq+oWzhLWX1h8iLRuu6bjrX4+vcdtwHghgQxIAgBgQxIMjYU1j3do/H489rrtfrtP/7RDfUeZ7LEvor9+VyERN2W/mXfhzH4vv+omtd1xXHccQEjjDImo30f/S1Tkd8iePR3NfazAjbiiMMYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQNAPJwph+8kNlNsAAAAASUVORK5CYII=';
export const Img9x16 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAABQCAYAAACNpvyFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB7drLaoNAGIbh35zjRnHl1rUX4n279Da8AFERz9qOJaVEQgZkvmL7PRACw5C8kcloiFZRFLPszEF2iNEojEZhNAqjURiNwmgURqMwGoXRKIxGYTQKo1EYjbLL6JPOpCRJpCzL1XgYhuL7vqBpRTdNI3Vdr8bHcZTfwDWNwmgUrS/iK1VVSZZlq/Hb7Sb3+11M2RQ9DMOyszxTY23biuu6YoKx5aG2SBVugtE13XWdmLApuu/7ZSlM0/T1YoeDXC6X5WFZlsyzmX/7Nq3pNE2XZ8/zJAiC7/Hj8bh8IFM2RT88AtURN7UkfuLJBYXRKH/32sNxHDmdXk+1bXvZm5+prU/J81zrB4Pa53VO/Rbifo84juXzfd7OO5/PEkXR23n/79JU1/V61bpUVUdah8XbgUAYjcJoFEajMBqF0SiMRmE0CqNRGI3CaBRGozAahdEou4z+AEWCXTCHu8KWAAAAAElFTkSuQmCC';
export const Img16x9 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAtCAYAAAA5reyyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgB7dpLy4JAGMXx45tEdCMiqFZ9/2/Ttk2L1oU3vKO+jVsjogPTCOcHUTwEwR/HsdKL47iDfO0PQlFAkgKSFJCkgCQFJCkgSQFJCkhSQJIPS/I8x+PxGMx938fhcMBYWQsYRRHO5/NgvlgsRh1QS5ikgCQFJCkgydom8k5d14OZ2Z09z4Prfh6waRrc7/fB3MSbz+dYr9dwmbNLuOs6pGmKJEngMufPgVmWwWXOB2zbtj8aXfXzgGYDuV6vuN1ufSxjNpv15z7z7DonNpEgCPrX2+0Wy+USRVH0jzHQdSBJAUkKSFJAkgKSFJDk2bo7q6oqPD/r7XvMd9/JZDKYT6dThGGIy+WCT5xOJxyPR9hg7TrQRNjtdvhWWZYvf3R4Zb/fwxYtYZI3lhsszb96nx6Bm80Gq9UKNowmoKu0hEkKSFJAkgKSFJCkgCQFJCkgSQFJCkj6B/ugZaxL+8yxAAAAAElFTkSuQmCC';

const Switch = () => {
    const [checked, setChecked] = useState(false);
    return <Tumbler view="default" size="s" checked={checked} onChange={() => setChecked(!checked)} />;
};

const Check = () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox view="default" size="m" checked={checked} onChange={() => setChecked(!checked)} />;
};

const Title = () => (
    <Text as="div" typography="control-xl" weight="regular" color="primary">
        One-line item
    </Text>
);

const SubTitle = () => (
    <Text as="div" typography="control-m" weight="regular" color="secondary">
        Secondary text
        <br />
        Tertiary text
    </Text>
);

const Overline = () => (
    <Text as="div" typography="overline-l" weight="medium" color="secondary">
        Overline
    </Text>
);

const Meta = () => (
    <Text as="div" typography="control-m" weight="regular" color="secondary">
        Meta
    </Text>
);

export const getBlock = (key: string) => {
    switch (key) {
        case 'Icon':
            const iconSize = 16;
            return <Icon glyph="type-cross" style={{ width: iconSize, height: iconSize }} />;
        case 'Meta':
            return <Meta />;
        case 'Tumbler':
            return <Switch />;
        case 'Checkbox':
            return <Check />;
        case 'Userpic':
            return <UserPic size="m" />;
        case 'Image 1:1':
            const imageSize = 48;
            return <Image src={Img1x1} width={imageSize} height={imageSize} />;
        case 'Image 3:4':
            return <Image src={Img3x4} width={60} height={80} />;
        case 'Image 4:3':
            return <Image src={Img4x3} width={80} height={60} />;
        case 'Image 9:16':
            return <Image src={Img9x16} width={45} height={80} />;
        case 'Image 16:9':
            return <Image src={Img16x9} width={80} height={45} />;
        case 'Button':
            return (
                <Button view="default" size="s">
                    Button
                </Button>
            );
        case 'Link':
            return <Link view="default">Link</Link>;
        case 'Title':
            return <Title />;
        case 'Subtitle':
            return <SubTitle />;
        case 'Overline':
            return <Overline />;
        default:
            return undefined;
    }
};

export const blocks = [
    'Icon',
    'Meta',
    'Tumbler',
    'Checkbox',
    'Userpic',
    'Image 1:1',
    'Image 3:4',
    'Image 4:3',
    'Image 9:16',
    'Image 16:9',
];

const styles = `
    .Grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .Cell {
        height: 160px;
        margin: 0 0 -1px -1px;
        padding: 16px;

        border: 1px solid var(--color-bg-border);
    }
`;

export const Cell: FC<{ label: string }> = ({ children, label }) => (
    <>
        <style>{styles}</style>
        <div className="Cell">
            <Text as="h3" typography="control-xs" color="secondary">
                {label}
            </Text>
            {children}
        </div>
    </>
);
