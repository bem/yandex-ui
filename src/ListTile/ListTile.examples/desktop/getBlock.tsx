import React, { useState } from 'react';
import { Tumbler } from '../../../Tumbler/Tumbler.bundle/desktop';
import { Checkbox } from '../../../Checkbox/Checkbox.bundle/desktop';
import { Icon } from '../../../Icon/Icon.bundle/common';
import { Text } from '../../../Text/Text.bundle/common';
import { UserPic } from '../../../UserPic/UserPic.bundle/desktop';
import { Image } from '../../../Image/Image';
import { Img16x9, Img1x1, Img3x4, Img4x3, Img9x16 } from './assets';
import { Button } from '../../../Button/Button.bundle/touch-phone';
import { Link } from '../../../Link/Link.bundle/touch-phone';

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
            return <Button view="default" size="s">Button</Button>;
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
