import React from 'react';
import { Image } from '@yandex-lego/components/Image';

// @ts-expect-error
import img700w from '../Image.assets/img-700w.png';
// @ts-expect-error
import img540w from '../Image.assets/img-540w.png';

export const SizesAndSrcset = () => (
    <>
        <Image src={img700w} />
        <br />
        <br />
        <pre>
            {'srcSet="path/to/image-700w.png 700w,\n        path/to/image-540w.png 540w"\n' +
                'sizes="(max-width: 700px) 100vw, 700px"'}
        </pre>
        <Image src={img700w} srcSet={img700w + ' 700w, ' + img540w + ' 540w'} sizes="(max-width: 700px) 100vw, 700px" />
    </>
);
