import React from 'react';
import { power, combination, permutation } from 'js-combinatorics';
import { optionsKnob, select, withKnobs } from '@storybook/addon-knobs';
import { ListTile } from '../../ListTile';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { Text } from '../../../Text/Text.bundle/desktop';
import { Cell } from './Layout';
import { blocks, getBlock } from './getBlock';
import { presets, presetsKeys } from '../../../Theme/presets';
import { cnTheme } from '../../../Theme';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};

function permutations(names: string[]) {
    return names.length > 1 ? combination(names, 2)
        .map((item) => permutation(item).toArray())
        .reduce((acc, cur) => acc.concat(cur), []) : [names];
}

function getLabel(leading: string | undefined, children: string | string[], trailing: string | undefined) {
    const res = Array.isArray(children) ? [...children] : [children];
    if (leading) {
        res.unshift(`Leading ${leading}`);
    }
    if (trailing) {
        res.push(`trailing ${trailing}`);
    }
    return res.join(', ');
}

export const TextOnly = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    return (
        <div className={cnTheme(presets[preset])} style={{ backgroundColor: 'var(--color-bg-default)' }}>
            <Text as="h2" typography="control-m" weight="medium" color="secondary">
                ListTile • Text and trailing Text
            </Text>
            <div className="Grid">
                {power(['Title', 'Subtitle', 'Overline', 'Meta'])
                    .filter((item) => item.length > 1)
                    .map((item) => {
                        return item.reduce<Record<string, string>>((acc, cur) => {
                            acc[cur.toLowerCase()] = cur;
                            return acc;
                        }, {});
                    })
                    .map((item, idx) => {
                        const {
                            title,
                            subtitle,
                            overline,
                            meta,
                        } = item;
                        return (
                            <Cell
                                label={getLabel(undefined, [
                                    title,
                                    subtitle,
                                    overline,
                                ].filter((name) => Boolean(name)), meta)} key={idx}>
                                <ListTile
                                    trailing={getBlock(meta)}
                            >
                                    {getBlock(title)}
                                    {getBlock(subtitle)}
                                    {getBlock(overline)}
                                </ListTile>
                            </Cell>
                        );
                    })}
            </div>
        </div>);
};

TextOnly.story = {
    name: 'text-only',
};

export const WithBlocksPermutations = () => {
    const preset = select('theme-preset', presetsKeys, 'default');
    const framingBlocks = optionsKnob('Blocks',
        blocks.reduce<Record<string, string>>((acc, cur) => {
            acc[cur] = cur;
            return acc;
        }, {
            Empty: '',
        }), ['Userpic', 'Checkbox', 'Tumbler', 'Image 1:1', 'Meta'], { display: 'multi-select' });

    return (
        <div className={cnTheme(presets[preset])} style={{ backgroundColor: 'var(--color-bg-default)' }}>
            <Text as="h2" typography="control-m" weight="medium" color="secondary">
                ListTile • Text with leading and/or trailing block permutations
            </Text>
            <div className="Grid">
                {
                    permutations(framingBlocks)
                        .map((item: string[], idx: number) => {
                            return (
                                <Cell label={getLabel(item[0], 'Text', item[1])} key={idx}>
                                    <ListTile
                                        alignItems="start"
                                        leftSpace={item[0] ? 'm' : undefined}
                                        rightSpace={item[1] ? 'm' : undefined}
                                        leading={getBlock(item[0])}
                                        trailing={getBlock(item[1])}
                                    >
                                        {getBlock('Overline')}
                                        {getBlock('Title')}
                                        {getBlock('Subtitle')}
                                    </ListTile>
                                </Cell>
                            );
                        })}
            </div>
        </div>
    );
};

WithBlocksPermutations.story = {
    name: 'with-blocks-permutations',
};
