import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import { Image } from '@yandex-lego/components/Image';

export const Playground = () => {
    const url = text('url', 'static/media/img-700w.1b0180bb.png');
    const alt = text('alt', 'Альтернативный текст');
    const width = number('width', 700);
    const height = number('height', 268);
    const borderRadius = number('borderRadius', 5);
    const sizes = text('sizes', '(max-width: 600px) 200px, 75vw');
    const srcSet = text('srcSet (file)', url + ' 700w');
    const fallback = text('fallback src', '');
    const ariaLabel = text('aria-label', 'Image description');

    return (
        <Image
            src={url}
            alt={alt}
            width={width}
            height={height}
            borderRadius={borderRadius}
            srcSet={srcSet}
            sizes={sizes}
            fallbackSrc={fallback}
            ariaLabel={ariaLabel}
        />
    );
};
