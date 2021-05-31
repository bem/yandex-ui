import React, { useEffect, useState } from 'react';
import { Image } from '@yandex-lego/components/Image';

// @ts-expect-error
import notFoundImage from '../Image.assets/img-not-found.png';
// @ts-expect-error
import stubImage from '../Image.assets/2x1@1x.png';
// @ts-expect-error
import loadedImage from '../Image.assets/img-700w.png';

export const LoadErrorStub = () => {
    const [imageUrl, setImage] = useState('http://not-found-image');
    const stub = <img src={stubImage} style={{ position: 'absolute', width: '100%', height: '100%' }} />;

    useEffect(() => {
        setTimeout(() => setImage(loadedImage), 2000);
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
            <div>
                <p>Ошибка загрузки изображения, подставляем fallback</p>
                <pre>{['src="http://not-found-image"', 'fallback="/img-not-found-fallback.png"'].join('\n')}</pre>
                <Image src="http://not-found-image" fallbackSrc={notFoundImage} width={250} />
            </div>
            <div>
                <p>Показываем подложку на время загрузки изображения</p>

                <pre>
                    {'.stub { position: absolute; width: 100%; height: 100% }\n\n'}
                    {['src="./Image.assets/img-700w.png"', 'stub={<img className="stub" src="loading.png"} />'].join(
                        '\n',
                    )}
                </pre>

                <Image src={imageUrl} stub={stub} width={320} height={160} />
            </div>
        </div>
    );
};

LoadErrorStub.story = {
    name: 'load error stub',
};
