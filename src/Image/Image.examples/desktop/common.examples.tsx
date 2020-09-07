import React, { useEffect, useRef, useState } from 'react';

import { Image } from '../../Image.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const WidthAndHeight = () => (
    <>
        <p>{'width={300}'}</p>
        <Image src={require('../../Image.assets/img-700w.png')} width={300} />
        <p>{'height={150}'}</p>
        <Image src={require('../../Image.assets/img-700w.png')} height={150} />
    </>
);

WidthAndHeight.story = {
    name: 'width and height',
};

export const SizesAndSrcset = () => (
    <>
        <p>
            Чтобы увидеть разницу, измените ширину окна браузера во вкладке <strong>Песочница</strong>.
        </p>
        <p>—</p>
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

SizesAndSrcset.story = {
    name: 'sizes and srcSet',
};

export const WithFullProps = () => {
    const imageRef = useRef(null);
    const stub = (
        <img
            src={require('../../Image.assets/2x1@1x.png')}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
    );

    return (<Image
        borderRadius={10}
        height={150}
        innerRef={imageRef}
        sizes="(max-width: 700px) 100vw, 700px"
        width={300}
        loading="auto"
        src="https://example.com/image-1x.png"
        src2x="https://example.com/image-2x.png"
        srcSet={
            require('../../Image.assets/img-700w.png') +
            ' 700w, ' +
            require('../../Image.assets/img-540w.png') +
            ' 540w'
        }
        fallbackSrc="https://example.com/image-fallback.png"
        alt="Image description"
        ariaLabel="Image description"
        className="mix-root-element (container if use 'stub' or image)"
        imageClassName="mix-for-img-tag-only"
        // eslint-disable-next-line no-console
        onClick={() => console.log('I\'m picture!')}
        stub={stub}
    />);
};

WithFullProps.story = {
    name: 'with full props',
};

export const LoadErrorStub = () => {
    const [imageUrl, setImage] = useState('http://not-found-image');
    const stub = (
        <img
            src={require('../../Image.assets/2x1@1x.png')}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
    );

    useEffect(() => {
        setTimeout(() => setImage(require('../../Image.assets/img-700w.png')), 2000);
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
            <div>
                <p>Ошибка загрузки изображения, подставляем fallback</p>
                <pre>
                    {
                    [
                        'src="http://not-found-image"',
                        'fallback="/img-not-found-fallback.png"',
                    ].join('\n')
                    }
                </pre>
                <Image
                    src="http://not-found-image"
                    fallbackSrc={require('../../Image.assets/img-not-found.png')}
                    width={250}
                />
            </div>
            <div>
                <p>Показываем подложку на время загрузки изображения</p>

                <pre>
                    {
                        '.stub { position: absolute; width: 100%; height: 100% }\n\n'
                    }
                    {
                    [
                        'src="./Image.assets/img-700w.png"',
                        'stub={<img className="stub" src="loading.png"} />',
                    ].join('\n')
                    }
                </pre>

                <Image
                    src={imageUrl}
                    stub={stub}
                    width={320}
                    height={160}
                />
            </div>
        </div>
    );
};

LoadErrorStub.story = {
    name: 'load error stub',
};
