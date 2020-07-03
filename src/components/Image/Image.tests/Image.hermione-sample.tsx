import React from 'react';
import { render } from 'react-dom';

import { Image } from '../Image';
import { Hermione } from '../../../internal/components/Hermione/Hermione';

render(
    <Hermione style={{ fontSize: 0 }}>
        <Hermione element="Item">
            <Image src={require('../Image.assets/img-700w.png')} width={200} />
        </Hermione>
        <Hermione element="Item">
            <Image src={require('../Image.assets/img-700w.png')} height={100} />
        </Hermione>
        <Hermione element="Item">
            <Image src={require('../Image.assets/img-700w.png')} width={150} borderRadius={10} />
        </Hermione>
        <Hermione element="Item">
            <Image
                src="not-exists"
                stub={<img
                    style={{ maxHeight: '100%', position: 'absolute' }}
                    src={require('../Image.assets/2x1@1x.png')}
                />}
                width={200}
                height={100}
            />
        </Hermione>
        <Hermione element="Item">
            <Image
                src="not-exists"
                fallbackSrc={require('../Image.assets/img-not-found.png')}
                height={100}
            />
        </Hermione>
    </Hermione>,
    document.getElementById('root'),
);
