import React from 'react';

import { Link } from '../../Link.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Pseudo = () => (
    <>
        <Link pseudo theme="pseudo">
            Псевдоссылка с темой pseudo
        </Link>
        <br />
        <Link pseudo>Псевдоссылка без темы</Link>
        <br />
        <Link pseudo href="#">
            Псевдоссылка без темы но с href оформляется иначе.
        </Link>
    </>
);

Pseudo.story = {
    name: 'pseudo',
};

export const Theme = () => (
    <>
        <Link href="#" theme="black">
            Link
        </Link>
        <br />
        <Link href="#" theme="ghost">
            Link
        </Link>
        <br />
        <Link href="#" theme="normal">
            Link
        </Link>
        <br />
        <Link href="#" theme="outer">
            Link
        </Link>
        <br />
        <Link href="#" theme="pseudo">
            Link
        </Link>
        <br />
        <Link href="#" theme="strong">
            Link
        </Link>
    </>
);

Theme.story = {
    name: 'theme',
};

export const View = () => (
    <Link href="#" view="default">
        Link
    </Link>
);

View.story = {
    name: 'view',
};
