import React, {
    useCallback,
    useState,
    useEffect,
    useMemo,
    RefObject,
    ReactNode,
    MouseEventHandler,
    useRef,
} from 'react';

import { cn } from '@bem-react/classname';

import { mergeAllRefs } from '../lib/mergeRefs';

import './Image.css';

export interface IImageProps {
    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLImageElement>;
    /**
     * Ссылка на изображение
     */
    src?: string;
    /**
     * Набор источников для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `srcSet` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-srcset)
     */
    srcSet?: string;
    /**
     * Набор размеров для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `sizes` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-sizes)
     */
    sizes?: string;
    /**
     * URL картинки для экранов с высокой плотностью пикселей = srcSet: "url 2x". srcSet имеет приоритет.
     */
    src2x?: string;
    /**
     * Ссылка на изображение при неудачной загрузке
     */
    fallbackSrc?: string;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Дополнительный класс для изображения
     */
    imageClassName?: string;
    /**
     * Компонент для отображения во время загрузки картинки
     */
    stub?: ReactNode;
    /**
     * Альтернативный текст
     */
    alt?: string;
    /**
     * атрибут aria-label
     */
    ariaLabel?: string;
    /**
     * обработчик клика
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * атрибут [loading у изображения](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)
     */
    loading?: 'lazy' | 'eager' | 'auto';
    /**
     * Ширина изображения
     */
    width?: number | string;
    /**
     * Высота изображения
     */
    height?: number | string;
    /**
     * Скругления изображения
     */
    borderRadius?: number | string;
}

const cnImage = cn('Image');

const emptyImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

const ANIMATION_DELAY_MS = 50;

/**
 * Компонент для красивой загрузки картинок

 * - Пока загружается картинка, пользователь будет видеть `<stub/>`
 * - После загрузки картинки она будет плавно отображена поверх `<stub/>`
 * - После плавного показана картинки `<stub/>` будет удалён из `DOM`
 * - Если картинка загружается из кэша, то пользователь увидит сразу картинку без показа `<stub/>`
 * - Если картинку не удалось загрузить, то покажется стандартная картинка из свойства `fallback`
 * @param {IImageProps} props
 */
export const Image: React.FC<IImageProps> = (props) => {
    const {
        src,
        src2x,
        srcSet,
        sizes,
        fallbackSrc,
        className,
        imageClassName,
        stub,
        alt,
        ariaLabel,
        onClick,
        loading = 'lazy',
        width,
        height,
        borderRadius,
        innerRef,
    } = props;

    const [isLoaded, setLoaded] = useState(false);
    const [isFailed, setFailed] = useState(false);
    const [needAnimation, setNeedAnimation] = useState(false);
    const [canRemoveStub, setCanRemoveStub] = useState(false);

    // нужен реф по условию, а значит useRef не годится
    // важный момент: в innerRef должна быть актуальная ссылка на ref
    const imageRef = useRef<HTMLImageElement>(null);

    // обьединяем рефы
    const mergedRefs = useMemo(() => mergeAllRefs<HTMLImageElement>(imageRef, innerRef), [imageRef, innerRef]);

    const imageSrc = src || emptyImage;
    const legacySrcSet = src2x ? `${src2x} 2x` : undefined;
    const imageSrcSet = srcSet || legacySrcSet;

    const isRendered = useCallback(() => {
        if (!imageRef.current) {
            return false;
        }
        const { naturalWidth, naturalHeight } = imageRef.current;

        return naturalWidth > 0 && naturalHeight > 0;
    }, [imageRef]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isLoaded && !isRendered()) {
                setNeedAnimation(true);
            }
        }, ANIMATION_DELAY_MS);

        return () => clearTimeout(timer);
    }, [isLoaded, isRendered, setNeedAnimation]);

    const handleLoad = useCallback(() => {
        setLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setFailed(true);
    }, []);
    const containerClassNames = cnImage('Container', [className]);
    const imageClassNames = cnImage(
        {
            loaded: isLoaded,
            loading: needAnimation,
            animated: needAnimation && isLoaded,
        },
        // Если нет обертки, то добавляем className в изображение
        [!stub ? className : undefined, imageClassName],
    );

    const handleOnAnimationEnd = useCallback(() => {
        setCanRemoveStub(true);
    }, []);

    const sizeAttrs: Pick<IImageProps, 'width' | 'height' | 'borderRadius'> = {};
    // безопасно устанавливаем стили, чтобы избежать undefined в html
    if (width !== undefined) {
        sizeAttrs.width = width;
    }
    if (height !== undefined) {
        sizeAttrs.height = height;
    }
    if (borderRadius !== undefined) {
        sizeAttrs.borderRadius = borderRadius;
    }

    const image = (
        <img
            style={sizeAttrs}
            alt={alt}
            aria-hidden={ariaLabel ? 'false' : 'true'}
            aria-label={ariaLabel}
            className={imageClassNames}
            onAnimationEnd={handleOnAnimationEnd}
            onClick={onClick}
            onError={handleError}
            onLoad={handleLoad}
            ref={mergedRefs}
            src={isFailed && fallbackSrc ? fallbackSrc : imageSrc}
            srcSet={imageSrcSet}
            sizes={sizes}
            // TypeScript пока не знает про такой атрибут
            // @ts-ignore
            loading={loading}
        />
    );

    if (stub) {
        return (
            <div className={containerClassNames} style={sizeAttrs}>
                {needAnimation && !canRemoveStub && stub}
                {image}
            </div>
        );
    }

    return image;
};

Image.displayName = cnImage();
