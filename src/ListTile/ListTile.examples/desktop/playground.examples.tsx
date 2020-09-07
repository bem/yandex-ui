import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { AlignItemsValue, ListTile, ListTileWrapperSpace } from '../../ListTile';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { Text } from '../../../Text/Text.bundle/common';
import { blocks, getBlock } from './getBlock';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

const spaces = ['3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
    .reduce<Record<string, string>>((acc, cur) => {
        acc[cur] = cur;
        return acc;
    }, {});

const widgets = blocks.reduce<Record<string, string>>((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

export const Playground = () => {
    const title = text('Title (required)', 'One-line title', 'Title');
    const subtitle = text('Subtitle', 'One-line subtitle or body text', 'Subtitle');
    const hasSubtitle = boolean('Has subtitle', true, 'Subtitle');
    const overline = text('Overline', 'Overline', 'Overline');
    const hasOverline = boolean('Has overline', true, 'Overline');
    const inline = boolean('Inline', true, 'Layout');
    const alignItems = select<AlignItemsValue>(
        'Align items',
        ['baseline', 'center', 'start', 'end', 'stretch'],
        'center',
        'Layout',
    );
    const leading = select('Leading', widgets, 'Checkbox', 'Leading');
    const hasLeading = boolean('Has leading', true, 'Leading');
    const trailing = select('Leading', widgets, 'Meta', 'Trailing');
    const hasTrailing = boolean('Has trailing', true, 'Trailing');
    const leftSpace = select('Left space', spaces, 's', 'Layout');
    const rightSpace = select('Right space', spaces, 's', 'Layout');

    return (
        <ListTile
            alignItems={alignItems}
            inline={inline}
            leftSpace={leftSpace as ListTileWrapperSpace}
            rightSpace={rightSpace as ListTileWrapperSpace}
            leading={hasLeading ? getBlock(leading) : undefined}
            trailing={hasTrailing ? getBlock(trailing) : undefined}
        >
            {
                hasOverline ? (
                    <Text as="div" typography="overline-l" weight="medium" color="secondary">
                        {overline}
                    </Text>
                ) : undefined
            }
            <Text as="div" typography="control-xl" weight="regular" color="primary">
                {title}
            </Text>
            {
                hasSubtitle ? (
                    <Text as="div" typography="control-m" weight="regular" color="secondary">
                        {subtitle}
                    </Text>
                ) : undefined
            }
        </ListTile>
    );
};

Playground.story = {
    name: 'playground',
};
