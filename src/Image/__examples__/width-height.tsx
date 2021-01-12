import React from 'react';
import { Image } from '@yandex-lego/components/Image';

export const WidthAndHeight = () => (
    <>
        <p>{'width={300}'}</p>
        <Image src={require('../Image.assets/img-700w.png')} width={300} />
        <p>{'height={150}'}</p>
        <Image src={require('../Image.assets/img-700w.png')} height={150} />
    </>
);
