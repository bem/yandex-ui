import React from 'react';
import { Link } from '@yandex-lego/components/Link/desktop/bundle';

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
