import React from 'react';

import { Image } from '@yandex-lego/components/Image/desktop/bundle';

export const SizesAndSrcset = () => (
    <>
        <Image src={require('../../Image.assets/img-700w.png')} />
        <br />
        <br />
        <pre>
            {'srcSet="path/to/image-700w.png 700w,\n        path/to/image-540w.png 540w"\n' +
                'sizes="(max-width: 700px) 100vw, 700px"'}
        </pre>
        <Image
            src={require('../../Image.assets/img-700w.png')}
            srcSet={
                require('../../Image.assets/img-700w.png') +
                ' 700w, ' +
                require('../../Image.assets/img-540w.png') +
                ' 540w'
            }
            sizes="(max-width: 700px) 100vw, 700px"
        />
    </>
);
