import React from 'react';
import { Image } from '@yandex-lego/components/Image';

// @ts-expect-error
import img700w from '../Image.assets/img-700w.png';

export const WidthAndHeight = () => (
    <>
        <p>{'width={300}'}</p>
        <Image src={img700w} width={300} />
        <p>{'height={150}'}</p>
        <Image src={img700w} height={150} />
    </>
);
