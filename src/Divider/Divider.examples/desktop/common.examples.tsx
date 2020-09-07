import React from 'react';

import { Divider } from '../../Divider';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Simple = () => (
    <>
        Content
        <Divider style={{ margin: '8px 0' }} />
        Content
    </>
);

Simple.story = {
    name: 'simple',
};

export const Size = () => (
    <>
        Content
        <Divider size={4} style={{ margin: '8px 0' }} />
        Content
    </>
);

Size.story = {
    name: 'size',
};

export const Color = () => (
    <>
        Content
        <Divider color="#f00" style={{ margin: '8px 0' }} />
        Content
    </>
);

Color.story = {
    name: 'color',
};

export const WithText = () => (
    <>
        Content
        <Divider style={{ margin: '8px 0' }}>Section</Divider>
        Content
    </>
);

WithText.story = {
    name: 'with-text',
};

export const WithStyles = () => (
    <>
        Content
        <Divider style={{ margin: '8px 0', padding: '0 16px' }}>Section</Divider>
        Content
    </>
);

WithStyles.story = {
    name: 'with-styles',
};
