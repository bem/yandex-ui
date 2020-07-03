import React from 'react';

import { Attach } from '../../Attach.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const HasHolder = () => (
    <>
        <Attach size="m" view="default">Select file</Attach>
        <Attach hasHolder holderText="no file chosen" size="m" view="default">Select file</Attach>
    </>
);

HasHolder.story = {
    name: 'hasHolder',
};

export const Size = () => (
    <>
        <Attach size="l" view="default">Select file</Attach>
        <Attach size="m" view="default">Select file</Attach>
        <Attach size="s" view="default">Select file</Attach>
    </>
);

Size.story = {
    name: 'size',
};

export const Theme = () => (
    <>
        <Attach hasHolder holderText="no file chosen" size="m" theme="normal">Select file</Attach>
    </>
);

Theme.story = {
    name: 'theme',
};

export const View = () => (
    <>
        <Attach hasHolder holderText="no file chosen" size="m" view="default">Select file</Attach>
    </>
);

View.story = {
    name: 'view',
};
